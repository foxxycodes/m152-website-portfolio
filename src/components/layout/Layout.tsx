import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
  makeStyles,
  CssBaseline,
  Theme,
  createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      width: "calc(100vw-30px)",
      height: "100%",
      overflow: "hidden",
      padding: 15,
      marginBottom: 20,
    },
  })
);
const Layout: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Header />
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
