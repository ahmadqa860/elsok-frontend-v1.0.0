import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import slideImage1 from '../img/bg-img/slideImage1.jpeg';
import slideImage2 from '../img/bg-img/slideImage2.jpg';
import slideImage3 from '../img/bg-img/slideImage3.jpg';
import "../css/carousel.css";

const CarouselContainer = () => {
  return (
    <div className="_area">
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={8000}>
          <img
            className="__items"
            src={slideImage1}
            alt="First slide"
          />
          <Carousel.Caption >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="__items"
            src={slideImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 style={{textAlign:'center'}}>Second slide label</h3>
            <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="__items"
            src={slideImage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{textAlign:'center'}}>Third slide label</h3>
            <p style={{textAlign:'center'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselContainer;

