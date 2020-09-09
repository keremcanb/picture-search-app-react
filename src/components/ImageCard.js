import React, { useState, useEffect, useRef } from 'react';

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', display);
  }, []);

  const display = () => {
    const height = imageRef.current.clientHeight;

    const grid = Math.ceil(height / 10);

    setSpans(grid);
  };

  const { description, urls } = image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={urls.regular} alt={description} />
    </div>
  );
};

export default ImageCard;
