import React, { useState } from 'react';
import Sampath from "../Content/Sampath.jpg"
import Prabhakaran from "../Content/Prabhakar.jpg"
import PlaceHolder from "../Content/ServiCollage.png"
import DefaultImage from "../Content/BaskImage.jpeg"

const Teams = () => {
  // State to hold the selected image and its description
  const [selectedImage, setSelectedImage] = useState(null);
    const defaultImage = {
        id:0,src:DefaultImage,description:'BASK IS ABOUT BRIGHTENING UP THE WORLD. DRIVING CHANGE. REBELLING AGAINST CONVENTION. PUSHING FORWARD THE AGENDA OF PROGRESS IN MIND AND SPIRIT THROUGH CREATIVITY. DOING THINGS THAT WE LOVE AND HAVING A POSITIVE IMPACT ON EVERYONE WHO INTERACT WITH  OUR WORK. AND OUR CULTURE.'
    }
    setSelectedImage(defaultImage)
  // Dummy image data (replace with your own)
  const images = [
    { id: 1, src: Sampath, description: 'Description for Image 1' },
    { id: 2, src: Prabhakaran, description: 'Description for Image 2' },
    { id: 3, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' },
    { id: 4, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' },
    { id: 5, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' },
    { id: 6, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' },
    { id: 7, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' },
    { id: 8, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' },
  ];

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {/* Render images */}
          {selectedImage && (
            <div className="hero-section">
              <img src={selectedImage.src} alt={`Image ${selectedImage.id}`} />
              <p>{selectedImage.description}</p>
            </div>
          )}
      <div className="image-gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={` ${image.id}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {/* Render selected image and description */}
    </div>
  );
};

export default Teams;
