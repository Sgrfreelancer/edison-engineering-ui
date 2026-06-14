export interface BlogItem {
  category: string;
  title: string;
  description?: string;
  image: string;
  route: string;
  buttonText: string;
}

export interface BlogSectionData {
  badge: string;

  title: string;

  highlight: string;

  description: string;

  featuredBlog: BlogItem;

  blogs: BlogItem[];
}