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
import { useStoreActions } from '../../hooks';
import CityWeatherEntry from '../../interfaces/city-weather-entry';
import useStyles from './styles';

interface IItinerary {
  entries: CityWeatherEntry[];
}

const Itinerary: React.FC<IItinerary> = ({ entries }): JSX.Element => {
  const classes = useStyles();
  const removeEntry = useStoreActions((state) => state.itinerary.removeEntry);

  return (
    <>
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
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Itinerary;
