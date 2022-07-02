import { CommentCreationForm } from "../comments/new";
import { CommentIndex } from "../comments/index";

export const PostShow = ({ id, title, comments }) => {
  return (
    <div className='p-3 border'>
      <h4>{title}</h4>
      <CommentCreationForm postId={id} />
      <CommentIndex comments={comments} />
    </div>
  );
};
