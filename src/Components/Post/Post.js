import React, { useState } from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";

const sampleComments = [
  { username: "user1", comment: "Nice photo!" },
  { username: "user2", comment: "Love this post!" },
];

function Post({ id, title, body, imageUrl, profileImage, username, time }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState("");

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <article className="Post">
      <header className="Post-header">
        <div className="Post-user">
          <div className="Post-user-profilepicture">
            <img
              src={
                profileImage ||
                "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg"
              }
              alt={username}
            />
          </div>
          <div className="Post-user-nickname">
            <span>{username}UserName</span>
          </div>
        </div>
        <div className="Post-timestamp">
          <span>{time}</span>
        </div>
      </header>

      <div className="Post-image">
        <img
          src={imageUrl || `https://picsum.photos/seed/${id}/500`}
          alt="Post"
          className="Post-image-bg"
        />
      </div>

      <div className="Post-actions">
        <div className="Post-action-icons">
          <IconButton onClick={toggleLike} aria-label="like">
            {liked ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton onClick={toggleSave} aria-label="save">
            {saved ? (
              <BookmarkIcon style={{ color: "black" }} />
            ) : (
              <BookmarkBorderIcon />
            )}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
      </div>

      <div className="Post-likes">
        <span>{likeCount} likes</span>
      </div>

      <div className="Post-caption">
        <strong>{username}</strong> {body}
      </div>

      <div className="Post-comments">
        {sampleComments.map((c, index) => (
          <div key={index}>
            <strong>{c.username}</strong> {c.comment}
          </div>
        ))}
      </div>

      <div className="Post-add-comment">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        <button className="Post-add-comment-button" disabled={!comment}>
          Post
        </button>
      </div>
    </article>
  );
}

export default Post;
