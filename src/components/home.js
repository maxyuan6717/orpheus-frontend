import { useState } from "react";
import { Row } from "react-bootstrap";
import styles from "./home.module.css";
import Logo from "../assets/logo.png";
import Button from "./button";
import Input from "./input";
import Spacer from "./spacer";
import { addBeta } from "../util/api";
import { AppUrl } from "../util/base";
import ReactGA from "react-ga";

const Home = () => {
  const handleRegisterSubmit = () => {
    ReactGA.event({
      category: "Landing",
      action: "Click Register Button",
    });
    window.location.href = `${AppUrl}/register`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row className={`mx-auto justify-content-center ${styles.header}`}>
          <span style={{ textAlign: "center" }}>
            are you tethered to your device?
          </span>
        </Row>
        <Row className={`mx-auto justify-content-center ${styles.header}`}>
          <span style={{ textAlign: "center" }}>
            Build a healthier relationship with your screen
          </span>
        </Row>
        <img
          src={Logo}
          alt="Orpheus Logo"
          width="100%"
          className={styles.logo}
        />
        <Row className={`${styles.divider_container} mx-auto`}>
          <div className={styles.divider} />
        </Row>
        <div className={styles.text}>
          <div style={{ fontWeight: 400 }}>
            Orpheus Pledge is a mindfulness technology detox program to help you
            reimagine your relationship with devices and social media. As tides
            are rising against big tech with cases brought against Facebook and
            Google on misinformation, threats against democracy, and ad tech
            monopolization—we are finally gaining awareness of the insidious
            harms of these platform models. Policy remedies take time, but
            change in our individual lives can start today. Our hope is that
            once you are freed of the distraction of technology, you can live in
            more present, meaningful, and happy ways.
          </div>
          <Spacer />
          <div>
            Our team has professors and college students who have conducted
            extensive research on platform economics and the psychology behind
            addiction. This is a completely free program with thought-provoking
            readings and prompts that only require your energy and commitment.
          </div>
          <Spacer />
          {/* <div style={{ fontStyle: "italic" }}>
            We're currently in beta testing. Click the link below to try out our
            new, email-based program!
          </div> */}
        </div>
        <Row className="mx-auto justify-content-center">
          {/* <Button
            text="Print PDF"
            type="link"
            href="https://drive.google.com/file/d/1yWb8L8Kdaw65xLjSKMBV39XzdJF7SR-d/view?usp=sharing"
          /> */}
          {/* <div className="mx-2 mb-2">
            <Input
              borderColor="white"
              textColor="white"
              value={email}
              onChange={(e) => {
                if (e.target.value && e.target.value.length > 0) {
                  setMessage("");
                }
                setEmail(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Enter Email"
            />
          </div> */}
          <div className="mx-2 mb-2">
            <Button
              type="link"
              onClick={handleRegisterSubmit}
              text="Register"
              height="6rem"
              width="18rem"
              fontSize="1.6em"
              borderRadius="5rem"
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Home;
