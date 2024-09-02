import "./SwitchAppearance.css"
import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";

const iconSize = 30;

const SwitchAppearance = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    setDarkMode(isDarkMode);
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <MenuItem onClick={handleToggleDarkMode}>
      <ListItemIcon>
        <ModeNightOutlinedIcon sx={{ fontSize: iconSize, color: "black" }} />
      </ListItemIcon>
      <ListItemText primary="Switch appearance" />
    </MenuItem>
  );
};

export default SwitchAppearance;
