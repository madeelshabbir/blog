export const apiUrls = {
  comments: {
    create: (id) => `posts/${id}/comments`,
    index: (id) => `posts/${id}/comments`
  },
  posts: {
    create: 'posts/create',
    index: 'posts'
  }
};
