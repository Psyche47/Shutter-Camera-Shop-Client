import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaUserTie as User } from "react-icons/fa";
import { AiOutlineStar as Star } from "react-icons/ai";
import { MdOutlineRateReview as Description } from "react-icons/md";
const Review = ({ review }) => {
  const { name, rating, description } = review;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <Card style={{ width: "18rem" }} className="mt-3 g-2 mx-auto">
        <Card.Header>
          <User className="me-1" size="1.5em" />
          {name}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Description className="me-1" size="1.5em" />
            {description}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            {" "}
            <Star className="me-1" size="1.5em" />
            {rating}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Review;
