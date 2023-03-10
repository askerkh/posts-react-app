const PostComment = ({ comment }) => {
  return (
    <li className="flex h-full w-full flex-col justify-center rounded border-2 border-gray-200 px-4 py-2 shadow-xl">
      <h1 className="justify-start text-3xl">{comment.email}</h1>
      <h1 className="text-3xl">
        {comment.id}. {comment.name}
      </h1>
      <p>{comment.body}</p>
    </li>
  );
};

export default PostComment;
