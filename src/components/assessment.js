import styles from "./assessment.module.css";
import { Row, Col } from "react-bootstrap";
import Spacer from "./spacer";

const Assessment = () => {
  return (
    <div>
      <div className="header">Assess your relationship with technology</div>
      <div className="subheader">Reflect on your usage</div>
      <Spacer />
      <Row className="mx-auto">
        <Col md={4} className="p-0">
          What is the first word or thought that comes to mind when you think of
          your phone?
        </Col>
        <Col md={8}>
          <textarea style={{ width: "100%", height: "100%" }} />
        </Col>
      </Row>
      <Spacer />
      <Row className="mx-auto">
        <Col md={6} className="pl-0 d-flex">
          <span className="mt-auto">
            What are your technology usage habits?
          </span>
        </Col>
        <Col md={6} className="pr-0">
          How well do you know your device usage?
          <Row className="mx-auto">
            <Col xs={4} className="px-1" />
            <Col xs={4} className="px-1">
              <strong className={styles.question_small}>
                Estimate daily time spent on:
              </strong>
            </Col>
            <Col xs={4} className="px-1">
              <strong className={styles.question_small}>
                *Actual daily time spent on:
              </strong>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mx-auto">
        <Col md={6} className="pl-0">
          <textarea style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col md={6} className="pl-0">
          <Row className="mx-auto">
            <Col xs={4} className="px-1 py-1">
              Cellular device
            </Col>
            <Col xs={4} className="px-1 py-1">
              <textarea style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col xs={4} className="px-1 py-1">
              <textarea style={{ width: "100%", height: "100%" }} />
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col xs={4} className="px-1 py-1">
              Most used app
            </Col>
            <Col xs={4} className="px-1 py-1">
              <textarea style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col xs={4} className="px-1 py-1">
              <textarea style={{ width: "100%", height: "100%" }} />
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col xs={4} className="px-1 py-1">
              2nd most used app
            </Col>
            <Col xs={4} className="px-1 py-1">
              <textarea style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col xs={4} className="px-1 py-1">
              <textarea style={{ width: "100%", height: "100%" }} />
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col xs={4} className="px-1 py-1">
              Daily average of pickups
            </Col>
            <Col xs={4} className="px-1 py-1">
              <textarea style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col xs={4} className="px-1 py-1">
              <textarea style={{ width: "100%", height: "100%" }} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Spacer />
      <Row className="mx-auto my-2">
        <Col md={2} />
        <Col md={2} className="text-right pr-1">
          <span className={styles.question_small}>Must have device for</span>
        </Col>
        <Col md={6} className="px-0">
          <textarea style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col md={2} />
      </Row>
      <Row className="mx-auto my-2">
        <Col md={2} />
        <Col md={2} className="text-right pr-1">
          <span className={styles.question_small}>
            When does your device and social media bring you joy?
          </span>
        </Col>
        <Col md={6} className="px-0">
          <textarea style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col md={2} />
      </Row>
      <Row className="mx-auto my-2">
        <Col md={2} />
        <Col md={2} className="text-right pr-1">
          <span className={styles.question_small}>
            How does your device distract you
          </span>
        </Col>
        <Col md={6} className="px-0">
          <textarea style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col md={2} />
      </Row>
    </div>
  );
};

export default Assessment;
