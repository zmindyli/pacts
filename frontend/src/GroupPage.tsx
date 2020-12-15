import React from 'react';
import { Container, Paper, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type groupPageProps = {
  name: string,
  desc: string,
  readonly callback: (pageId: number) => void;
}

const useStyles = makeStyles(() => createStyles({
  header: {
    padding: '30px',
  }
}));

export const GroupPage = ({ name, desc, callback }: groupPageProps) => {
  const classes = useStyles();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    callback(0);
  }
  return (
    <Container maxWidth="md">
      <Paper className={classes.header}>
        <Grid container
          spacing={5}
          justify="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <Typography variant="h3" gutterBottom={true}>
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={handleClick}>Close group</Button>
          </Grid>
        </Grid>
        <Typography>
          {desc}
        </Typography>
      </Paper>
    </Container>
  );
}

export default GroupPage;