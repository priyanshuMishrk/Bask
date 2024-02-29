import React, { useState } from 'react';
import Sampath from "../Content/Sampath.jpg"
import Prabhakaran from "../Content/Prabhakar.jpg"
import PlaceHolder from "../Content/ServiCollage.png"
import DefaultImage from "../Content/BaskImage.jpeg"
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import { Link } from 'react-router-dom';


const Teams = () => {
  // State to hold the selected image and its description
  const [selectedImage, setSelectedImage] = useState(null);
    const defaultImage = {
        id:0,src:DefaultImage,description:'BASK IS ABOUT BRIGHTENING UP THE WORLD. DRIVING CHANGE. REBELLING AGAINST CONVENTION. PUSHING FORWARD THE AGENDA OF PROGRESS IN MIND AND SPIRIT THROUGH CREATIVITY. DOING THINGS THAT WE LOVE AND HAVING A POSITIVE IMPACT ON EVERYONE WHO INTERACT WITH  OUR WORK. AND OUR CULTURE.',name:"BASK", Link1 :"https://www.instagram.com/weare_bask/", Link2 :"https://www.linkedin.com/company/baskworldwide-creative/", Link3:"mailto:info@blackis.in"
    }
    if (!selectedImage){
        setSelectedImage(defaultImage)
    }
  // Dummy image data (replace with your own)
  const images = [
    { id: 1, src: Sampath, description: `Sampath has varied experience in working with some of the finest creative agencies in India including Enterprise Advertising, Ambience, JWT and Contract. Over a career spanning 30 years he has worked on many multi-national as well as leading Indian Brands. The last 15 years he has been creating and helming his own ventures including start-ups in the charity and food & beverages space. With Bask, his latest venture, he is fashioning the agency of his dreams.`, name:"SAMPATH KUMAR" },

    { id: 2, src: Prabhakaran, description: `Prabhakaran is the consummate advertising and marketing  professional. With 3 decades of experience both on the agency side as well as the brand side. He has worked with some of the leading advertising agencies in Bangalore including Saatchi &Saatchi, Maa Bozzel and Everest. Where he has handled a diverse portfolio of clients in the FMCG as well as other categories. Later he moved on to work on the brand side with RMZ Corp, Bangalore's leading Corporate and Residential developer, for 10 years as head of marketing communication for both, RMZ Homes and Commercial spaces.` , name: "PRABHAKARAN  C.P."},

    { id: 3, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' ,name:"Currently not available"},
    { id: 4, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' ,name:"Currently not available"},
    { id: 5, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' ,name:"Currently not available"},
    { id: 6, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' ,name:"Currently not available"},
    { id: 7, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' ,name:"Currently not available"},
    { id: 8, src: PlaceHolder, description: 'Description Will be shown once the image is placed ' ,name:"Currently not available"},
  ];

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (

    <div>

    <Header/>
    <div className='teamsCollague'>
      {/* Render images */}
          {selectedImage && (
            <div className="mainImage">
              <div className='mainImageMain'>
                <p>{selectedImage.name}</p>
                <img src={selectedImage.src} alt={`Image ${selectedImage.id}`} />
              </div>
                <div className='mainImagePara d-flex'>
                    <p className='mainImPara'>{selectedImage.description}</p>
                    <div className='mainImLinks d-flex'>
                        <Link to={selectedImage.Link2} target="_blank" >LinkedIn</Link>
                        <Link to={selectedImage.Link1}  target="_blank">Instagram</Link>
                        <Link to={selectedImage.Link3}>Email</Link>
                    </div>
                </div>
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
    <Footer/>
    </div>

  );
};

export default Teams;
