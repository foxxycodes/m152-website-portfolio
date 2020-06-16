import {
  createStyles,
  Divider,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
const generateItems = (length: number) => {
  const arr: ReactImageGalleryItem[] = [];

  for (let i = 1; i < length + 1; i++) {
    arr.push({
      original: `/assets/gallery/originals/img_${i}.jpg`,
      thumbnail: `/assets/gallery/thumbnails/img_${i}.jpg`,
      sizes: "",
    });
  }
  return arr;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: { padding: 15 },
  })
);

const Carousel: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" paragraph>
        Carousel
      </Typography>
      <Divider />
      <ImageGallery
        showBullets
        items={generateItems(12)}
        lazyLoad
        thumbnailPosition="top"
      />
    </Paper>
  );
};

export default Carousel;
