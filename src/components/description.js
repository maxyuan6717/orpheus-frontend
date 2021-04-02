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
            The Pledge has 3 levels of disconnection the reader can engage in -
            complete, moderate or light reduction of device usage. We provide
            daily reading based on topics related to technology addiction,
            behavior change, and social media's effects on politics.
          </div>
          <Spacer />
          <div>
            For example, people motivated by the upcoming election can choose a
            guide that includes additional materials for people to redeploy any
            excess time and bandwidth gained from the program to political
            activities. All materials are free of charge.
          </div>
        </Row>
        <Row className="mx-auto justify-content-center">
          <div className="mx-2 my-2">
            <Button text="about" type="router" to="/about" />
          </div>
          <div className="mx-2 my-2">
            <Button text="faq" type="router" to="/faq" />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Description;
