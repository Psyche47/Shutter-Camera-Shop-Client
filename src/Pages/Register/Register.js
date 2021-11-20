import React from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div>
      <Container>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-dark rounded mt-5 w-50 p-3 mx-auto"
        >
          <h5 className="text-center text-info bg-dark rounded p-2 w-50 mx-auto">
            Please Sign Up
          </h5>

          <Form.Group className="mb-3 w-50 mx-auto">
            <Form.Control
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
            />
            <Form.Text className="text-muted">
              {errors.productName && (
                <h5 className="text-danger mt-1">Name is required</h5>
              )}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 w-50 mx-auto">
            <Form.Control
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
            />
            <Form.Text className="text-muted">
              {errors.manufacturer && (
                <h5 className="text-danger mt-1">Email is required</h5>
              )}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 w-50 mx-auto">
            <Form.Control
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
            />
            <Form.Text className="text-muted">
              {errors.price && (
                <h5 className="text-danger mt-1">Password is required</h5>
              )}
            </Form.Text>
          </Form.Group>

          <div className="text-center">
            <Form.Group className="mt-2 w-50 mx-auto ">
              <input
                type="submit"
                className="btn btn-success"
                value="Register"
              />
            </Form.Group>
          </div>
        </Form>
        <p className="mt-2 text-center">
          <NavLink className="text-decoration-none" to="/login">
            Already have an account? Please login!
          </NavLink>
        </p>
      </Container>
    </div>
  );
};

export default AddServices;
