import styles from "./description.module.css";
import { Row } from "react-bootstrap";
import Spacer from "./spacer";
import Button from "./button";

const Description = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row className={`mx-auto ${styles.text}`}>
          <div>
            The Pledge has different strategies of disconnection you can engage
            in - reduction or restriction of specific app or device usage. We
            provide daily reading based on topics related to technology
            addiction, behavior change, and social media's effects on politics.
          </div>
          <Spacer />
          <div>
            Engage with these materials to redeploy any excess time and
            bandwidth gained from the program to activities more meaningful to
            you. All materials are free of charge.
          </div>
        </Row>
        <Row className="mx-auto justify-content-center">
          <div className="mx-2 my-2">
            <Button text="Our Story" type="router" to="/story" />
          </div>
          <div className="mx-2 my-2">
            <Button text="Our Team" type="router" to="/team" />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Description;
