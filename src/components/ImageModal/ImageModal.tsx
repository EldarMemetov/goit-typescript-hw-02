import Modal from "react-modal";
import { ImageModalProps } from "../App/App.types";
import React from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90vw",
    maxHeight: "90vh",
    borderRadius: "10px",
    overflow: "hidden",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  closeModal,
  imageUrl,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        <img src={imageUrl} alt="big" />
      </div>
    </Modal>
  );
};

export default ImageModal;
