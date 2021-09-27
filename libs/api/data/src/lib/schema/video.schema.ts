import { ImageState } from '@dark-rush-photography/shared/types';

export const videoSchema = {
  id: { type: String, required: true },
  entityId: { type: String, required: true },
  state: {
    type: String,
    enum: Object.keys(ImageState),
    required: true,
  },
  blobPathId: { type: String, required: true },
  fileName: { type: String, required: true },
};
