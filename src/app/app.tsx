import { Card, CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import CitySearch from '../components/city-search';
import Itinerary from '../components/itinerary';
import SavedList from '../components/itinerary/saved-list';
import { useStoreActions, useStoreState } from '../hooks';
import SavedItineraryEntry from '../interfaces/saved-itinerary-entry';
import useStyles from './styles';
import theme from './theme';

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const itinerary = useStoreState((state) => state.itinerary.entries);
  const saved = useStoreState((state) => state.saved.entries);
  const addSaved = useStoreActions((state) => state.saved.addEntry);

  useEffect(() => {
    const preLoadSavedItineraries = async () => {
      const url = 'http://localhost:3000/saved';
      const response = await fetch(url, { mode: 'cors' });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const json: SavedItineraryEntry[] = await response.json();

      json.forEach((e) => addSaved(e));
    };

    preLoadSavedItineraries();
  }, [addSaved]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CitySearch />
        {
          itinerary.length > 0
            ? (
              <Card className={classes.itinerary}>
                <Itinerary entries={itinerary} />
              </Card>
            )
            : ''
        }
        {
          saved.length > 0
            ? (
              <Card className={classes.saved}>
                <SavedList entries={saved} />
              </Card>
            )
            : ''
        }
      </ThemeProvider>
    </>

  );
};

export default App;
