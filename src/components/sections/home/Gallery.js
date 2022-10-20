import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <div className="container-sm" style={{py: '10%', marginBottom: '13%'}}>
      <h3 className="partner-header">Robotics Competition</h3>
      <div class="gallery">
        <img src="https://source.unsplash.com/collection/190727/800x600?1" />
        <img src="https://source.unsplash.com/collection/190727/800x600?2" />
        <img src="https://source.unsplash.com/collection/190727/800x600?3" />
        <img src="https://source.unsplash.com/collection/190727/800x600?4" />
        <img src="https://source.unsplash.com/collection/190727/800x600?5" />
        <img src="https://source.unsplash.com/collection/190727/800x600?6" />
        <img src="https://source.unsplash.com/collection/190727/800x600?7" />
        <img src="https://source.unsplash.com/collection/190727/800x600?8" />
        <img src="https://source.unsplash.com/collection/190727/800x600?9" />
      </div>
    </div>
  );
}
