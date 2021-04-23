import { useState } from "react";
import Button from "../components/button";
import { addBeta } from "../util/api";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import Input from "../components/input";

const StyledMessage = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  text-align: center;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (email.length === 0) {
      setMessage("Please add an email");
      setError(true);
      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 2000);
    } else if (!email.includes("@")) {
      setMessage("Please enter a valid email");
      setError(true);
      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 2000);
    } else {
      const beta = await addBeta(email);
      setMessage(beta.data.message);
      setError(beta.data.error);
      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 2000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="container">
      <div className="content">
        <div className="header text-center">Beta Program Sign-Up</div>
        <div className="d-flex flex-column">
          <div className="subheader text-center">
            Enter your email to be the first in line to test Orpheus Pledge!
          </div>
          <div className="mx-auto my-5">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              borderColor="#424242"
              textColor="black"
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <Row className="mx-auto justify-content-center">
          <Button
            type="link"
            height="3rem"
            text="Sign Up"
            onClick={handleSubmit}
          />
        </Row>
        <Row className="mx-auto justify-content-center">
          <StyledMessage style={{ color: error ? "#f75c5c" : "#67f07c" }}>
            {message}
          </StyledMessage>
        </Row>
      </div>
    </div>
  );
};

export default Register;
