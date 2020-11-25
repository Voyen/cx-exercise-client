import { Card, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import CitySearch from '../components/city-search';
import Itinerary from '../components/itinerary';
import SavedList from '../components/itinerary/saved-list';
import { useStoreState } from '../hooks';
import useStyles from './styles';
import theme from './theme';

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const itinerary = useStoreState((state) => state.itinerary.entries);
  const saved = useStoreState((state) => state.saved.entries);

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
