import Input from "./UI/Input"
import Button from "./UI/Button"
import { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  function addPost(e) {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };

    if (post.body !== '' && post.title !== '') {
      create(newPost)
      setPost({ title: '', body: '' })
    }
  }

  return (
    <form className="flex items-center flex-col gap-4 w-full">
      <Input
        value={post.title}
        type="text"
        placeholder="Post name"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        value={post.body}
        type="text"
        placeholder="Post body"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <Button onClick={addPost}>Add</Button>
    </form>
  )
}

export default PostForm;
