import { useState } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { ImageModal } from "../ImageModal/ImageModal";

import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState(null);

  const openModal = (dataForModal) => {
    setDataForModal(dataForModal);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setDataForModal("");
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      <ul className={css.image_gallery}>
        {images.map((image, index) => (
          <li key={index}>
            <ImageCard
              image={image}
              onImageClick={openModal}
              openModal={openModal}
            />
          </li>
        ))}
      </ul>
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          dataForModal={dataForModal}
        />
      )}
    </>
  );
};
