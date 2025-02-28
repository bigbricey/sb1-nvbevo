export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category?: string;
  tags?: string[];
  image?: string;
  lastModified?: string;
}