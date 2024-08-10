import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import SwitchAppearance from "../Pages/CustomSwitch/SwitchAppearance";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import "./MoreMenu.css";

const iconSize = 30;

const menu = [
  {
    text: "Settings",
    icon: <SettingsIcon sx={{ fontSize: iconSize, color: "black" }} />,
    path: "/settings",
  },
  {
    text: "Your activity",
    icon: <LocalActivityIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  {
    text: "Saved",
    icon: <TurnedInNotIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  {
    text: "Report a problem",
    icon: <ReportProblemOutlinedIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
];

function MoreMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    handleMenuClose();
    if (path) {
      navigate(path);
    }
  };

  const moreMenuOpen = Boolean(anchorEl);

  return (
    <ListItem disablePadding className="list">
      <ListItemButton onClick={handleMenuOpen}>
        <ListItemIcon>
          <MoreHorizIcon sx={{ fontSize: iconSize, color: "black" }} />
        </ListItemIcon>
        <ListItemText primary="More" sx={{ color: "black" }} />
      </ListItemButton>
      <Menu
        anchorEl={anchorEl}
        open={moreMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menu.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </MenuItem>
        ))}
        <SwitchAppearance />
        <Divider />
        <MenuItem>Switch Accounts</MenuItem>
        <Divider />
        <MenuItem>Logout</MenuItem>
      </Menu>
    </ListItem>
  );
}

export default MoreMenu;
