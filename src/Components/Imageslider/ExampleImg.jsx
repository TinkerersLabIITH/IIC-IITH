import React from 'react';
import img1 from "../../assets/imageslider1.jpeg";
import img2 from "../../assets/imageslider2.jpeg";
import img3 from "../../assets/sliderimage3.jpeg";
import img4 from "../../assets/imageslider4.webp";
import img5 from "../../assets/imageslider5.jpeg";

const ExampleCarouselImage = ({ text, image }) => {
  const images = [img1, img2, img3, img4, img5];
  return (
    <div>
      <img
        src={images[image]}
        alt="Carousel Slide"
        style={{ width: '100%', height: 'auto' }}
      />
      <p>{text}</p>
    </div>
  );
};

export default ExampleCarouselImage;