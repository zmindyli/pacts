import React from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type groupTileProps = {
  groupName: string,
  numEvents: number
}

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 245,
    minHeight: 150,
  },
}));

const GroupTile = ({ groupName, numEvents }: groupTileProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant={"outlined"}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {groupName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Create event</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
// TODO: make type dashboardProps 
// accepts user as a parameter?, should display all groups the user is part of
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container
        wrap="nowrap"
        spacing={0}
        justify="center"
        direction="row"
      >
        <Grid item xs={3}>
          <GroupTile
            groupName={"DTI - Design & Tech"}
            numEvents={3} />
        </Grid>
        <Grid item xs={3}>
          <GroupTile
            groupName={"Science Olympiad"}
            numEvents={1} />
        </Grid>
        <Grid item xs={3}>
          <GroupTile
            groupName={"E.Motion"}
            numEvents={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;