import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Form,
} from "react-bootstrap";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { MdMoney as Price, MdOutlineReviews as Review } from "react-icons/md";
import { AiOutlineStar as Star } from "react-icons/ai";
import { GrLocation as Destination, GrMapLocation } from "react-icons/gr";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const history = useHistory();
  const redirect_uri = "/allProducts";
  const cardImg = {
    height: "200px",
    width: "286px",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://quiet-plateau-54664.herokuapp.com/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  const onSubmit = (data) => {
    data.productName = singleProduct?.productName;
    data.manufacturer = singleProduct?.manufacturer;
    data.price = singleProduct?.price;
    data.image = singleProduct?.image;
    data.rating = singleProduct?.rating;
    data.number_of_reviews = singleProduct?.number_of_reviews;
    data.status = "pending";
    fetch("https://quiet-plateau-54664.herokuapp.com/confirmedOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Order Successful.",
            text: "Please wait for confirmation email",
            showConfirmButton: false,
            timer: 2000,
          });
          history.push(redirect_uri);
        }
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} md={5} sm={12}>
            <Card style={{ width: "18rem" }} className="mt-3 g-2 mx-auto">
              <Card.Header className="text-center">
                Order your camera now!
              </Card.Header>
              <Card.Img
                variant="top"
                src={singleProduct.image}
                style={cardImg}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>
                  <Destination className="me-1" size="1.5em"></Destination>
                  {singleProduct.productName}
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  {" "}
                  <GrMapLocation className="me-1" size="1.5em" />
                  {singleProduct.manufacturer}
                </ListGroupItem>
                <ListGroupItem>
                  <Price className="me-1" size="1.5em" />${singleProduct.price}{" "}
                  approx.
                </ListGroupItem>
                <ListGroupItem>
                  <Star className="me-1" size="1.5em" />
                  {singleProduct.rating}/5.0, {singleProduct.number_of_reviews}{" "}
                  reviews.
                </ListGroupItem>
                <ListGroupItem>
                  <Review className="me-1" size="1.5em" />
                  {singleProduct.number_of_reviews} reviews.
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col lg={9} md={7} sm={12}>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-dark rounded mt-3 w-75 p-3 mx-auto"
            >
              <h2 className="text-center text-info bg-dark rounded p-2 w-75 mx-auto">
                Confirm Your Order
              </h2>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("name", { required: true })}
                  defaultValue={user?.displayName}
                />
                <Form.Text className="text-muted">
                  {errors.name && (
                    <h5 className="text-danger mt-1">This field is required</h5>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  {...register("email")}
                  defaultValue={user?.email}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("productName")}
                  defaultValue={singleProduct?.productName}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control
                  type="text"
                  {...register("manufacturer")}
                  defaultValue={singleProduct?.manufacturer}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-1 w-75 mx-auto">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  {...register("price")}
                  defaultValue={singleProduct?.price}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mt-2 w-75 mx-auto">
                <input type="submit" className="btn btn-success me-4" />
                <Link to="/allProducts">
                  <input
                    type="submit"
                    value="Other Products"
                    className="btn btn-info me-2"
                  />
                </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bookings;
