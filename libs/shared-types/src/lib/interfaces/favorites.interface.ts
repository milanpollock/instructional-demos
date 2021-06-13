import { Image } from './image.interface';
import { ImageDimension } from './image-dimension.interface';
import { Video } from './video.interface';
import { VideoDimension } from './video-dimension.interface';
import { Emotion } from './emotion.interface';
import { Comment } from './comment.interface';

export interface Favorites {
  readonly id?: string;
  // content
  readonly images: ReadonlyArray<Image>;
  readonly imageDimensions: ReadonlyArray<ImageDimension>;
  readonly videos: ReadonlyArray<Video>;
  readonly videoDimensions: ReadonlyArray<VideoDimension>;
  readonly emotions: ReadonlyArray<Emotion>;
  readonly comments: ReadonlyArray<Comment>;
}
