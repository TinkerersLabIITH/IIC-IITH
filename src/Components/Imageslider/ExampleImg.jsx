import React from 'react';
import img1 from "../../assets/imageslider1.jpeg";
import img2 from "../../assets/imageslider2.jpeg";
import img3 from "../../assets/AA.jpg";
import img4 from "../../assets/imageslider4.webp";
import img5 from "../../assets/imageslider5.jpeg";
import img6 from "../../assets/Inv2024.jpg"

const ExampleCarouselImage = ({ text, image }) => {
  const images = [img1, img2, img3, img4, img5,img6];
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop:'1rem' }}>
      <img
        src={images[image]}
        alt="Carousel Slide"
        style={{ width: '60%', height: 'auto', borderRadius: '5rem' }} 
      />
      <p>{text}</p>
    </div>
  );
};

export default ExampleCarouselImage;
