import React from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type groupTileProps = {
  id: number,
  groupName: string,
  numEvents: number,
  readonly callback: (pageId: number) => void
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

export const GroupTile = ({ id, groupName, numEvents, callback }: groupTileProps) => {
  const classes = useStyles();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    callback(id);
  }
  return (
    <CardActionArea className={classes.actionArea} onClick={handleClick}>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {groupName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>Create event</Button>
        </CardActions>
      </Card>
    </CardActionArea>
  );
}

type dashboardProps = {
  readonly callback: (pageId: number) => void,
}
// TODO: make type dashboardProps 
// accepts user as a parameter?, should display all groups the user is part of 
export const Dashboard = ({ callback }: dashboardProps) => {
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
            id={1}
            groupName={"DTI - Design & Tech"}
            numEvents={3}
            callback={callback} />
        </Grid>
        <Grid item >
          <GroupTile
            id={2}
            groupName={"Science Olympiad"}
            numEvents={1}
            callback={callback} />
        </Grid>
        <Grid item >
          <GroupTile
            id={3}
            groupName={"E.Motion"}
            numEvents={2}
            callback={callback} />
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;