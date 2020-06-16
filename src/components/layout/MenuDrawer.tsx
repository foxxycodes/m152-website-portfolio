import {
  createStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import DescriptionIcon from "@material-ui/icons/Description";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 220,
    },
    drawerHeader: {
      ...theme.mixins.toolbar,
      color: "black",
      background: theme.palette.primary.main,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: "20%",
      borderRadius: 5,
      marginLeft: 20,
    },
    link: { textDecoration: "none", color: "white" },
  })
);

export interface IMenuDrawer {
  open: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<IMenuDrawer> = (props) => {
  const { open, onClose } = props;
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      anchor={"left"}
      PaperProps={{
        style: {
          width: 220,
          color: "white",
          background: theme.palette.secondary.light,
        },
      }}
      open={open}
      onClose={onClose}
    >
      <div className={classes.drawerHeader}>
        <Typography align="center">foxxycodes.ch</Typography>
        <img
          className={classes.logo}
          src="/assets/logo/foxxycodes.png"
          alt="logo"
        />
      </div>
      <Divider />
      <List>
        <Link to="/gallery" className={classes.link} onClick={() => onClose()}>
          <ListItem button>
            <ListItemIcon>{<PhotoCameraIcon color="primary" />}</ListItemIcon>
            <ListItemText primary={"Fotogallerie"}></ListItemText>
          </ListItem>
        </Link>

        <Link to="/carousel" className={classes.link} onClick={() => onClose()}>
          <ListItem button>
            <ListItemIcon>{<ViewCarouselIcon color="primary" />}</ListItemIcon>
            <ListItemText primary={"Carousel"}></ListItemText>
          </ListItem>
        </Link>

        <Link
          to="/styleguide"
          className={classes.link}
          onClick={() => onClose()}
        >
          <ListItem button>
            <ListItemIcon>{<DescriptionIcon color="primary" />}</ListItemIcon>
            <ListItemText primary={"Styleguide"}></ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
