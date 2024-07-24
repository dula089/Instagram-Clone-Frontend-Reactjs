
import React, { useContext } from "react";
import Post from "../Post/Post";
import Nav from "../NavBar/Nav";
import StoryBar from "../Story/StoryBar";
import Create from "../Pages/Create/Create";
import { PostContext } from "../Post/PostContext";

function Home() {
  const { posts, addPost } = useContext(PostContext);

  return (
    <div>
      <Nav />
      <StoryBar />
      <Create />
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default Home;
