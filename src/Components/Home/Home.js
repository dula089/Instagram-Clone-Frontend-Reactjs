import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import Nav from '../NavBar/Nav';
import StoryBar from '../Story/StoryBar';
import Create from '../Pages/Create/Create';
import SideBar from '../SideBar/SideBar';
import { setPosts } from '../redux/postsSlice';

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPosts(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <StoryBar />
      <SideBar />
      <Create />
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default Home;
