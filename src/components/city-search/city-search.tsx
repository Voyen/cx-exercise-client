import {
  Avatar, Container, Grid, Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudIcon from '@material-ui/icons/Cloud';
import React from 'react';
import useStyles from './styles';

const CitySearch: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CloudIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Search for a city
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Search
            </Button>
          </form>
        </div>
      </Container>
    </>

  );
};

export default CitySearch;
