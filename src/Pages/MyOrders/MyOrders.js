import {
  Container,
  Row,
  Button,
  Col,
  Card,
  ListGroupItem,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdMoney as Price, MdOutlineReviews as Review } from "react-icons/md";
import { AiOutlineStar as Star } from "react-icons/ai";
import { BsBookmarkCheck as Check } from "react-icons/bs";
import { GrLocation as Destination, GrMapLocation } from "react-icons/gr";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyOrders = () => {
  const cardImg = {
    height: "200px",
    width: "286px",
  };
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          handleClose();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Cancelled successfully",
            text: "Please Look at our other products.",
            showConfirmButton: false,
            timer: 2000,
          });
          setControl(!control);
        }
      });
  };
  return (
    <div>
      <Container>
        <h4 className="display-5 rounded text-center text-light bg-dark p-3 mt-3">
          Products You Have Ordered
        </h4>
        <div>
          <Row>
            {!orders.length ? (
              <Col lg={12}>
                <h4 className="rounded text-center text-light bg-dark p-3 mt-3">
                  No Orders Found. See all our affordable Products.
                  <Link to="/allProducts">
                    <Button variant="primary" className="ms-3">
                      All Products
                    </Button>
                  </Link>
                </h4>
              </Col>
            ) : (
              orders.map((booking) => (
                <Col lg={4} md={6} sm={12} key={booking._id}>
                  <Card style={{ width: "18rem" }} className="mt-3 g-2 mx-auto">
                    <Card.Img
                      variant="top"
                      src={booking?.image}
                      style={cardImg}
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>
                        <Destination
                          className="me-1"
                          size="1.5em"
                        ></Destination>
                        {booking?.productName}
                      </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        {" "}
                        <GrMapLocation className="me-1" size="1.5em" />
                        {booking?.manufacturer}
                      </ListGroupItem>
                      <ListGroupItem>
                        <Price className="me-1" size="1.5em" />${booking?.price}{" "}
                        approx.
                      </ListGroupItem>
                      <ListGroupItem>
                        <Star className="me-1" size="1.5em" />
                        {booking?.rating}/5.0 reviews.
                      </ListGroupItem>
                      <ListGroupItem>
                        <Review className="me-1" size="1.5em" />
                        {booking?.number_of_reviews} reviews.
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="d-flex justify-content-center">
                          <Button
                            // () => handleDelete(booking?._id)
                            onClick={handleShow}
                            variant="danger"
                            className="text-light"
                          >
                            <Check /> Cancel Order
                          </Button>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Cancellation Confirmation</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Are you sure you want to cancel this booking?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="primary"
                          onClick={() => handleDelete(booking?._id)}
                        >
                          I'm Sure
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                          No
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MyOrders;
