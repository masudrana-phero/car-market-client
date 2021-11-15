import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container className="banner-bg">
        <Carousel className="carousel-text-color">
          <Carousel.Item>
            <img
              className="d-block w-100 banner-carousel-image"
              src="https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/car/car-3.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="text-danger">Mercedes-Benz C-Class</h3>
              <p className="text-white">Maecenas lobortis ante id egestas placerat. Nullam at ultricies lacus.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-carousel-image"
              src="https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/car/car-1.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="text-danger">Nissan Altima 2.5 SL, LEATHER</h3>
              <p className="text-white">Just Great Cars Delivered. Delivery W/ Purchase. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-carousel-image"
              src="https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/car/car-4.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="text-danger">BMW M5 Sport,</h3>
              <p className="text-white">
                Bayerische Motoren Werke AG, commonly referred to as BMW .
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
