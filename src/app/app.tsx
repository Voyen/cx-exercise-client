import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import CitySearch from '../components/city-search';
import { useStoreState } from '../hooks';
import useStyles from './styles';
import theme from './theme';

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const weatherEntries = useStoreState((state) => state.weather.entries);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CitySearch />
      </ThemeProvider>
    </>

  );
};

export default App;
