import { useEffect, useState } from "react";

import { dogsFetch } from "../../utils/fetch";

import ImagesCard from "./imageCard/ImageCard2";

import "./ImageContainer.css";

const ImageContainer = ({ images, setImages}) => {
  

  useEffect(() => {
    async function fetchImages() {
      const data = await dogsFetch();
      console.log(data);
      await setImages(data);
    }

    fetchImages();
  }, []);

  return (
    <div className="flex flex-column container">
      <div className="flex flex-row inner-container image-inner-container">
       {!images ? <p>NO Images</p> :   images.map((image) => <ImagesCard image={image} key={image.id} />)}
      </div>
    </div>
  );
};

export default ImageContainer;