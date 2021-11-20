import { React, useState } from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithEmail, getPassword, getEmail, setUser } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const [isLoading, setIsLoading] = useState(true);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    signInWithEmail()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in!",
          text: "Take A Look At Our Products.",
          showConfirmButton: false,
          timer: 2000,
        });
        history.push(redirect_uri);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login Error",
          text: "Incorrect Email or Password, Please try again",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="text-center my-4 mb-5">
      <h2>Please Login</h2>
      <p className=" mt-2">Login with Email & Password</p>
      <div className="w-25 mx-auto">
        <Form onSubmit={handleEmailLogin}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <MdEmail size="1.5em" />
                </InputGroup.Text>
                <FormControl
                  onBlur={getEmail}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FaLock size="1.5em" />
                </InputGroup.Text>
                <FormControl
                  onBlur={getPassword}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Login
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/register">
          Need an Account? Please Sign up!
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
