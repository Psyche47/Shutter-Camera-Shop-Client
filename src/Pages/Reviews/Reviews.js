import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://quiet-plateau-54664.herokuapp.com/allReviews").then((res) =>
      res.json().then((data) => setReviews(data))
    );
  }, []);
  return (
    <div>
      {!reviews ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Reviews;
