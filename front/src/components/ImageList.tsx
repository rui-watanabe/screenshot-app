import React from 'react';
import ImageCard from './ImageCard';


const ImageList = ({ image, deleteScreenshot }) => {
  const imageCards = images.map(image => 
    <ImageCard 
      deleteScreenshot = { deleteScreeenshot } 
      key = { image.id }
      image = { image }
    />
  );
  return <div className="ui cards">{ imageCards }</div>
};

export default ImageList;