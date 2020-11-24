import {
  Avatar, Card, Container, Grid, Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudIcon from '@material-ui/icons/Cloud';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStoreActions } from '../../hooks';
import CityWeatherEntry from '../../interfaces/city-weather-entry';
import WeatherResult from './result/weather-result';

import useStyles from './styles';

interface CityForm {
  city: string;
}

const CitySearch: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const addEntry = useStoreActions((state) => state.itinerary.addEntry);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit, reset } = useForm<CityForm>();
  const [result, setResult] = useState();
  const [fetching, setFetching] = useState(false);

  const onSubmit = (data: CityForm): void => {
    setFetching(true);
    const url = `http://localhost:3000/search/${data.city}`;

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch(url, { mode: 'cors' })
      .then((d) => d.json())
      .then((d) => {
        setFetching(false);
        setResult(d);
      });

    reset();
  };

  const onDiscard = (): void => {
    setResult(undefined);
    reset();
  };

  const addToItinerary = (data: CityWeatherEntry): void => {
    addEntry(data);
    setResult(undefined);
    reset();
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputRef={register}
                  variant="outlined"
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
      <Container maxWidth="sm">
        {
          // eslint-disable-next-line no-nested-ternary
          result
            ? (
              <Card>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <WeatherResult city={result} />
                  </Grid>
                  <Grid item xs={6}>
                    <Button fullWidth variant="contained" color="secondary" onClick={() => addToItinerary(result!)}>Add to itinerary</Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => onDiscard()}>Discard</Button>
                  </Grid>
                </Grid>
              </Card>
            )
            : fetching
              ? <div className={classes.loader} />
              : ''
        }
      </Container>
    </>

  );
};

export default CitySearch;
