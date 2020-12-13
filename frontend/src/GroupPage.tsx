import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type groupPageProps = {
  name: string,
  desc: string
}

const useStyles = makeStyles(() => createStyles({
  header: {
    padding: '30px',
  }
}));

export const GroupPage = ({ name, desc }: groupPageProps) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Paper className={classes.header}>
        <Typography variant="h3" gutterBottom={true}>
          {name}
        </Typography>
        <Typography>
          {desc}
        </Typography>
      </Paper>
    </Container>
  );
}

export default GroupPage;