import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const PostReview = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(5);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
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
            title: "Review Added successfully",
            text: "Thanks For Your Feedback.",
            showConfirmButton: false,
            timer: 2000,
          });
          reset();
        }
      });
  };
  return (
    <div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-dark rounded mt-3 w-75 p-3 mx-auto"
      >
        <h2 className="text-center text-info bg-dark rounded p-2 w-75 mx-auto">
          Leave A Feedback
        </h2>
        <Form.Group className="mb-1 w-75 mx-auto">
          <Form.Label style={{ fontWeight: "bold" }}>Your Name </Form.Label>
          <Form.Control
            type="text"
            {...register("productName", { required: true })}
            defaultValue={user?.displayName}
          />
          <Form.Text className="text-muted">
            {errors.name && (
              <h5 className="text-danger mt-1">This field is required</h5>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-1 w-75 mx-auto">
          <Form.Label style={{ fontWeight: "bold" }}>
            Rating out of 5
          </Form.Label>
          <Form.Control
            type="number"
            step="any"
            min="1"
            max="5"
            {...register("rating", { required: true }, { min: 0, max: 5 })}
          />

          <Form.Text className="text-muted">
            {errors.rating && (
              <h5 className="text-danger mt-1">This field is required</h5>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-1 w-75 mx-auto">
          <Form.Label style={{ fontWeight: "bold" }}>
            Review Description
          </Form.Label>
          <Form.Control
            style={{ height: "10rem" }}
            type="text"
            as="textarea"
            {...register("description", { required: true })}
            placeholder="Enter a description"
          />
          <Form.Text className="text-muted">
            {errors.description && (
              <h5 className="text-danger mt-1">This field is required</h5>
            )}
          </Form.Text>
        </Form.Group>

        <div className="text-center">
          <Form.Group className="mt-2 w-75 mx-auto ">
            <input type="submit" className="btn btn-success" />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default PostReview;
