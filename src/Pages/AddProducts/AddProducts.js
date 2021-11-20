import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddServices = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addProducts", {
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
            title: "Product Added successfully",
            text: "Product will be displayed on the Home page.",
            showConfirmButton: false,
            timer: 2000,
          });
          reset();
        }
      });
  };
  return (
    <div>
      {/* <Container> */}
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-dark rounded mt-3 w-75 p-3 mx-auto"
      >
        <h2 className="text-center text-info bg-dark rounded p-2 w-75 mx-auto">
          Enter the information of the product
        </h2>

        <Form.Group className="mb-1 w-75 mx-auto">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            {...register("productName", { required: true })}
          />
          <Form.Text className="text-muted">
            {errors.productName && (
              <h5 className="text-danger mt-1">This field is required</h5>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-1 w-75 mx-auto">
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control
            type="text"
            {...register("manufacturer", { required: true })}
          />
          <Form.Text className="text-muted">
            {errors.manufacturer && (
              <h5 className="text-danger mt-1">This field is required</h5>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-1 w-75 mx-auto">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            {...register("price", { required: true })}
          />
          <Form.Text className="text-muted">
            {errors.price && (
              <h5 className="text-danger mt-1">This field is required</h5>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-1 w-75 mx-auto">
          <Form.Label>Image Link</Form.Label>
          <Form.Control type="url" {...register("image", { required: true })} />
          <Form.Text className="text-muted">
            {errors.image && (
              <h5 className="text-danger mt-1">This field is required</h5>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-1 w-75 mx-auto">
          <Form.Label>Rating out of 5</Form.Label>
          <Form.Control
            type="number"
            step="any"
            {...register("rating", { required: true }, { min: 0, max: 5 })}
          />
          <Form.Text className="text-muted">
            {errors.rating && (
              <h5 className="text-danger mt-1">This field is required</h5>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-1 w-75 mx-auto">
          <Form.Label>Number of Ratings</Form.Label>
          <Form.Control
            type="number"
            {...register("number_of_reviews", { required: true })}
          />
          <Form.Text className="text-muted">
            {errors.number_of_reviews && (
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
      {/* </Container> */}
    </div>
  );
};

export default AddServices;
