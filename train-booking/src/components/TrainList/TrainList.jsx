import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    margin: '0 auto',
  },
  listItem: {
    border: '1px solid #ccc',
    marginBottom: '2px',
  },
}));

function TrainsList() {
  const classes = useStyles();
  const [trainsData, setTrainsData] = useState([]);

  useEffect(() => {
    const authToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3Mjg4NjcsImNvbXBhbnlOYW1lIjoiVHJhaW4gVGlja2V0IFJlc2VydmF0aW9uIiwiY2xpZW50SUQiOiIzYzQ4MTFmMi0yN2M1LTRjY2YtOWM0Mi1jMDA0ZjU5ODdiYjIiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMTI0MDAzMjc4In0.XB5ycqlPJC2uZJox1JMnI01tgDVgSIqFiOTlqW-n_pE'; 

    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };

    fetch('http://20.244.56.144/train/trains', {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTrainsData(data);
        } else {
          console.error('Data is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

  return (
    <Container className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Train List
      </Typography>
      <List>
        {trainsData.map((train, index) => (
          <Paper key={index} elevation={3} className={classes.listItem}>
            <ListItem>
              <ListItemText
                primary={train.trainName}
                secondary={`Train Number: ${train.trainNumber}`}
              />
              <ListItemSecondaryAction>
                <Typography variant="subtitle1">
                  Sleeper Price: Rs.{train.price.sleeper}
                </Typography>
                <Typography variant="subtitle1">
                  AC Price: Rs.{train.price.AC}
                </Typography>
                <Typography variant="subtitle2" color="error">
                  Delayed by: {train.delayedBy} minutes
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        ))}
      </List>
    </Container>
  );
}

export default TrainsList;
