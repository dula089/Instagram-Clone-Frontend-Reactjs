import * as React from "react";
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
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
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
  const [open, setOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [photoSelected, setPhotoSelected] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const fileInputRef = React.useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPhotoSelected(false);
    setSelectedFile(null);
    setStep(0);
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
    setStep(0);
    setPhotoSelected(false);
    setSelectedFile(null);
  };

  const handleNext = () => {
    if (step === 1) {
      console.log("Next button clicked");
    }
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
            {handleClose ? (
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
                <IconButton
                  onClick={handleClose}
                  sx={{ position: "fixed", right: 8, top: 8 }}
                >
                  <CloseIcon />
                </IconButton>
              </IconButton>
            ) : null}
          </BootstrapDialogTitle>
        )}
        <Divider />
        <DialogContent dividers>
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
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
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
                  sx={{ position: "relative", left: -340, top: -56 }}
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
                  sx={{ position: "relative", right: -300, top: -690 }}
                >
                  Next
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
