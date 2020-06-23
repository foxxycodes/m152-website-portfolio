import {
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import AccountCirlcle from '@material-ui/icons/AccountCircle';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Home from '@material-ui/icons/Home';
import Tablet from '@material-ui/icons/Tablet';
import React from 'react';
import StyleSet from './StyleRule';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: { padding: 15 },
    styleHeader: {
      marginTop: 15,
      marginBottom: 15,
    },
    styleRow: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    button: {
      marginRight: 5,
    },
  })
);

const Styleguide: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Styleguide</Typography>
      <Typography variant="body1" style={{ marginTop: 10, marginBottom: 10 }}>
        Ein Styleguide (oder deutsch Gestaltungsrichtlinie) beschreibt, wie
        bestimmte Elemente eines Druckerzeugnisses oder einer Website zu
        gestalten sind. Diese Richtlinien sollen ein einheitliches
        Erscheinungsbild verschiedener Kommunikationsmittel einer Institution
        oder Firma, z. B. Werbe- und Informationsmaterial, Geschäftsbriefe oder
        Internetauftritte, gewährleisten und so die Bildung einer Corporate
        Identity ermöglichen. Daneben werden Styleguides auch für die
        Software-Erstellung oder Produkte allgemein eingesetzt; auch hier ist
        das Ziel: Produkte sollen als zusammengehörig wahrgenommen werden und
        ggf. auch mit der verbundenen Marke assoziiert werden.
      </Typography>
      <Typography variant="h4" className={classes.styleHeader}>
        Typography
      </Typography>
      <StyleSet title="Headers">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
      </StyleSet>
      <StyleSet title="Utilities">
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="subtitle1">Subttitle 1</Typography>
        <Typography variant="subtitle2">Subttitle 2</Typography>
        <Typography variant="caption">Caption</Typography>
        <Typography variant="button">Button</Typography>
      </StyleSet>
      <Typography variant="h4" className={classes.styleHeader}>
        Buttons
      </Typography>
      <StyleSet title="Variants">
        <Typography variant="h6">Default: </Typography>
        <div className={classes.styleRow}>
          <Button color="primary" className={classes.button}>
            Primary
          </Button>
          <Button color="secondary" className={classes.button}>
            Secondary
          </Button>
          <Button disabled className={classes.button}>
            Disabled
          </Button>
        </div>
        <Typography variant="h6">Outlined: </Typography>
        <div className={classes.styleRow}>
          <Button variant="outlined" color="primary" className={classes.button}>
            Primary
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            Secondary
          </Button>
          <Button variant="outlined" disabled className={classes.button}>
            Disabled
          </Button>
        </div>
        <Typography variant="h6">Contained: </Typography>
        <div className={classes.styleRow}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Primary
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Secondary
          </Button>
          <Button variant="contained" disabled className={classes.button}>
            Disabled
          </Button>
        </div>
        <Typography variant="h6">Icon-Button: </Typography>
        <div className={classes.styleRow}>
          <IconButton color="primary">
            <Home />
          </IconButton>
          <IconButton color="secondary">
            <AccountCirlcle />
          </IconButton>
          <IconButton disabled>
            <CloudUpload />
          </IconButton>
          <IconButton color="primary">
            <Tablet />
          </IconButton>
        </div>
      </StyleSet>
    </Paper>
  );
};

export default Styleguide;
