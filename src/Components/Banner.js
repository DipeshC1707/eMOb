import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import slide1 from "../Components/assets/slides/slide1.webp"
import slide2 from "../Components/assets/slides/slide2.jpg"
import slide3 from "../Components/assets/slides/slide3.jpeg"
export const Banner = () => {
      return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
            height="600"
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            height="600"
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            height="600"
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }