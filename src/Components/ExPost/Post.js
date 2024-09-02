
import React, { useContext,useState } from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IconButton from "@mui/material/IconButton";
import { PostContext } from "./PostContext";

function Post({ id, title, body }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
 
  

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <article className="Post">
      <header className="Post-header">
        <div className="Post-user">
          <div className="Post-user-profilepicture">
            <img
              src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg"
              alt="John D. Veloper"
            />
          </div>
          <div className="Post-user-nickname">
            <span>{title}</span>
          </div>
        </div>
      </header>

      <div className="Post-image">
        <img
          src={`https://picsum.photos/seed/${id}/500`}
          alt="Post"
          className="Post-image-bg"
        />
      </div>

      <div className="Post-actions">
        <IconButton onClick={toggleLike} aria-label="like">
          <FavoriteBorderIcon color={liked ? "error" : "action"} />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton onClick={toggleSave} aria-label="save">
          <BookmarkBorderIcon color={saved ? "primary" : "action"} />
        </IconButton>
      </div>

      <div className="Post-caption">
        <strong>{title}</strong> {body}
      </div>
    </article>
  );
}

export default Post;
