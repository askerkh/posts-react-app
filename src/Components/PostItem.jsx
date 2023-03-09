import Button from "./UI/Button";

const PostItem = ({ post, remove }) => {
  return (
    <div className="px-4 py-2 flex flex-row w-full items-center justify-between h-32 border-teal-500 border-solid rounded shadow-xl">
      <div className="flex flex-col h-full w-max justify-center">
        <h1 className="text-3xl">{post.id}. {post.title}</h1>
        <p>{post.body}</p>
      </div>
      <Button onClick={() => remove(post.id)}>Delete</Button>
    </div>
  )
}

export default PostItem;
