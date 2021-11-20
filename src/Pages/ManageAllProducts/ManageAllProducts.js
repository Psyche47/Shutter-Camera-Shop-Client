import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageAllServices = () => {
  const [products, setProducts] = useState();
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("https://quiet-plateau-54664.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [control]);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure to delete this product from the listings?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://quiet-plateau-54664.herokuapp.com/deleteProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product Deleted successfully",
                showConfirmButton: false,
                timer: 2000,
              });
              setControl(!control);
            }
          });
      }
    });
  };
  return (
    <div>
      <Table striped bordered hover responsive className="caption-top">
        <caption className="text-center h3 bg-dark text-light rounded p-2">
          Manage All Products
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Number of Reviews</th>
            <th>Action</th>
          </tr>
        </thead>
        {products?.map((service, index) => (
          <tbody key={service._id}>
            <tr>
              <td>{index}</td>
              <td>{service?.productName}</td>
              <td>{service?.manufacturer}</td>
              <td>{service?.price}</td>
              <td>{service?.rating}</td>
              <td>{service?.number_of_reviews}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(service?._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllServices;
