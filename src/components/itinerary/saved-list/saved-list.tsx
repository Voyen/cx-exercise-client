import {
  TableBody, TableCell, TableContainer, TableRow,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import ClearIcon from '@material-ui/icons/Clear';
import PublishIcon from '@material-ui/icons/Publish';
import React from 'react';
import { useStoreActions } from '../../../hooks';
import SavedItineraryEntry from '../../../interfaces/saved-itinerary-entry';
import loadWeatherData from '../../../util/load-weather-data';
import useStyles from './styles';

interface ISavedList {
  entries: SavedItineraryEntry[];
}

const SavedList: React.FC<ISavedList> = ({ entries }): JSX.Element => {
  const classes = useStyles();
  const clearItinerary = useStoreActions((state) => state.itinerary.clear);
  const addToItinerary = useStoreActions((state) => state.itinerary.addEntry);
  const removeEntry = useStoreActions((state) => state.saved.removeEntry);

  const loadItinerary = (id: number): void => {
    clearItinerary();
    // console.log(entries);
    const itinerary = entries.find((entry) => entry.id === id);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const names = [...itinerary!.cities];

    names.map((name) => loadWeatherData(name))
      .map((entry) => entry.then((e) => addToItinerary(e)));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Saved Itineraries
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((e) => (
            <TableRow key={e.id}>
              <TableCell>
                {e.name}
              </TableCell>
              <TableCell>
                <IconButton className={classes.squareButton} size="small" color="default" onClick={() => loadItinerary(e.id!)}>
                  <PublishIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton className={classes.squareButton} size="small" color="default" onClick={() => removeEntry(e.id!)}>
                  <ClearIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SavedList;
