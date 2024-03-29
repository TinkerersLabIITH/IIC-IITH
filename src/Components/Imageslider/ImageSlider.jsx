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
        <ExampleCarouselImage  image={0} /> 
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage  image={1} /> {/* Pass the image prop */}
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage  image={2} /> {/* Pass the image prop */}
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage  image={3} /> {/* Pass the image prop */}
        {/* <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage  image={4} /> {/* Pass the image prop */}
        {/* <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage  image={5} />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
