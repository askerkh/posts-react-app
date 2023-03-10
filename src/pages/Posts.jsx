import { useContext, useEffect, useRef, useState } from "react";
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import Modal from "../Components/UI/Modal";
import Button from "../Components/UI/Button";
import { usePosts } from "../hooks/usePosts";
import PostService from "../Components/API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/page";
import Pagination from "../Components/UI/Pagination";
import useObserver from "../hooks/useObserver";

const Posts = () => {
  const lastElement = useRef();

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, isPostsLoading, page < totalPages, () =>
    setPage(page + 1)
  );

  const sortedAndSearcedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (post) => {
    setPosts([post, ...posts]);
    setModal(false);
  };

  const removePost = (id) => setPosts(posts.filter((post) => post.id != id));

  return (
    <div className="mt-2 flex min-h-screen w-full flex-col">
      <Button onClick={() => setModal(true)}>Create Post</Button>

      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr className="my-4 h-1 w-full bg-black" />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
        limit={limit}
        setLimit={setLimit}
      />
      {postError && <h1>Error {postError}</h1>}
      {isPostsLoading && (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      )}
      <PostList
        remove={removePost}
        posts={sortedAndSearcedPosts}
        title="Post list"
      />
      <div ref={lastElement} className="h-5 w-full bg-transparent"></div>
      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </div>
  );
};

export default Posts;
