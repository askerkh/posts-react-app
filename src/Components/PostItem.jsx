import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, remove }) => {
  const router = useNavigate();

  return (
    <div className="mt-4 flex h-max w-full flex-col items-center justify-between gap-8 rounded border-2 border-solid border-teal-500 px-4 py-2 shadow-xl md:h-32 md:flex-row md:gap-4">
      <div className="box-border flex h-full w-max justify-center md:flex-col">
        <h1 className="h-max w-full max-w-xs text-xl sm:max-w-none md:text-3xl">
          {post.id}. {post.title}
        </h1>
        <p className="hidden lg:block">{post.body}</p>
      </div>
      <div className="flex gap-4">
        <Button active onClick={() => router(`/posts/${post.id}`)}>
          Open
        </Button>
        <Button onClick={() => remove(post.id)}>Delete</Button>
      </div>
    </div>
  );
};

export default PostItem;
