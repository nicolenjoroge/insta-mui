import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from 'react'
import food from "./pexels-robinstickel-70497.jpg";

const Post = () => {
  return (
    <Box sx={{margin:5}}>
        <Card>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Burgers and Chips"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image={food}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive meal is a perfect party dish and fun to cook
            together with your guests. Add 1 glass of juice along with the
            burger, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />{" "}
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Post