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
import React, { useState } from 'react';
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
  const clearItinerary = useStoreActions((state) => state.itinerary.clear);
  const removeEntry = useStoreActions((state) => state.itinerary.removeEntry);
  const addEntry = useStoreActions((state) => state.saved.addEntry);
  const [saving, setSaving] = useState(false);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit, reset } = useForm<SaveForm>();

  const toggleSaving = (): void => {
    setSaving(!saving);
  };

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

    toggleSaving();
    reset();
  };

  const onClear = (): void => {
    clearItinerary();
  };

  const genButtonsRow = (): JSX.Element => (
    <TableRow>
      <TableCell>
        <Button fullWidth variant="contained">Summary</Button>
      </TableCell>
      <TableCell>
        <Button fullWidth variant="contained" onClick={() => onClear()}>Clear</Button>
      </TableCell>
      <TableCell>
        <Button fullWidth variant="contained" onClick={() => toggleSaving()}>Save</Button>
      </TableCell>
    </TableRow>
  );

  const genSavePrompt = (): JSX.Element => (
    <TableRow>
      <TableCell colSpan={2}>
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
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Current Itinerary
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((e) => (
                <TableRow key={e.id}>
                  <TableCell colSpan={2}>
                    {`${e.name}, ${e.country}`}
                  </TableCell>
                  <TableCell>
                    <IconButton className={classes.squareButton} size="small" color="default" onClick={() => removeEntry(e.id)}>
                      <ClearIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {saving ? genSavePrompt() : genButtonsRow()}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </>
  );
};

export default Itinerary;
