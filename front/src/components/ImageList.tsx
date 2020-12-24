import React from 'react';
import ImageCard from './ImageCard';
import { ImagesType } from './App';

export type deleteScreenshotType = (id: string) => Promise<void>;

interface ImageListProps {
  images: ImagesType;
  deleteScreenshot: deleteScreenshotType;
}

const ImageList = ({ images, deleteScreenshot }: ImageListProps) => {
  const imageCards = images.map(image => 
    <ImageCard 
      deleteScreenshot = { deleteScreenshot } 
      key = { image.id }
      image = { image }
    />
  );
  return <div className="ui cards">{ imageCards }</div>
};

export default ImageList;