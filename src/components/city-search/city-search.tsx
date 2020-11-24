import {
  Avatar, Card, Container, Grid, Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudIcon from '@material-ui/icons/Cloud';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStoreActions } from '../../hooks';
import WeatherResult from './result/weather-result';

import useStyles from './styles';

interface CityForm {
  city: string;
}

const CitySearch: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const addEntry = useStoreActions((state) => state.weather.addEntry);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit } = useForm<CityForm>();
  const [result, setResult] = useState();

  const onSubmit = (data: CityForm): void => {
    const url = `http://localhost:3000/search/${data.city}`;

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch(url, { mode: 'cors' })
      .then((d) => d.json())
      .then((d) => setResult(d));
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
          result
            ? (
              <Card>
                <WeatherResult city={result} />
              </Card>
            )
            : ''
        }
      </Container>
    </>

  );
};

export default CitySearch;
