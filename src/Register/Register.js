import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import { NavLink, useHistory } from "react-router-dom";
import { ImUserTie } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const history = useHistory();
  const {
    getEmail,
    getPassword,
    signUpWithEmail,
    getName,
    setError,
    setUserName,
    error,
  } = useAuth();

  return (
    <div className="text-center my-4">
      <h2>Please Sign Up</h2>
      <p className=" mt-2">Sign Up with Email & Password</p>
      <h4 className="text-danger text-center">{error}</h4>
      <div className="w-25 mx-auto">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            signUpWithEmail()
              .then((result) => {
                alert("User has been Created!");
                history.push("/home");
                setUserName();
              })
              .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage);
              });
          }}
        >
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="name" visuallyHidden>
                Your Name
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <ImUserTie size="1.5em" />
                </InputGroup.Text>
                <FormControl
                  onBlur={getName}
                  type="text"
                  autoComplete="current-text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </InputGroup>
            </Col>
          </Row>

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
                  <RiLockPasswordFill size="1.5em" />
                </InputGroup.Text>
                <FormControl
                  onBlur={getPassword}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>

          <Button type="submit" className="w-100 mt-3">
            Register
          </Button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/login">
          Already have an account? Please login!
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
