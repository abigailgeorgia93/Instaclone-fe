import "./imageCard.css";

const ImagesCard = ({ image }) => {
    console.log(image)
  return (
    <div className="flex flex-column images-card-container red-border">
      <div className="flex flex-column images-card-inner-container">
        <p>Imagesname:</p>
        <p>{image.id}</p>
        <img src={image.url} alt={`Dog image ${image.id}`} className="image-display" />
      </div>
    </div>
  );
};

export default ImagesCard;

// to access the url, use image.url on line 9.