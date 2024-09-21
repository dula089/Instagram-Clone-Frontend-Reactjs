import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { RiThreadsLine, RiMessengerLine } from "react-icons/ri";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreMenu from "../MoreButton/MoreMenu";
import Create from "../Pages/Create/Create";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import "./Nav.css";
import Loader from "../Loader/Loader"; // Import the Loader component

const iconSize = 30;

const middleIconsList = [
  {
    text: "Home",
    icon: <HomeIcon sx={{ fontSize: iconSize, color: "black" }} />,
    path: "/home",
  },
  {
    text: "Search",
    icon: <SearchIcon sx={{ fontSize: iconSize, color: "black" }} />,
    path: "/search",
  },
  {
    text: "Explore",
    icon: <ExploreIcon sx={{ fontSize: iconSize, color: "black" }} />,
    path: "/explore",
  },
  {
    text: "Reels",
    icon: <SlideshowIcon sx={{ fontSize: iconSize, color: "black" }} />,
    path: "/reels",
  },
  {
    text: "Messages",
    icon: <RiMessengerLine size={iconSize} color="black" />,
    path: "/message",
  },
  {
    text: "Notifications",
    icon: <FavoriteBorderIcon sx={{ fontSize: iconSize, color: "black" }} />,
    path: "/notifications",
  },
];

const profileList = [
  {
    text: "Profile",
    icon: <AccountCircleIcon sx={{ fontSize: iconSize, color: "black" }} />,
    path: "/profile",
  },
];

const bottomIconsList = [
  {
    text: "Threads",
    icon: <RiThreadsLine size={iconSize} color="black" />,
    path: "/threads",
  },
];

function Nav({ addPost }) {
  const drawerWidth = 240;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleNavigation = (path) => {
    setLoading(true); // Set loading to true when navigating
    setTimeout(() => {
      navigate(path);
      setLoading(false); // Set loading to false after navigation
    }, 500); // Simulate delay for loading (adjust as needed)
  };

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <br />
          <br />
          <Box sx={{ display: { xs: "none", sm: "none", md: "none" } }}>
            <a
              href="./home"
              style={{
                textDecoration: "none",
                marginTop: "20px",
                color: "black",
              }}
              className="instagram-icon"
            >
              Instagram
            </a>
          </Box>
          <a
            href="./home"
            style={{
              textDecoration: "none",
              marginTop: "20px",
              color: "black",
              display: { xs: "none", sm: "none", md: "none" },
            }}
            className="instagram-icon"
          >
            Instagram
          </a>
          <Toolbar />

          <List>
            {middleIconsList.map(({ text, icon, path }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleNavigation(path)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ color: "black" }} />
                </ListItemButton>
              </ListItem>
            ))}
            <Create addPost={addPost} />
          </List>

          <List>
            {profileList.map(({ text, icon, path }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleNavigation(path)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ color: "black" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <List>
          {bottomIconsList.map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(path)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} sx={{ color: "black" }} />
              </ListItemButton>
            </ListItem>
          ))}
          <MoreMenu />
        </List>
      </Drawer>

      <div className="bottom-nav">
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            display: { xs: "flex", sm: "flex", md: "flex" },
          }}
        >
          {middleIconsList.map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(path)}>
                <ListItemIcon>{icon}</ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddBoxIcon sx={{ fontSize: iconSize, color: "black" }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </div>

      {loading && <Loader />} {/* Conditionally render the Loader component */}
    </div>
  );
}

export default Nav;
