import "./ImagesCard.css";

const ImagesCard = ({ image }) => {
  return (
    <div className="flex flex-column images-card-container red-border">
      <div className="flex flex-column images-card-inner-container">
        <p>Imagesname:</p>
        <p>{image.imagename}</p>
      </div>
    </div>
  );
};

export default ImagesCard;