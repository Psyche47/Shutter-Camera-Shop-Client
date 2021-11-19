import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Canon from "../../Assets/Images/Carousel/olmpus.jpg";
import Nikon from "../../Assets/Images/Carousel/nikon1.jpg";
import Sony from "../../Assets/Images/Carousel/sony.jpg";
import Sony1 from "../../Assets/Images/Carousel/sony2.jpg";

const Banner = () => {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item className="carousel-banner" interval={2500}>
          <img className="d-block w-100" src={Nikon} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-info bg-dark rounded p-2">
              Shutter: Premium Camera Shop
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-banner" interval={2500}>
          <img className="d-block w-100" src={Canon} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-info bg-dark rounded p-2">
              Purchase Premium Cameras From Us
            </h3>
            <Link to="/services">
              <Button variant="info">View All Our Services</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-banner" interval={2500}>
          <img className="d-block w-100 " src={Sony} alt="Third slide" />

          <Carousel.Caption>
            <h4 className="text-info bg-dark rounded p-2">
              We're Selling Cameras Since 2006
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-banner" interval={2500}>
          <img className="d-block w-100" src={Sony1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
