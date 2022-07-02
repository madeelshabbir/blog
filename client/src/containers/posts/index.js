import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { postIndexApi } from '../../apis/posts';
import { PostShow } from './show';

export const PostIndex = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postIndexApi().then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h3>Posts</h3>
      {posts.map((post) =>
        (<Container className='mt-3' key={post.id}>
          <PostShow id={post.id} title={post.title} />
        </Container>)
      )}
    </div>
  );
}
