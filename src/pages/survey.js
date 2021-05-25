import { useState } from "react";
import styles from "./survey.module.css";
import Button from "../components/button";
import { StyledInput } from "../common/styledcomponents";
import SurveyGraph from "../components/surveygraph";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AppUrl } from "../util/base";
import { addStat } from "../util/api";
import ReactGA from "react-ga";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import styled from "styled-components";

const StyledTooltip = styled(Tooltip)`
  .tooltip-inner {
    max-width: 300px;
    line-height: 1.2;
    text-align: left;
    padding: 16px;
  }
`;

const Survey = () => {
  const [screentime, setScreentime] = useState();
  const [pickups, setPickups] = useState();
  const [show, setShow] = useState(false);

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

  const endings = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

  const renderInstructions = (props) => {
    let header = "";
    if (props.popper.state) {
      header = props.popper.state.options.header;
    }
    return (
      <StyledTooltip id="button-tooltip" {...props}>
        <small>
          <strong>TO CHECK {header}</strong>
          <br />
          <br />
          <strong>iPhone users:</strong> Settings > Screen Time > See All
          Activity > Record “Daily Average”
          <br />
          <br />
          <strong>(Most) Android users:</strong> Settings > Battery > Tap the
          3-dot menu > Battery usage > 3-dot menu > Show full device usage
          (Varies for different models)
        </small>
      </StyledTooltip>
    );
  };

  const screentime_percentile = Math.round(
    gumbel_cdf(screentime, 180, 80) * 100
  );
  const pickups_percentile = Math.round(
    (0.33 * gumbel_cdf(pickups, 80, 30) +
      0.33 * gumbel_cdf(pickups, 63, 15) +
      0.33 * gumbel_cdf(pickups, 54, 10)) *
      100
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="header">
          {show ? "Your Results" : "How do you consume technology?"}
        </div>
        {!show && (
          <div className="fade-in">
            <div className="mt-5 mb-4">
              <div className="subheader mb-3">
                1. What is your average screentime? (in minutes)
              </div>
              <div style={{ marginLeft: "20px" }} className="d-flex">
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
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderInstructions}
                  popperConfig={{ header: "SCREENTIME" }}
                >
                  <span className="my-auto ml-3">
                    <AiOutlineQuestionCircle
                      style={{ display: "inline-block", opacity: 0.5 }}
                      size={30}
                    />
                  </span>
                </OverlayTrigger>
              </div>
            </div>
            <div className="mb-5">
              <div className="subheader mb-3">
                2. How many times did you pick up your phone today?
              </div>
              <div style={{ marginLeft: "20px" }}>
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
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderInstructions}
                  popperConfig={{ header: "PICKUPS" }}
                >
                  <span className="my-auto ml-3">
                    <AiOutlineQuestionCircle
                      style={{ display: "inline-block", opacity: 0.5 }}
                      size={30}
                    />
                  </span>
                </OverlayTrigger>
              </div>
            </div>
            <div className="d-flex justify-content-left">
              <Button
                type="link"
                height="4rem"
                width="18rem"
                text="Get my Results"
                onClick={async () => {
                  ReactGA.event({
                    category: "Survey",
                    action: "Take Survey",
                  });
                  await addStat(screentime, pickups);
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
                      You are in the {screentime_percentile}
                      {endings[screentime_percentile % 10]} percentile of users!
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
                      You are in the {pickups_percentile}
                      {endings[pickups_percentile % 10]} percentile of users!
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
              <div className="normalheader italic">
                Do you feel controlled by your device? <br />
                Take the Orpheus Pledge to build a healthier relationship with
                your screen.
              </div>
            </div>
            <div className="d-flex justify-content-left">
              <Button
                type="link"
                href={`${AppUrl}/register`}
                onClick={() => {
                  ReactGA.event({
                    category: "Survey",
                    action: "Click Register Button",
                  });
                }}
                height="4rem"
                width="18rem"
                text="Take the Pledge"
              />
            </div>
            <div
              className={styles.retake + " mt-4"}
              onClick={() => {
                setShow(false);
                setPickups(null);
                setScreentime(null);
              }}
            >
              ← Retake
            </div>
            <div className={styles.small_text + " mt-3"}>
              <small>
                *We calculated these probability distributions using our own
                data and approximations.
              </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Survey;
