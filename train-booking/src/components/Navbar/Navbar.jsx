import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'blue', // Change the background color to your preference
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
            My Simple AppBar
          </Typography>
          {/* Add any additional AppBar content here */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarComponent;
