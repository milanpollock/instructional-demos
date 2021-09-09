import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { concatMap, filter, from, Observable, of, tap, toArray } from 'rxjs';

import {
  Image,
  ImageDimension,
  MediaState,
  MediaType,
} from '@dark-rush-photography/shared/types';
import { DEFAULT_ENTITY_GROUP, Media } from '@dark-rush-photography/api/types';
import { Document, DocumentModel } from '../schema/document.schema';
import {
  deleteBlob$,
  getAzureStorageBlobPath,
  getAzureStorageBlobPathWithDimension,
} from '@dark-rush-photography/api/util';
import { loadMedia } from '../content/media.functions';
import { ConfigProvider } from './config.provider';
import { ImageProvider } from './image.provider';

@Injectable()
export class ImageRemoveProvider {
  private readonly logger: Logger;

  constructor(
    private readonly configProvider: ConfigProvider,
    @InjectModel(Document.name)
    private readonly entityModel: Model<DocumentModel>,
    private readonly imageProvider: ImageProvider
  ) {
    this.logger = new Logger(ImageRemoveProvider.name);
  }

  removeNewImages$(documentModel: DocumentModel): Observable<DocumentModel> {
    if (documentModel.images.length === 0) {
      this.logger.log('Document model does not have any images');
      return of(documentModel);
    }

    if (documentModel.group === DEFAULT_ENTITY_GROUP) {
      this.logger.log(
        `Removing ${documentModel.type} ${documentModel.slug} images`
      );
    } else {
      this.logger.log(
        `Removing ${documentModel.type} ${documentModel.group} ${documentModel.slug} images`
      );
    }

    return from(documentModel.images).pipe(
      filter((image) => image.state === MediaState.New),
      concatMap((image) => this.remove$(image, documentModel, this.entityModel))
    );
  }

  remove$(
    image: Image,
    documentModel: DocumentModel,
    entityModel: Model<DocumentModel>
  ): Observable<DocumentModel> {
    return this.imageProvider
      .setIsProcessing$(image.id, image.entityId, true, entityModel)
      .pipe(
        concatMap(() =>
          from(
            this.removeImageBlobs$(
              loadMedia(
                MediaType.Image,
                image.id,
                image.fileName,
                image.state,
                documentModel
              ),
              documentModel.imageDimensions.filter(
                (imageDimension) => imageDimension.id === image.id
              )
            )
          )
        ),
        tap(() =>
          this.logger.log(`Removing data ${image.id} ${image.fileName}`)
        ),
        concatMap(() =>
          from(
            this.imageProvider.remove$(image.id, image.entityId, entityModel)
          )
        )
      );
  }

  removeImageBlobs$(
    media: Media,
    imageDimensions: ImageDimension[]
  ): Observable<boolean> {
    if (imageDimensions.length === 0) {
      return deleteBlob$(
        this.configProvider.getAzureStorageConnectionString(media.state),
        this.configProvider.getAzureStorageBlobContainerName(media.state),
        getAzureStorageBlobPath(media)
      );
    }

    return from(imageDimensions).pipe(
      concatMap((imageDimension) =>
        deleteBlob$(
          this.configProvider.getAzureStorageConnectionString(media.state),
          this.configProvider.getAzureStorageBlobContainerName(media.state),
          getAzureStorageBlobPathWithDimension(media, imageDimension.type)
        )
      ),
      toArray<boolean>(),
      concatMap(() =>
        deleteBlob$(
          this.configProvider.getAzureStorageConnectionString(media.state),
          this.configProvider.getAzureStorageBlobContainerName(media.state),
          getAzureStorageBlobPath(media)
        )
      )
    );
  }
}
