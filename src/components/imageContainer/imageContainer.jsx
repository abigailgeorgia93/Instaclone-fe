import { useEffect, useState } from "react";

import { allImagesFetch } from "../../utils/fetch";

import ImageCard from "./imageConatianer/ImageCard";

import "./ImageContainer.css";

const ImageContainer = ({ imageIsFound }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const data = await allImagesFetch();
      console.log(data);
      await setImages(data.images);
    }

    fetchImages();
  }, [imageIsFound]);

  return (
    <div className="flex flex-column container">
      <div className="flex flex-row inner-container image-inner-container">
        {image.length >= 1 ? (
          image.map((image) => <ImagesCard image={image} key={image.id} />)
        ) : (
          <p>No images</p>
        )}
      </div>
    </div>
  );
};

export default ImageContainer;