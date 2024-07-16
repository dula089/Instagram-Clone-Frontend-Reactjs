import React from "react";
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

import "./Nav.css";

const iconSize = 30;

const middleIconsList = [
  {
    text: "Home",
    icon: <HomeIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  {
    text: "Search",
    icon: <SearchIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  {
    text: "Explore",
    icon: <ExploreIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  {
    text: "Reels",
    icon: <SlideshowIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  { text: "Messages", icon: <RiMessengerLine size={iconSize} color="black" /> },
  {
    text: "Notifications",
    icon: <FavoriteBorderIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
];

const profileList = [
  {
    text: "Profile",
    icon: <AccountCircleIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
];

const bottomIconsList = [
  { text: "Threads", icon: <RiThreadsLine size={iconSize} color="black" /> },
];

function Nav() {
  const drawerWidth = 240;

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", md: "block" }, // Hide Drawer on small screens
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
          <Toolbar />

          <List>
            {middleIconsList.map(({ text, icon }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ color: "black" }} />
                </ListItemButton>
              </ListItem>
            ))}
            <Create />
          </List>

          <List>
            {profileList.map(({ text, icon }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ color: "black" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <List>
          {bottomIconsList.map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} sx={{ color: "black" }} />
              </ListItemButton>
            </ListItem>
          ))}
          <MoreMenu />
        </List>
      </Drawer>

      {/* Bottom Navigation for small screens */}
      <div className="bottom-nav">
        <List sx={{ display: "flex", justifyContent: "space-around" }}>
          {middleIconsList.map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><AddBoxIcon sx={{ fontSize: iconSize, color: "black" }} /></ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Nav;
