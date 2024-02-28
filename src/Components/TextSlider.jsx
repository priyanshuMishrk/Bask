import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
// import { IoIosArrowRoundForward } from "react-icons/io";



function TextSlider() {
    return (
      <Carousel interval={2000} controls={false} className="carouselW p-1">
        <Carousel.Item className="carouselW1">
          <p className="carouselText">We create  stuff that makes a difference to the community </p>
        </Carousel.Item>
        <Carousel.Item className="carouselW1">
          <p className="carouselText">We create  stuff that makes a difference to the consumer</p>
        </Carousel.Item>
        <Carousel.Item className="carouselW1">
          <p className="carouselText">We create  stuff that makes a difference to the Algorithm</p>
        </Carousel.Item>
        <Carousel.Item className="carouselW1">
          <p className="carouselText">We create  stuff that makes a difference to the competition</p>
        </Carousel.Item>
        <Carousel.Item className="carouselW1">
          <p className="carouselText carouselW1">We create  stuff that makes a difference to the consumer</p>
        </Carousel.Item>
        <Carousel.Item className="carouselW1">
          <p className="carouselText carouselW1"> We create  stuff that makes a difference to the creative community</p>
        </Carousel.Item>
      </Carousel>
    );
  }

// const TextSlider = () => {
//     return (
//       <>
//         <Container className="carouselEffect d-flex"
//             style={{
//                 width: '40%',
//                 overflow : "hidden",
//             }}
//         >
//             <div>
//             We create  stuff that makes a difference to the community
//             </div>
            
//             <div>
//             We create  stuff that makes a difference to the consumer
//             </div>
            
//             <div>
//             We create  stuff that makes a difference to the Algorithm
//             </div>
            
//             <div>
//             We create  stuff that makes a difference to the competition
//             </div>

//             <div>
//             We create  stuff that makes a difference to the creative community
//             </div>
//         </Container>
//       </>
//     );
//   };

  export default TextSlider;