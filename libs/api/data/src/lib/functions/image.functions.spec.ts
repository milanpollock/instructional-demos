import { Image, PostState } from '@dark-rush-photography/shared-types';
import { findPublicImages, toImage } from './image.functions';

describe('image.functions', () => {
  const image = {
    id: 'id',
    entityId: 'entityId',
    fileName: 'fileName',
    postState: PostState.New,
    order: 10,
    isStared: true,
    isLoved: true,
    isLiked: true,
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    dateCreated: 'dateCreated',
    datePublished: 'datePublished',
  } as Image;

  describe('toImage', () => {
    it('should return all fields of an image', () => {
      const result = toImage({ ...image });
      expect(result).toEqual(image);
    });

    it('should no longer have an _id', () => {
      const imageWithId = {
        _id: 'id',
        ...image,
      };
      const result = toImage(imageWithId);
      expect('_id' in result).toBe(false);
    });

    it('should have an undefined title if not provided', () => {
      const result = toImage({
        ...image,
        title: undefined,
      });
      expect(result.title).toBeUndefined();
    });

    it('should have an undefined description if not provided', () => {
      const result = toImage({
        ...image,
        description: undefined,
      });
      expect(result.description).toBeUndefined();
    });

    it('should have undefined keywords if not provided', () => {
      const result = toImage({
        ...image,
        keywords: undefined,
      });
      expect(result.keywords).toBeUndefined();
    });

    it('should have an undefined date published if not provided', () => {
      const result = toImage({
        ...image,
        datePublished: undefined,
      });
      expect(result.datePublished).toBeUndefined();
    });
  });

  describe('findPublicImages', () => {
    it('should include images that are public', () => {
      const images = [
        { ...image, state: PostState.New },
        { ...image, state: PostState.Public },
      ];

      const result = findPublicImages(images);
      expect(result.length).toBe(1);
    });

    it('should not include any images if none are public', () => {
      const images = [
        { ...image, state: PostState.New },
        { ...image, state: PostState.New },
      ];

      const result = findPublicImages(images);
      expect(result.length).toBe(0);
    });
  });
});
