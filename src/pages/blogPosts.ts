import { installationPosts } from './blog-posts/installation-posts';
import { maintenancePosts } from './blog-posts/maintenance-posts';
import { grassTypesPosts } from './blog-posts/grass-types-posts';

export const blogPosts = [
  ...installationPosts,
  ...maintenancePosts,
  ...grassTypesPosts
];