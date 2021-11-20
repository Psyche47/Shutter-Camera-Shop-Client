import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allReviews").then((res) =>
      res.json().then((data) => setReviews(data))
    );
  }, []);
  return (
    <div>
      <Container>
        <h5 className="display-5 rounded text-center text-light bg-dark p-3 mt-3">
          Feedback From Our Valuable Customers
        </h5>
        <div className="d-flex justify-content-between">
          <div className="row">
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
