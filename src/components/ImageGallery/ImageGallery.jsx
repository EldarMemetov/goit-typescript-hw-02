import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
const ImageGallery = ({ images, openModal }) => {
  const handleClick = (imageUrl) => {
    openModal(imageUrl);
  };

  return (
    <div>
      <ul className={styles.list}>
        {images.map((image) => (
          <li
            className={styles.itemList}
            key={image.id}
            onClick={() => handleClick(image.urls.regular)}
          >
            <ImageCard
              imageUrl={image.urls.small}
              altDescription={image.alt_description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
