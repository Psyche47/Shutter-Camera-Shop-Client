import React from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signInWithEmail, isLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmail({ ...data, history, redirect });
  };
  return (
    <div>
      <Container>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-dark rounded mt-5 w-50 p-3 mx-auto"
        >
          <h5 className="text-center text-info bg-dark rounded p-2 w-50 mx-auto">
            Please Log In
          </h5>
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
              <input type="submit" className="btn btn-primary" value="Login" />
            </Form.Group>
          </div>
        </Form>
        <p className="mt-2 text-center">
          <NavLink className="text-decoration-none" to="/register">
            Need an account? Please Register!
          </NavLink>
        </p>
      </Container>
    </div>
  );
};

export default Login;
