import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaconIpsum from './components/BaconIpsum';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffecb3',
      light: '#ffffe5',
      dark: '#cbba83',
    },
    secondary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
    },
  },
  typography: {
    fontFamily: 'Monospace',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={BaconIpsum} />
            <Route exact path="/carousel" />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
