export interface BlogRequest {

  title: string;

  slug: string;

  content: string;

  metaTitle?: string;

  metaDescription?: string;

  imageUrl?: string;
}