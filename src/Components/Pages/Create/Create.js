import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsSlice";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Divider,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  TextField,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import EmojiPicker from "emoji-picker-react";
import Loader from "../../Loader/Loader";
import { createPost } from "../../services/apiService"; 

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    position: "relative",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = styled(DialogTitle)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  position: "relative",
}));

const iconSize = 30;

export default function Create() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoSelected, setPhotoSelected] = useState(false);
  const [step, setStep] = useState(0);
  const [caption, setCaption] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

 
  const username = localStorage.getItem("username") || "User";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPhotoSelected(false);
    setSelectedFile(null);
    setStep(0);
    setCaption("");
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPhotoSelected(true);
      setStep(1);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      setPhotoSelected(false);
      setSelectedFile(null);
      setStep(0);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleShare = async () => {
    setLoading(true);
  
    const newPost = {
      userId: 1,
      filterId: 1,
      postDate: new Date().toISOString().split("T")[0],
      postTime: new Date().toISOString().split("T")[1].split(".")[0],
      location: "",
      description: caption,
    };
  
    try {
      const data = await createPost(newPost);
      console.log("Success:", data);
      dispatch(addPost(data));
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleEmojiSelect = (emoji) => {
    setCaption(caption + emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleClickOpen}>
        <ListItemIcon>
          <AddBoxIcon sx={{ fontSize: iconSize, color: "black" }} />
        </ListItemIcon>
        <ListItemText primary="Create" sx={{ color: "black" }} />
      </ListItemButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            minWidth: "800px",
            minHeight: "500px",
          },
        }}
      >
        {step === 0 && (
          <BootstrapDialogTitle id="customized-dialog-title">
            Create a New Post
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </BootstrapDialogTitle>
        )}
        {step === 2 && (
          <BootstrapDialogTitle id="customized-dialog-title">
            Create a New Post
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            />
          </BootstrapDialogTitle>
        )}
        <Divider />
        <DialogContent dividers>
          {loading && <Loader />}
          {step === 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <br />
              <br />
              <br />
              <PhotoSizeSelectActualOutlinedIcon sx={{ fontSize: 40 }} />
              <SlideshowOutlinedIcon sx={{ fontSize: 40 }} />
              <br />
              <p>Drag photos and videos here</p>
              <Button variant="contained" onClick={handleButtonClick}>
                Select from Computer
              </Button>
            </Box>
          )}
          {step === 1 && photoSelected && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BootstrapDialogTitle id="customized-dialog-title">
                Crop
                <IconButton
                  onClick={handleClose}
                  sx={{ position: "fixed", right: 8, top: 8 }}
                >
                  <CloseIcon />
                </IconButton>
              </BootstrapDialogTitle>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <IconButton
                  onClick={handleBack}
                  sx={{ position: "fixed", left: 360, top: 170 }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  style={{ maxWidth: "100%", maxHeight: "calc(100vh - 240px)" }}
                />
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ position: "fixed", right: 380, bottom: 620 }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}
          {step === 2 && (
            <Box
              sx={{
                display: "flex",
                height: "100%",
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{ position: "fixed", right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
              <IconButton
                onClick={handleBack}
                sx={{ position: "fixed", left: 360, top: 170 }}
              >
                <ArrowBackIcon />
              </IconButton>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  style={{ maxWidth: "100%", width: "300px" }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  padding: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Avatar alt="Profile Avatar" src="/path/to/avatar.jpg" />
                  <Box sx={{ marginLeft: 2 }}>{username}</Box>{" "}
                  {/* Use username from localStorage */}
                </Box>
                <TextField
                  placeholder="Write a caption"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
                <IconButton
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <EmojiEmotionsOutlinedIcon />
                </IconButton>
                {showEmojiPicker && (
                  <EmojiPicker onEmojiClick={handleEmojiSelect} />
                )}
                <Button
                  variant="contained"
                  onClick={handleShare}
                  sx={{ position: "fixed", right: 380, bottom: 620 }}
                >
                  Share
                </Button>
              </Box>
            </Box>
          )}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
