import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
