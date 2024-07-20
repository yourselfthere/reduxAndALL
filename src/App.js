import React from "react";
import {
  useCreatePostMutation,
  useGetApiByNameQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "./services/api";
// import { useState } from "react";
const App = () => {
  const { data, error, isLoading, isSuccess, isFetching } =
    useGetApiByNameQuery();
  return (
    <div>
      <h1>React RTK query</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>ERROR!!!!</h2>}
      {isFetching && <h2>Fetching Data...</h2>}
      {data && (
        <div>
          {data?.map((posts) => {
            return (
              <div key={posts.id}>
                <span>{posts.title}</span>
              </div>
            );
          })}
        </div>
      )}
      <div>
        <AddPost />
      </div>
    </div>
  );
};
export const AddPost = () => {
  const [addPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const posts = {
    id: "2",
    title: "posted",
    author: "Me",
  };

  const postsUpdated = {
    id: "2",
    title: "updated",
    author: "Me updated",
  };
  const handler = async () => {
    await addPost(posts);
  };
  const handleDelete = async () => {
    await deletePost(posts.id);
  };
  const handleUpdate = async () => {
    await updatePost(postsUpdated);
  };
  return (
    <>
      <button onClick={handler}>Add Post</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update Post</button>
    </>
  );
};

export default App;
