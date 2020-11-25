import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Paper from '@material-ui/core/Paper/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import ClearIcon from '@material-ui/icons/Clear';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useStoreActions } from '../../hooks';
import CityWeatherEntry from '../../interfaces/city-weather-entry';
import useStyles from './styles';

interface IItinerary {
  entries: CityWeatherEntry[];
}

interface SaveForm {
  name: string;
}

const Itinerary: React.FC<IItinerary> = ({ entries }): JSX.Element => {
  const classes = useStyles();
  const removeEntry = useStoreActions((state) => state.itinerary.removeEntry);
  const addEntry = useStoreActions((state) => state.saved.addEntry);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit, reset } = useForm<SaveForm>();

  const onSubmit = (data: SaveForm): void => {
    const url = 'http://localhost:3000/saved';
    const itinerary = {
      name: data.name,
      cities: entries.map((c) => c.name),
    };

    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itinerary),
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch(url, opts)
      .then((response) => response.json())
      .then((response) => addEntry(response));

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} align="center">
                  Current Itinerary
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((e) => (
                <TableRow key={e.id}>
                  <TableCell>
                    {`${e.name}, ${e.country}`}
                  </TableCell>
                  <TableCell>
                    <IconButton className={classes.squareButton} size="small" color="default" onClick={() => removeEntry(e.id)}>
                      <ClearIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <TextField
                    inputRef={register}
                    variant="outlined"
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                  />
                </TableCell>
                <TableCell>
                  <Button type="submit" fullWidth variant="contained" color="secondary">Save</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </>
  );
};

export default Itinerary;
