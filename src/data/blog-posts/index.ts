import { BlogPost } from '../../types';
import { generalEducationalPosts } from './general-educational-posts';
import { grassTypesPosts } from './grass-types-posts';
import { installationPosts } from './installation-posts';
import { maintenancePosts } from './maintenance-posts';

// Combine all blog posts from different categories
export const blogPosts: BlogPost[] = [
  ...generalEducationalPosts,
  ...grassTypesPosts,
  ...installationPosts,
  ...maintenancePosts
];
