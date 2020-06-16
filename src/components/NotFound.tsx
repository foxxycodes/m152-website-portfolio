import * as React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: 'calc(100% + 120px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const NotFound: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.wrapper}>
        <Typography>{`Page Not Found: 404`}</Typography>
        {/* eslint-disable-next-line no-restricted-globals*/}
        <Typography variant="caption">{`${location.pathname}`}</Typography>
      </div>
    </Container>
  );
};

export default NotFound;
