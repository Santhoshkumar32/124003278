import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'blue',
  },
  title: {
    flexGrow: 1,
  },
}));

function AppBarComponent() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Train Booking
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarComponent;
