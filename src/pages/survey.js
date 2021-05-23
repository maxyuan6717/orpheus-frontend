import { useState } from "react";
import styles from "./survey.module.css";
import Button from "../components/button";
import { StyledInput } from "../common/styledcomponents";
import { ResponsiveLine } from "@nivo/line";
import SurveyGraph from "../components/surveygraph";
import { Row, Col } from "react-bootstrap";
import { AppUrl } from "../util/base";

const refsLayer = (props) => {
  const height = 1;
  return props.inputs.map((val, index) =>
    val ? (
      <g key={index}>
        <rect
          y={props.yScale(height)}
          x={props.xScale(val) - 1}
          width={2}
          height={props.yScale(0) - props.yScale(height)}
          fill="rgba(255,0,0,.5)"
        />
      </g>
    ) : null
  );
};

const Survey = () => {
  const [screentime, setScreentime] = useState();
  const [pickups, setPickups] = useState();
  const [show, setShow] = useState(false);

  // const mu = 3,
  //   beta = 0.8;

  const z = (x, mu, beta) => {
    return (x - mu) / beta;
  };

  const gumbel_pdf = (x, mu, beta) => {
    return (1 / beta) * Math.exp(-(z(x, mu, beta) + Math.exp(-z(x, mu, beta))));
  };

  const gumbel_cdf = (x, mu, beta) => {
    return Math.exp(-Math.exp(-z(x, mu, beta)));
  };

  let pickup_data = [];
  let screentime_data = [];
  for (let i = 0; i <= 200; i += 1) {
    pickup_data.push({
      x: i,
      // y: gumbel_pdf(i, 3, 0.8),
      y:
        0.33 * gumbel_pdf(i, 80, 30) +
        0.33 * gumbel_pdf(i, 63, 15) +
        0.33 * gumbel_pdf(i, 54, 10),
      cdf:
        0.33 * gumbel_cdf(i, 80, 30) +
        0.33 * gumbel_cdf(i, 63, 15) +
        0.33 * gumbel_cdf(i, 54, 10),
    });
  }
  for (let i = 0; i < 600; i += 10) {
    screentime_data.push({
      x: i,
      y: gumbel_pdf(i, 180, 80),
      cdf: gumbel_cdf(i, 180, 80),
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="header">How do you consume technology?</div>
        {!show && (
          <div className="fade-in">
            <div className="mt-5 mb-3">
              <div className="subheader">
                1. What is your average screentime? (in minutes)
              </div>
              <StyledInput
                type="text"
                placeholder="Screentime"
                value={screentime}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setScreentime(e.target.value);
                  }
                  if (!e.target.value) {
                    setShow(false);
                  }
                }}
              />
            </div>
            <div className="mb-3">
              <div className="subheader">
                2. How many times did you pick up your phone today?
              </div>
              <StyledInput
                type="text"
                placeholder="Pickups"
                value={pickups}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setPickups(e.target.value);
                  }
                  if (!e.target.value) {
                    setShow(false);
                  }
                }}
              />
            </div>
            <div className="d-flex justify-content-left">
              <Button
                type="link"
                height="4rem"
                width="18rem"
                text="Get my Results"
                onClick={() => {
                  setShow(true);
                }}
                disabled={!screentime || !pickups}
              />
            </div>
          </div>
        )}
        {show && (
          <div className="fade-in">
            <Row className="mt-3 mb-5">
              <Col md={6}>
                <div className={styles.col_title}>Screentime</div>
                <div className={styles.graph_col}>
                  {screentime && (
                    <div className={styles.graph_text + " text-center mt-3"}>
                      You are in the top{" "}
                      {(gumbel_cdf(screentime, 180, 80) * 100).toFixed(1)}% of
                      users
                    </div>
                  )}
                  <div className={styles.graph_container + " mt-3"}>
                    <SurveyGraph
                      data={screentime_data}
                      value={screentime}
                      variable="Minutes"
                      barHeight={0.32}
                    />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.col_title}>Pickups</div>
                <div className={styles.graph_col}>
                  {pickups && (
                    <div className={styles.graph_text + " text-center mt-3"}>
                      You are in the top{" "}
                      {(
                        (0.33 * gumbel_cdf(pickups, 80, 30) +
                          0.33 * gumbel_cdf(pickups, 63, 15) +
                          0.33 * gumbel_cdf(pickups, 54, 10)) *
                        100
                      ).toFixed(1)}
                      % of users
                    </div>
                  )}
                  <div className={styles.graph_container + " mt-3"}>
                    <SurveyGraph
                      data={pickup_data}
                      value={pickups}
                      variable="Pickups"
                      barHeight={0.023}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="mb-3">
              <div className="subheader italic">
                Do you feel controlled by your device? Get the tools to build a
                healthy relationship with your screen.
              </div>
            </div>
            <div className="d-flex justify-content-left">
              <Button
                type="link"
                href={`${AppUrl}/register`}
                height="4rem"
                width="18rem"
                text="Take the Pledge"
              />
            </div>
            <div
              className={styles.retake + " mt-2"}
              onClick={() => {
                setShow(false);
                setPickups(null);
                setScreentime(null);
              }}
            >
              ← Retake
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Survey;
