import React from "react";
import { Avatar } from "@mui/material";
import "./ProfileHeader.css";

function ProfileHeader({ userName }) {
  return (
    <div className="profile-header">
      <Avatar
        alt={userName}
        src={`https://api.hello-avatar.com/adorables/150/${userName}.png`}
        className="profile-avatar"
      />
      <span className="profile-name">
        Profile Name
        {/* {userName} */}
      </span>
    </div>
  );
}

export default ProfileHeader;
