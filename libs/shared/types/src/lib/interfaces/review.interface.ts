import { WatermarkedType } from '../enums/watermarked-type.enum';
import { Image } from './image.interface';
import { ImageDimension } from './image-dimension.interface';

export interface Review {
  readonly id?: string;
  readonly watermarkedType: WatermarkedType;
  readonly slug: string;
  readonly order: number;
  readonly title?: string;
  readonly text: string[];
  readonly images: Image[];
  readonly imageDimensions: ImageDimension[];
  readonly isPublic: boolean;
}
