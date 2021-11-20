import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import error from "../../Assets/Images/404.png";

const NotFound = () => {
  return (
    <div>
      <Container>
        <div lg={12} md={12} sm={12} className="text-center">
          <img className="image-404" src={error} alt="" class="img-fluid" />
        </div>
        <div className="text-center mt-2">
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
