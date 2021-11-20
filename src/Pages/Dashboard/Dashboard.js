import React, { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import AddProducts from "../AddProducts/AddProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import MyOrders from "../MyOrders/MyOrders";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import Pay from "../Pay/Pay";
import useAuth from "../../Hooks/useAuth";

const Admin = () => {
  const [render, setRender] = useState("addProducts");
  const { admin } = useAuth();

  return (
    <div>
      {admin ? (
        <h2 className="text-info text-center mt-1 bg-dark rounded mx-2 p-2">
          Admin Dashboard
        </h2>
      ) : (
        <h2 className="text-info text-center mt-1 bg-dark rounded mx-2 p-2">
          User Dashboard
        </h2>
      )}
      <Row className="mx-2 border rounded ">
        <Col className="border border-dark p-1 bg-dark" lg={3} md={3} sm={12}>
          <Container>
            <h4 className="text-center text-light">Menu</h4>
            <ListGroup as="ol" numbered>
              {!admin && (
                <ListGroup.Item variant="dark" as="li" className="admin-item">
                  <Button variant="success" onClick={() => setRender("pay")}>
                    {" "}
                    Pay
                  </Button>
                </ListGroup.Item>
              )}
              {admin && (
                <ListGroup.Item variant="dark" as="li" className="admin-item">
                  <Button
                    variant="success"
                    onClick={() => setRender("addProducts")}
                  >
                    {" "}
                    Add A Product
                  </Button>
                </ListGroup.Item>
              )}

              {admin && (
                <ListGroup.Item variant="dark" as="li" className="admin-item">
                  <Button
                    variant="success"
                    onClick={() => setRender("manageProducts")}
                  >
                    Manage Products
                  </Button>
                </ListGroup.Item>
              )}

              {!admin && (
                <ListGroup.Item variant="dark" as="li" className="admin-item">
                  <Button
                    variant="success"
                    onClick={() => setRender("myOrders")}
                  >
                    View Your Orders
                  </Button>
                </ListGroup.Item>
              )}

              {admin && (
                <ListGroup.Item variant="dark" as="li" className="admin-item">
                  <Button
                    variant="success"
                    onClick={() => setRender("manageAllOrders")}
                  >
                    Manage All Orders
                  </Button>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Container>
        </Col>
        <Col lg={9} md={9} sm={12}>
          {render === "pay" && <Pay></Pay>}
          {render === "addProducts" && <AddProducts></AddProducts>}
          {render === "myOrders" && <MyOrders></MyOrders>}
          {render === "manageProducts" && (
            <ManageAllProducts></ManageAllProducts>
          )}
          {render === "manageAllOrders" && <ManageAllOrders></ManageAllOrders>}
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
