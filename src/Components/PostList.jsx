import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 className="text-center text-3xl font-bold">No posts</h1>;
  }

  return (
    <div className="w-full">
      <h1 className="text-center text-3xl">{title}</h1>
      <div className="flex flex-col">
        <TransitionGroup>
          {posts.map((post) => {
            return (
              <CSSTransition key={post.id} timeout={500} classNames="post">
                <PostItem remove={remove} post={post} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default PostList;
