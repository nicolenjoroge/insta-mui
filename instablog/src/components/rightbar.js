import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import av1 from "./pexels-guilhermealmeida-1858175.jpg";
import av2 from "./pexels-italo-melo-881954-2379004.jpg";
import av3 from "./pexels-moh-adbelghaffar-771742.jpg";
import p1 from "./pexels-ngqah83-884977.jpg";
import p2 from "./pexels-ash-122861-376464.jpg";
import p3 from "./pexels-vishnurnair-1105666.jpg";

const rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} my={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src={av1} />
          <Avatar alt="Travis Howard" src={av2} />
          <Avatar alt="Cindy Baker" src={av3} />
          <Avatar alt="Agnes Walker" />
          <Avatar alt="Trevor Henderson" />
          <Avatar alt="Agnes Walker" />
          <Avatar alt="Trevor Henderson" />
          <Avatar alt="Agnes Walker" />
          <Avatar alt="Trevor Henderson" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
         Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img src={p1} alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src={p2} alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src={p3} alt=""/>
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
         Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={av1} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={av2} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={av3} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default rightbar;
