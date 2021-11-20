import React from "react";
import { ListGroup } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="container mt-3">
      <h2 className="bg-dark text-white text-center p-2 mt-2 ">
        Frequently asked questions!
      </h2>
      <ListGroup>
        <ListGroup.Item>
          1. How do I receive confirmation of my booking?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: You'll receive an email asking you to confirm your booking.
        </ListGroup.Item>
        <ListGroup.Item>2. What is the refund policy?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: In case of cancellation, you'll get your money back within 7
          days.
        </ListGroup.Item>
        <ListGroup.Item>3. How will I be provided warranty?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: You are given one week of replacement warranty and one year
          service warranty.
        </ListGroup.Item>
        <ListGroup.Item>4. What kind of lens will I get?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: You will get the default lens but you can buy lens as add ons.
        </ListGroup.Item>

        <ListGroup.Item>
          5. What types of Credit Cards are accepted?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: We accept Discover, American Express, Visa, MasterCard and Diners
          Club. Your current billing address and phone information must be
          included with every order.
        </ListGroup.Item>
        <ListGroup.Item>
          6. Do I get any discount if I buy other products?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: You will get recurring customer discount if you buy any more
          products from us.
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default FAQ;
