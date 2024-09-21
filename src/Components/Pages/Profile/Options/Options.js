import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function Options({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Options</DialogTitle>
      <DialogContent dividers>
        <List>
          <ListItem button>
            <ListItemText primary="Account Settings" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Privacy Settings" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Notifications" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Options;
