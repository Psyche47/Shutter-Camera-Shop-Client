import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  const [bookings, setBookings] = useState();
  const [control, setControl] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://quiet-plateau-54664.herokuapp.com/myOrders/")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [control]);

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdate = (id) => {
    fetch(`https://quiet-plateau-54664.herokuapp.com/updateOrderStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setControl(!control);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure to delete this order?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://quiet-plateau-54664.herokuapp.com/deleteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Order Deleted successfully",
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
      <div>
        <Table striped bordered hover responsive className="caption-top">
          <caption className="text-center h3 bg-dark text-light rounded p-2">
            Manage All Orders
          </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Status</th>
              <th>New Status</th>
              <th>Update Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {bookings?.map((booking, index) => (
            <tbody key={booking._id}>
              <tr>
                <td>{index}</td>
                <td>{booking?.name}</td>
                <td>{booking?.email}</td>
                <td>{booking?.productName}</td>
                <td>{booking?.status}</td>
                <td>
                  <input type="text" onChange={handleStatus} />
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleUpdate(booking?._id)}
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(booking?._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
