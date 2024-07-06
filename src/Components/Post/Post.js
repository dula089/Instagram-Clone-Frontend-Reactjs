import React, { Component } from "react";
import "./Post.css";

function Post( props ) {
  console.log('props',props)
  return (
    <article className="Post" >
      <header>
        <div className="Post-user">
          <div className="Post-user-profilepicture">
            <img
              src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg"
              alt="John D. Veloper"
            />
          </div>

          <div className="Post-user-nickname">
            <span>{props.title}</span>
          </div>
        </div>
      </header>

      <div className="Post-image">
        <div className="Post-image-bg">
          <img className="image" />
        </div>
      </div>

      <div className="Post-caption">
        <strong>John D. Veloper </strong> Loving Educative!
      </div>
    </article>
  );
}

export default Post;
