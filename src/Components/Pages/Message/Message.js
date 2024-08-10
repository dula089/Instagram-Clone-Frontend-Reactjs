import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import Avatar from "@mui/material/Avatar";
import Nav from "../../NavBar/Nav";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import { Button, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const drawerWidth = 320;

const conversations = [
  {
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    name: "Jane Smith",
    lastMessage: "Let's catch up later!",
    avatar: "/static/images/avatar/2.jpg",
  },
  {
    name: "Alice Johnson",
    lastMessage: "Great job on the project.",
    avatar: "/static/images/avatar/3.jpg",
  },
  {
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    name: "Jane Smith",
    lastMessage: "Let's catch up later!",
    avatar: "/static/images/avatar/2.jpg",
  },
  {
    name: "Alice Johnson",
    lastMessage: "Great job on the project.",
    avatar: "/static/images/avatar/3.jpg",
  },
  {
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    name: "Jane Smith",
    lastMessage: "Let's catch up later!",
    avatar: "/static/images/avatar/2.jpg",
  },
  {
    name: "Alice Johnson",
    lastMessage: "Great job on the project.",
    avatar: "/static/images/avatar/3.jpg",
  },
  {
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    name: "Jane Smith",
    lastMessage: "Let's catch up later!",
    avatar: "/static/images/avatar/2.jpg",
  },
  {
    name: "Alice Johnson",
    lastMessage: "Great job on the project.",
    avatar: "/static/images/avatar/3.jpg",
  },
  {
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    name: "Jane Smith",
    lastMessage: "Let's catch up later!",
    avatar: "/static/images/avatar/2.jpg",
  },
  {
    name: "Alice Johnson",
    lastMessage: "Great job on the project.",
    avatar: "/static/images/avatar/3.jpg",
  },
];

export default function Message() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Typography>
          <FormControl fullWidth>
            <InputLabel> Profile Name</InputLabel>
            <Select></Select>
          </FormControl>
          <EditNoteOutlinedIcon />
        </Typography>
        <Divider />
        <List>
          {conversations.map((conversation, index) => (
            <ListItem key={conversation.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt={conversation.name} src={conversation.avatar} />
                </ListItemIcon>
                <ListItemText
                  primary={conversation.name}
                  secondary={conversation.lastMessage}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography>
          {" "}
          <ReviewsOutlinedIcon />
        </Typography>
        <Typography>Your Messages</Typography>
        <Typography paragraph>Send a message to start a chat.</Typography>
        <Typography>
          <Button sx={{ backgroundColor: "#008DDA", color: "white" }}>
            Send Message
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
