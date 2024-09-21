import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useHistory } from "react-router-dom";
import "./EditProfile.css";

function EditProfile() {
  const [profileData, setProfileData] = useState({
    avatar: "https://via.placeholder.com/150",
    username: "johndoe",
    bio: "Just another social media enthusiast. 📸",
  });
  const [file, setFile] = useState(null);
  const history = useHistory();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData((prevData) => ({
          ...prevData,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Profile data saved:", profileData);
    history.push("/profile");
  };

  return (
    <Box className="edit-profile-container">
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      <Box className="avatar-section" textAlign="center">
        <Avatar
          src={profileData.avatar}
          sx={{ width: 100, height: 100, marginBottom: 2 }}
        />
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="icon-button-file"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </Box>
      <TextField
        fullWidth
        label="Username"
        name="username"
        value={profileData.username}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Bio"
        name="bio"
        value={profileData.bio}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
      />
      <Box textAlign="center" marginTop={2}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default EditProfile;
