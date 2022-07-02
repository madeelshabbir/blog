import { CommentCreationForm } from "../comments/new";
import { CommentIndex } from "../comments/index";

export const PostShow = ({ id, title }) => {
  return (
    <div className='p-3 border'>
      <h4>{title}</h4>
      <CommentCreationForm postId={id} />
      <CommentIndex postId={id} />
    </div>
  );
};
