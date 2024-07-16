import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import Nav from "../NavBar/Nav";
import StoryBar from "../Story/StoryBar";
// import Footer from "../Footer/Footer";
import Create from "../Pages/Create/Create";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setPosts([]);
      
    };
  }, []);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };
  
  return (
    <div>
      <Nav />
      <StoryBar></StoryBar>
      <Create addPost={addPost} />
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </div>
  );
}

export default Home;
