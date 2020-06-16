import * as React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import Heart from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: 'fixed',
      zIndex: 1201,
      left: 0,
      bottom: 0,
      width: '100%',
      height: 25,
      background: theme.palette.grey[500],
      boxShadow: '0px -1px 5px 0px rgba(0,0,0,0.75)',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
    },
    footerContent: {
      marginLeft: 25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      marginLeft: 5,
      marginRight: 5,
      fontSize: 10,
      color: 'red',
    },
  })
);

const Footer: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="caption">
        <div className={classes.footerContent}>
          {'made with'}
          <Heart className={classes.icon} fontSize="small" />
          {'by foxxycodes'}
        </div>
      </Typography>
    </div>
  );
};

export default Footer;
