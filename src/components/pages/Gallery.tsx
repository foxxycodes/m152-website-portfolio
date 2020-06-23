import {
  createStyles,
  Divider,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

const generateItems = (length: number) => {
  const arr: ReactImageGalleryItem[] = [];

  for (let i = 1; i < length + 1; i++) {
    arr.push({
      original: `/assets/gallery/originals/img_${i}.jpg`,
      thumbnail: `/assets/gallery/thumbnails/img_${i}.jpg`,
      sizes: '',
    });
  }
  return arr;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: { padding: 20 },
    gallery: { width: '80%' },
  })
);

const Gallery: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" paragraph>
        Fotogallerie
      </Typography>
      <Divider />
      <ImageGallery
        additionalClass={classes.paper}
        showBullets
        items={generateItems(12)}
        lazyLoad
        thumbnailPosition="left"
        showNav={false}
        showFullscreenButton={false}
        showIndex={false}
        showPlayButton={false}
      />
    </Paper>
  );
};

export default Gallery;
