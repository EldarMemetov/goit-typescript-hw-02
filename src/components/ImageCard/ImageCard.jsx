import image from "./imageCard.module.css";
const ImageCard = ({ imageUrl, altDescription }) => {
  return (
    <div>
      <img src={imageUrl} alt={altDescription} className={image.img} />
    </div>
  );
};

export default ImageCard;
