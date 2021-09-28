export interface ImageUpdate {
  readonly fileName: string;
  readonly order: number;
  readonly isStarred: boolean;
  readonly isLoved: boolean;
  readonly title?: string;
  readonly seoDescription?: string;
  readonly seoKeywords?: string;
  readonly dateCreated?: string;
  readonly datePublished?: string;
}
