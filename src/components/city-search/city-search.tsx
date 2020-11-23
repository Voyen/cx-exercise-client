import {
  Avatar, Container, Grid, Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudIcon from '@material-ui/icons/Cloud';
import React from 'react';
import { useForm } from 'react-hook-form';

import useStyles from './styles';

interface CityForm {
  city: string;
}

const CitySearch: React.FC = (): JSX.Element => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit } = useForm<CityForm>();

  const onSubmit = (data: CityForm): void => {
    console.log(data);
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
    </>

  );
};

export default CitySearch;
