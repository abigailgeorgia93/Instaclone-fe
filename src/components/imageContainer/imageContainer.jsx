import { useEffect, useState } from "react";

import { dogsFetch } from "../../utils/fetch";

import ImageCard from "./imageConatianer/ImageCard";

import "./ImageContainer.css";

const ImageContainer = ({ images, setImages}) => {
  

  useEffect(() => {
    async function fetchImages() {
      const data = await dogsFetch();
      // console.log(data);
      // await setImages(data.images);
    }

    fetchImages();
  }, []);

  return (
    <div className="flex flex-column container">
      <div className="flex flex-row inner-container image-inner-container">
        {images.length >= 0 ? (
          images.map((image) => <ImagesCard image={image} key={image.id} />)
        ) : (
          <p>No images</p>
        )}
      </div>
    </div>
  );
};

export default ImageContainer;