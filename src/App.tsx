import React from "react";
import Layout from "./components/Layout";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
