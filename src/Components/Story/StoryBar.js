import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./StoryBar.css";

const stories = [
  {
    id: 1,
    username: "user1",
    imageUrl: "https://picsum.photos/id/1011/60/60",
  },
  {
    id: 2,
    username: "user2",
    imageUrl: "https://picsum.photos/id/1015/60/60",
  },
  {
    id: 3,
    username: "user3",
    imageUrl: "https://picsum.photos/id/1025/60/60",
  },
  {
    id: 4,
    username: "user4",
    imageUrl: "https://picsum.photos/id/1035/60/60",
  },
  {
    id: 5,
    username: "user5",
    imageUrl: "https://picsum.photos/id/1045/60/60",
  },
  {
    id: 6,
    username: "user6",
    imageUrl: "https://picsum.photos/id/1035/60/60",
  },
  {
    id: 7,
    username: "user7",
    imageUrl: "https://picsum.photos/id/1045/60/60",
  },
  {
    id: 8,
    username: "user8",
    imageUrl: "https://picsum.photos/id/1045/60/60",
  },
  {
    id: 9,
    username: "user9",
    imageUrl: "https://picsum.photos/id/1045/60/60",
  },
];

export default function StoryBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} className="storyBarContainer">
        {stories.map((story) => (
          <Grid
            item
            xs={0}
            key={story.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={1}
          >
            <a href="#" className="StoryLink">
              <Avatar
                alt={story.username}
                src={story.imageUrl}
                sx={{ width: 70, height: 70, marginBottom: 1 }}
                className="avatar"
              />
              <div className="StoryUsername">{story.username}</div>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
