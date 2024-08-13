import React from "react";
import image from "./imageCard.module.css";
import { ImageCardProps } from "../App/App.types";

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altDescription }) => {
  return (
    <div>
      <img src={imageUrl} alt={altDescription} className={image.img} />
    </div>
  );
};

export default ImageCard;
