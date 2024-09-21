import React, { useEffect, useState } from "react";
import { FaTh, FaUserTag, FaBookmark } from "react-icons/fa";
import "./Profile.css";
import Nav from "../../NavBar/Nav";
import SettingsIcon from "@mui/icons-material/Settings";

function Profile() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({
    avatar: "https://via.placeholder.com/150",
    bio: "Just another social media enthusiast. 📸",
    posts: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
  });

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <Nav />
      <div className="profile-container">
        <div className="profile-header">
          <img className="profile-avatar" src={userData.avatar} alt="Profile" />
          <div className="profile-info">
            <h1 className="profile-username">
              {username}
              <a href="#" style={{ marginLeft: 60, marginRight: 10 }}>
                <button
                  style={{
                    fontSize: 15,
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "lightgray",
                    borderRadius: 6,
                    padding: 10,
                  }}
                >
                  Edit Profile
                </button>
              </a>
              <a href="#">
                <button
                  style={{
                    fontSize: 15,
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "lightgray",
                    borderRadius: 6,
                    padding: 10,
                  }}
                >
                  View archive
                </button>
              </a>
              <a href="/options" style={{ padding: 20 }}>
                <SettingsIcon sx={{ fontSize: 35 }} />
              </a>
            </h1>

            <p className="profile-bio">{userData.bio}</p>
          </div>
        </div>

        <div className="profile-tabs">
          <div className="tab-item active">
            <FaTh /> <span>Posts</span>
          </div>
          <div className="tab-item">
            <FaUserTag /> <span>Tagged</span>
          </div>
          <div className="tab-item">
            <FaBookmark /> <span>Saved</span>
          </div>
        </div>

        <div className="profile-posts">
          {userData.posts.map((post, index) => (
            <div key={index} className="post-item">
              <img src={post} alt={`Post ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
