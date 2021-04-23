import { useState } from "react";
import Button from "../components/button";
import { addBeta } from "../util/api";
import { Row } from "react-bootstrap";
import styled from "styled-components";

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
      return;
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

  return (
    <div className="container">
      <div className="content">
        <div className="header">Beta Program Sign-Up</div>
        <div>
          <div className="subheader">Email</div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <Button
          type="link"
          height="3rem"
          text="Sign Up"
          onClick={handleSubmit}
        />
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
