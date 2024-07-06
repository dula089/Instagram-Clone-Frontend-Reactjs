import "./Home.css";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { RiMessengerLine } from "react-icons/ri";
import { GrNewWindow } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiThreadsLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import Post from "../Post/Post";
import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
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

  console.log(posts);
  return (
    <div>
      <nav>
        <a
          href="./home"
          style={{ textDecoration: "none" }}
          className="instagram-icon"
        >
          Instagram
        </a>
        <a href="" className="Home-icon">
          <GoHome size={30} />
        </a>
        <a href="" className="search-icon">
          <IoSearch size={30} />
        </a>
        <a href="" className="explore-icon">
          <MdOutlineExplore size={30} />
        </a>
        <a href="" className="reels-icon">
          <RiVideoLine size={30} />
        </a>
        <a href="" className="messenger-icon">
          <RiMessengerLine size={30} />
        </a>
        <a href="" className="new-icon">
          <GrNewWindow size={30} />
        </a>
        <a href="" className="noti-icon">
          <IoNotificationsOutline size={30} />
        </a>
        <a href="" className="thread-icon">
          <RiThreadsLine size={30} />
        </a>
        <a href="" className="more-icon">
          <CgDetailsMore size={30} />
        </a>
      </nav>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {" "}
            <Post title={post.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
