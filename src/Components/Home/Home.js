import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import Nav from "../NavBar/Nav";
import StoryBar from "../Story/StoryBar";
import Create from "../Pages/Create/Create";
import SideBar from "../SideBar/SideBar";
import { setPosts } from "../redux/postsSlice";
import SwitchAccount from "./SwitchAccount/SwitchAccount";
import Footer from "../Footer/Footer";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { fetchAllPosts } from "../services/apiService"; 

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [switchAccount, setSwitchAccount] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchAllPosts();
        dispatch(setPosts(data));
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, [dispatch]);

  const handleSwitchAccount = () => {
    setScrollPosition(window.scrollY);
    setSwitchAccount(true);
  };

  const handleCloseSwitchAccount = () => {
    setSwitchAccount(false);
  };

  return (
    <div>
      <Nav />
      <StoryBar />

      <a
        onClick={handleSwitchAccount}
        style={{
          position: "fixed",
          top: "50px",
          right: "100px",
          zIndex: 10,
          color: "blue",
          cursor: "pointer",
        }}
      >
        <ProfileHeader />
        Switch
      </a>

      {switchAccount && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            zIndex: 15,
            top: `${scrollPosition}px`,
          }}
        >
          <SwitchAccount onClose={handleCloseSwitchAccount} />
        </div>
      )}

      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default Home;
