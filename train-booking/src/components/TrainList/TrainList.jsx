import React from 'react';
import { List, ListItem, ListItemText} from '@mui/material';
import { makeStyles } from '@mui/styles';

// Sample train data
const trains = [
  { name: 'Train A', seats: 50, price: '$50' },
  { name: 'Train B', seats: 30, price: '$40' },
  { name: 'Train C', seats: 20, price: '$60' },
];

// Define custom styles using makeStyles
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'white',
  },
}));

function TrainList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {trains.map((train, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={train.name}
              secondary={`Seats Available: ${train.seats}, Price: ${train.price}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TrainList;
