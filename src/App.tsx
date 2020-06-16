import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BaconIpsum from "./components/BaconIpsum";
import Layout from "./components/layout/Layout";
import Carousel from "./components/pages/Carousel";
import Gallery from "./components/pages/Gallery";
import NotFound from "./components/pages/NotFound";
import Styleguide from "./components/pages/Styleguide";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffecb3",
      light: "#ffffe5",
      dark: "#cbba83",
    },
    secondary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
    },
  },
  typography: {
    fontFamily: "Monospace",
    fontSize: 14,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={BaconIpsum} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/carousel" component={Carousel} />
            <Route exact path="/styleguide" component={Styleguide} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
