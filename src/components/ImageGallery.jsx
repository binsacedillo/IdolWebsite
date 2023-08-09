import { useState, useEffect, useRef } from 'react'; import styled from 'styled-components';
import pic1 from '../images/gallery/pic1.jpg';
import pic2 from '../images/gallery/pic2.jpg';
import pic3 from '../images/gallery/pic3.jpg';
import pic4 from '../images/gallery/pic4.jpg';
import pic5 from '../images/gallery/pic5.jpg';
import pic6 from '../images/gallery/pic6.jpg';
import pic7 from '../images/gallery/pic7.jpg';
import pic8 from '../images/gallery/pic8.jpg';


// Sample image URLs (replace these with your actual image URLs)
const imageUrls = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8
  // Add more images as needed
];

const GalleryContainer = styled.div`
  position: absolute;
  color: white;
  top: 355%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 9999;

  @media screen and (max-width: 500px) {
  /* CSS styles for mobile devices */
  top: 520%;
  left: 50%;
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
  top: 440%;
  left: 50%;
}

@media screen and (min-width: 1025px) {
  top: 360%;
  left: 50%;
}

   @media screen and (min-width: 1441px) {
    top: 365%;
  left: 50%;
  }
`;

const GalleryTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  padding-bottom: 2rem;
`;

const ImageGalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
`;

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  height: 85%;
  width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 999;
  border-radius: 10px;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80%;
  object-fit: contain;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  background-color: transparent;
  color: white;
  border: none;
  font-size: 3rem;
  cursor: pointer;
`;

const ModalImageGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(); // Create a ref to access the modal container element

  const openModal = (index) => {
    setShowModal(true);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Add an event listener to handle clicks outside the modal
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showModal]);

  return (
    <GalleryContainer>
      <GalleryTitle>Image Gallery</GalleryTitle>
      <ImageGalleryWrapper>
        {imageUrls.map((imageUrl, index) => (
          <ImageItem
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(index)}
          />
        ))}
      </ImageGalleryWrapper>
      {showModal && (
        <ModalContainer ref={modalRef}>
          <ModalCloseButton onClick={closeModal}>&times;</ModalCloseButton>
          <ModalImage
            src={imageUrls[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
        </ModalContainer>
      )}
    </GalleryContainer>
  );
};

export default ModalImageGallery;