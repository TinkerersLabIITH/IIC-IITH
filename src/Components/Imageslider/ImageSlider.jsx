import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleImg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" indicators={false}>
      <Carousel.Item>
        <ExampleCarouselImage  image={2} />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage  image={5} />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
