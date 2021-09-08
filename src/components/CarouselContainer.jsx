import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3 style={{textAlign:'center'}}>First slide label</h3>
          <p style={{textAlign:'center'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;

