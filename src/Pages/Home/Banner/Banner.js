import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container>
        <Carousel className="carousel-text-color">
          <Carousel.Item>
            <img
              className="d-block w-100 banner-carousel-image"
              src="https://i.pinimg.com/originals/fc/7e/6f/fc7e6fead503441da21d560e785852db.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-carousel-image"
              src="https://i.pinimg.com/474x/b5/8d/e2/b58de26ec3e23bfdd1760d91ed4f9f62.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-carousel-image"
              src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5327402.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
