import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography, withStyles, createStyles } from '@material-ui/core';

type groupTileProps = {
  groupName: string,
  numEvents: number
}

const styles = createStyles({
  root: {
    maxWidth: 345,
  },
});

// TODO: tile is still page width
const GroupTile = withStyles(styles)(({ groupName, numEvents }: groupTileProps) => {
  return (
    // <div>
    //   {groupName} has {numEvents} upcoming {numEvents > 1 ? "events" : "event"}
    // </div>
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {groupName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>
  );
});
// TODO: make type dashboardProps 
// accepts user as a parameter?, should display all groups the user is part of
const Dashboard = () => {
  return (
    <GroupTile
      groupName={"DTI - Design & Tech"}
      numEvents={3} />
  );
}

export default Dashboard;