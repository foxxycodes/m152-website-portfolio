import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import MenuDrawer from './MenuDrawer';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
  })
);

export interface INavbar {
  title?: string;
  onDrawerChange: (change: boolean) => void;
}

const Navbar: React.FC<INavbar> = (props) => {
  const { title, onDrawerChange } = props;

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerChange = (change: boolean) => {
    onDrawerChange(change);
    setOpen(change);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerChange(true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title ?? 'Website Portfolio M152'}
          </Typography>
        </Toolbar>
      </AppBar>
      <MenuDrawer onDrawerClose={() => handleDrawerChange(false)} open={open} />
    </>
  );
};

export default Navbar;
