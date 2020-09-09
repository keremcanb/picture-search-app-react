import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const image = images.map((img) => <ImageCard image={img} key={img.id} />);

  return <div className='image-list'>{image}</div>;
};

export default ImageList;
