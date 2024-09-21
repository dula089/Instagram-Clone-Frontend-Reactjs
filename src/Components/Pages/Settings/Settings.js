import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";
import "./Settings.css";
import Nav from "../../NavBar/Nav";

const iconSize = 30;

const settingsMenu = [
  {
    text: "Edit Profile",
    icon: <AccountCircleIcon sx={{ fontSize: iconSize, color: "#262626" }} />,
    link: "/settings/profile",
  },
  {
    text: "Change Password",
    icon: <LockIcon sx={{ fontSize: iconSize, color: "#262626" }} />,
    link: "/settings/password",
  },
  {
    text: "Notifications",
    icon: <NotificationsIcon sx={{ fontSize: iconSize, color: "#262626" }} />,
    link: "/settings/notifications",
  },
  {
    text: "Security",
    icon: <SecurityIcon sx={{ fontSize: iconSize, color: "#262626" }} />,
    link: "/settings/security",
  },
  {
    text: "Help",
    icon: <HelpIcon sx={{ fontSize: iconSize, color: "#262626" }} />,
    link: "/settings/help",
  },
];

function Settings() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box className="settings-container">
      <Nav />
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" }, margin: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
          display: { xs: "block", md: "none" },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
      >
        <List>
          {settingsMenu.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem button component={Link} to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
              {index !== settingsMenu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          width: { md: 240 },
        }}
      >
        <List>
          {settingsMenu.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem button component={Link} to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
              {index !== settingsMenu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box className="settings-content" sx={{ flexGrow: 1, padding: 3 }}>
        <h1>Settings</h1>
        <p>
          Select a setting from the sidebar to view and edit your preferences.
        </p>
      </Box>
    </Box>
  );
}

export default Settings;
