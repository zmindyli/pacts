import React from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type groupTileProps = {
  groupName: string,
  numEvents: number
}

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => createStyles({
  card: {
    width: 250,
    borderRadius: 16,
  },
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  }
}));

const GroupTile = ({ groupName, numEvents }: groupTileProps) => {
  const classes = useStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {groupName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Create event</Button>
        </CardActions>
      </Card>
    </CardActionArea>
  );
}
// TODO: make type dashboardProps 
// accepts user as a parameter?, should display all groups the user is part of 
const Dashboard = () => {
  //const classes = useStyles();
  const gridStyles = useGridStyles();
  return (
    <div>
      <Grid container
        classes={gridStyles}
        wrap="nowrap"
        spacing={5}
        justify="center"
        direction="row"
      >
        <Grid item>
          <GroupTile
            groupName={"DTI - Design & Tech"}
            numEvents={3} />
        </Grid>
        <Grid item >
          <GroupTile
            groupName={"Science Olympiad"}
            numEvents={1} />
        </Grid>
        <Grid item >
          <GroupTile
            groupName={"E.Motion"}
            numEvents={2} />
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;