import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import theme from './theme';
import useStyles from './styles';
import CitySearch from '../components/city-search';

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();

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
