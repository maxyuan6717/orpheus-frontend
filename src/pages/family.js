import { useState } from "react";
import styles from "./survey.module.css";
import Button from "../components/button";
import { StyledInput } from "../common/styledcomponents";
import SurveyGraph from "../components/surveygraph";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AppUrl } from "../util/base";
import { addStat } from "../util/api";
import ReactGA, { set } from "react-ga";
import { AiOutlineQuestionCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import styled from "styled-components";

const StyledTooltip = styled(Tooltip)`
  .tooltip-inner {
    max-width: 300px;
    line-height: 1.2;
    text-align: left;
    padding: 16px;
  }
`;

const FamilySurvey = () => {
  const [responses, setResponses] = useState([
    { name: "", screentime: "", pickups: "" },
  ]);
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

  const screentimePercentile = (x) => {
    return Math.round(gumbel_cdf(x, 180, 80) * 100);
  };

  const pickupsPercentile = (x) => {
    return Math.round(
      (0.33 * gumbel_cdf(x, 80, 30) +
        0.33 * gumbel_cdf(x, 63, 15) +
        0.33 * gumbel_cdf(x, 54, 10)) *
        100
    );
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

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="header">
          {show ? "Your Results" : "How does your family consume tech?"}
        </div>
        {!show && (
          <div className="fade-in">
            <div className="subheader mb-3">
              Input your daily averages for screentime (in minutes) and pickups.
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderInstructions}
                popperConfig={{ header: "SCREENTIME/PICKUPS" }}
              >
                <span className="my-auto ml-3">
                  <AiOutlineQuestionCircle
                    style={{ display: "inline-block", opacity: 0.5 }}
                    size={20}
                  />
                </span>
              </OverlayTrigger>
            </div>
            <Row className="mx-auto normalheader">
              <Col md={5} className="pl-0">
                Name
              </Col>
              <Col md={3}>Screentime</Col>
              <Col md={3}>Pickups</Col>
              <Col md={1} className="pr-0" />
            </Row>
            {responses.map((res, index) => (
              <Row className="mx-auto my-2">
                <Col md={5} className="pl-0">
                  <StyledInput
                    type="text"
                    placeholder="Name"
                    value={res.name}
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      let temp = [...responses];
                      temp[index].name = e.target.value;
                      setResponses(temp);
                    }}
                  />
                </Col>
                <Col md={3}>
                  <StyledInput
                    type="text"
                    placeholder="Screentime"
                    value={res.screentime}
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      const re = /^[0-9\b]+$/;
                      if (e.target.value === "" || re.test(e.target.value)) {
                        let temp = [...responses];
                        temp[index].screentime = e.target.value;
                        setResponses(temp);
                      }
                      if (!e.target.value) {
                        setShow(false);
                      }
                    }}
                  />
                </Col>
                <Col md={3}>
                  <StyledInput
                    type="text"
                    placeholder="Pickups"
                    value={res.pickups}
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      const re = /^[0-9\b]+$/;
                      if (e.target.value === "" || re.test(e.target.value)) {
                        let temp = [...responses];
                        temp[index].pickups = e.target.value;
                        setResponses(temp);
                      }
                      if (!e.target.value) {
                        setShow(false);
                      }
                    }}
                  />
                </Col>
                <Col
                  md={1}
                  onClick={() => {
                    let temp = [...responses];
                    temp.splice(index, 1);
                    setResponses(temp);
                  }}
                  style={{
                    pointerEvents: responses.length === 1 ? "none" : null,
                  }}
                  className="d-flex justify-content-left pr-0"
                >
                  <span className="my-auto">
                    <FaRegTimesCircle
                      style={{ display: "block", cursor: "pointer" }}
                      size={25}
                    />
                  </span>
                </Col>
              </Row>
            ))}
            <div
              onClick={() => {
                let temp = [...responses];
                temp.push({ name: "", screentime: "", pickups: "" });
                setResponses(temp);
              }}
              className="my-2 normalheader d-flex"
            >
              <span className={styles.add_btn}>
                Add Person{" "}
                <span className="my-auto ml-1">
                  <AiOutlinePlusCircle style={{ display: "inline-block" }} />
                </span>
              </span>
            </div>
            <div className="d-flex justify-content-left mt-3">
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
                  for (const res of responses) {
                    await addStat(res.screentime, res.pickups);
                  }
                  setShow(true);
                }}
                disabled={responses.some(
                  (res) =>
                    res.name === "" ||
                    res.screentime === "" ||
                    res.pickups === ""
                )}
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
                  <div className={styles.graph_text + " text-center mt-3"}>
                    {/* You are in the {screentime_percentile}
                      {endings[screentime_percentile % 10]} percentile of users! */}
                  </div>
                  <div className={styles.graph_container + " mt-3"}>
                    <SurveyGraph
                      data={screentime_data}
                      value={responses.map((res) => {
                        return {
                          name: res.name,
                          val: res.screentime,
                          cdf: screentimePercentile(res.screentime),
                        };
                      })}
                      variable="Minutes"
                      barHeight={0.32}
                    />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.col_title}>Pickups</div>
                <div className={styles.graph_col}>
                  <div className={styles.graph_text + " text-center mt-3"}>
                    {/* You are in the {pickups_percentile}
                      {endings[pickups_percentile % 10]} percentile of users! */}
                  </div>

                  <div className={styles.graph_container + " mt-3"}>
                    <SurveyGraph
                      data={pickup_data}
                      value={responses.map((res) => {
                        return {
                          name: res.name,
                          val: res.pickups,
                          cdf: pickupsPercentile(res.pickups),
                        };
                      })}
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
                setResponses([{ name: "", screentime: "", pickups: "" }]);
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

export default FamilySurvey;
