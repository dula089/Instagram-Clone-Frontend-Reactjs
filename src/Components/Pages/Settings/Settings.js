import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import HelpIcon from "@mui/icons-material/Help";
import "./Settings.css"; 

const iconSize = 30;

const settingsMenu = [
  {
    text: "Account",
    icon: <AccountCircleIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  {
    text: "Privacy",
    icon: <LockIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  {
    text: "Notifications",
    icon: <NotificationsIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  {
    text: "Security",
    icon: <SecurityIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
  {
    text: "Help",
    icon: <HelpIcon sx={{ fontSize: iconSize, color: "black" }} />,
  },
];

function Settings() {
  return (
    <Box className="settings-container">
      <List>
        {settingsMenu.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
            {index !== settingsMenu.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default Settings;
