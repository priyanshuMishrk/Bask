import React, { useState, useEffect } from 'react';
import WorkInternal1 from "../Content/workInternal1.jpeg"
import WorkInternal2 from "../Content/workInternal2.jpeg"
import WorkInternal3 from "../Content/workInternal3.jpeg"
import WorkInternal4 from "../Content/workInternal4.jpeg"
import workInternal5 from "../Content/workInternal5.jpg"
import workInternal6 from "../Content/workInternal6.jpg"
import workInternal7 from "../Content/workInternal7.jpg"
import workInternal8 from "../Content/workInternal8.jpg"
import workInternal9 from "../Content/workInternal9.jpg"
import workInternal10 from "../Content/workInternal10.jpg"
import workInternal11 from "../Content/workInternal11.jpg"
import workInternal12 from "../Content/workInternal12.jpg"

const images = [
    WorkInternal1 , WorkInternal2 , WorkInternal3 , WorkInternal4 , workInternal5 , workInternal6 , workInternal7 , workInternal8 , workInternal9 , workInternal10,workInternal11,workInternal12
];

const ScrollingImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + (screenWidth > 430 ? 3 : 2)) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scrolling-imagesOW">
      <div className="image-containerOW">
        {images.slice(currentIndex, currentIndex + (screenWidth > 430 ? 3 : 2)).map((image, index) => (
          <img key={index} src={image} alt={`${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;