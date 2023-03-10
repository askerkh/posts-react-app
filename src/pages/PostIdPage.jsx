import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import PostService from "../Components/API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import PostComment from "../Components/PostComment";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  const params = useParams();

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <>
      <div className="mt-4 flex h-max w-full flex-row items-center justify-between self-center rounded border-2 border-solid border-gray-200  px-4 py-2 shadow-xl">
        {isLoading ? (
          <div className="flex w-full justify-center">
            <Loader />
          </div>
        ) : (
          <div className="flex h-full w-full flex-col justify-center">
            <h1 className="text-3xl">
              {post.id}. {post.title}
            </h1>
            <p>{post.body}</p>
          </div>
        )}
      </div>
      <div className="mt-4 flex h-max w-full flex-row items-center justify-between self-center rounded border-2 border-solid border-gray-200 px-4 py-2 shadow-xl">
        {isComLoading ? (
          <div className="flex w-full justify-center">
            <Loader />
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {comments.map((comment) => {
              return <PostComment key={comment.id} comment={comment} />;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default PostIdPage;
