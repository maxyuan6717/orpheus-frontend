import { useState } from "react";
import styles from "./assessment.module.css";
import { Row, Col } from "react-bootstrap";
import Spacer from "./spacer";
import Button from "./button";
import { saveUser } from "../util/api";

const Assessment = ({ info }) => {
  const res = info && info.responses ? info.responses[0] : {};
  const [firstWord, setFirstWord] = useState(
    res["firstWord"] ? res["firstWord"] : ""
  );
  const [techHabits, setTechHabits] = useState(
    res["techHabits"] ? res["techHabits"] : ""
  );
  const [devUsage, setDevUsage] = useState(
    res["devUsage"]
      ? res["devUsage"]
      : [
          ["", ""],
          ["", ""],
          ["", ""],
          ["", ""],
        ]
  );
  const [mustHave, setMustHave] = useState(
    res["mustHave"] ? res["mustHave"] : ""
  );
  const [joy, setJoy] = useState(res["joy"] ? res["joy"] : "");
  const [distract, setDistract] = useState(
    res["distract"] ? res["distract"] : ""
  );
  const [healthy, setHealthy] = useState(res["healthy"] ? res["healthy"] : "");
  const [usageChange, setUsageChange] = useState(
    res["usageChange"] ? res["usageChange"] : ""
  );
  const [tethered, setTethered] = useState(
    res["tethered"] ? res["tethered"] : ""
  );
  const [news, setNews] = useState(res["news"] ? res["news"] : "");

  const dev_questions = [
    "Cellular device",
    "Most used app",
    "2nd most used app",
    "Daily average of pickups",
  ];

  const [saved, setSaved] = useState(0);

  const saveResponses = async () => {
    const temp = [...info.responses];
    temp[0] = {
      firstWord,
      techHabits,
      devUsage,
      mustHave,
      joy,
      distract,
      healthy,
      usageChange,
      tethered,
      news,
    };
    setSaved(-1);
    await saveUser(info._id, temp);
    setSaved(1);
    setTimeout(() => {
      setSaved(0);
    }, 2000);
  };

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
          <textarea
            value={firstWord}
            onChange={(e) => {
              setFirstWord(e.target.value);
            }}
            style={{ width: "100%", height: "100%" }}
          />
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
          <textarea
            value={techHabits}
            onChange={(e) => {
              setTechHabits(e.target.value);
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
        <Col md={6} className="pl-0">
          {dev_questions.map((question, index) => (
            <Row className="mx-auto" key={index}>
              <Col xs={4} className="px-1 py-1 text-right">
                {question}
              </Col>
              {[0, 1].map((indx) => (
                <Col xs={4} className="px-1 py-1">
                  <textarea
                    value={devUsage[index][indx]}
                    onChange={(e) => {
                      let temp = JSON.parse(JSON.stringify(devUsage));
                      temp[index][indx] = e.target.value;
                      setDevUsage(temp);
                    }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
              ))}
            </Row>
          ))}
        </Col>
      </Row>
      <Spacer />
      <Row className="mx-auto my-2">
        <Col md={2} />
        <Col md={2} className="text-right pr-1">
          <span className={styles.question_small}>Must have device for</span>
        </Col>
        <Col md={6} className="px-0">
          <textarea
            value={mustHave}
            onChange={(e) => {
              setMustHave(e.target.value);
            }}
            style={{ width: "100%", height: "100%" }}
          />
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
          <textarea
            value={joy}
            onChange={(e) => {
              setJoy(e.target.value);
            }}
            style={{ width: "100%", height: "100%" }}
          />
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
          <textarea
            value={distract}
            onChange={(e) => {
              setDistract(e.target.value);
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
        <Col md={2} />
      </Row>
      <Spacer />
      <div className="header">Your Approach</div>
      <div className="subheader">What Strategy is Best for You</div>
      <Spacer />
      <Row className="mx-auto">
        <Col md={4} className="p-0">
          What does a healthy relationship with technology look like for you?
        </Col>
        <Col md={8}>
          <textarea
            value={healthy}
            onChange={(e) => {
              setHealthy(e.target.value);
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
      </Row>
      <Spacer />
      <div className="text-center">
        1. How do you want to change your current patterns of usage (restrict or
        reduce)?
      </div>
      <Row className="mx-auto justify-content-center">
        <div
          className={`${styles.select_container} mx-4 ${
            usageChange === "clear" ? styles.selected : ""
          }`}
          onClick={() => {
            setUsageChange("clear");
          }}
        >
          <span className={styles.select_header}>
            Setting clear
            <br />
            restrictions
          </span>
          <br />
          (Going cold turkey)
        </div>
        <div
          className={`${styles.select_container} mx-4 ${
            usageChange === "gradual" ? styles.selected : ""
          }`}
          onClick={() => {
            setUsageChange("gradual");
          }}
        >
          <span className={styles.select_header}>
            Gradual reduction or
            <br />
            progress over time
          </span>
          <br />
          (Enjoy small daily wins)
        </div>
      </Row>
      <Spacer />
      <div className="text-center">
        2. What are you tethered to? (Circle answer)
      </div>
      <Row className="mx-auto justify-content-center">
        <div
          className={`${styles.select_container} mx-4 ${
            tethered === "device" ? styles.selected : ""
          }`}
          onClick={() => {
            setTethered("device");
          }}
        >
          <span className={styles.select_header}>Device</span>
          <br />
          (eg. Phone)
        </div>
        <div
          className={`${styles.select_container} mx-4 ${
            tethered === "platforms" ? styles.selected : ""
          }`}
          onClick={() => {
            setTethered("platforms");
          }}
        >
          <span className={styles.select_header}>Specific Platforms</span>
          <br />
          (List top 3 to the side)
        </div>
      </Row>
      <Spacer />
      <div className="text-center">
        3. In terms of following the news, would you rather:
      </div>
      <Row className="mx-auto justify-content-center">
        <div
          className={`${styles.select_container} mx-4 ${
            news === "summary" ? styles.selected : ""
          }`}
          onClick={() => {
            setNews("summary");
          }}
        >
          <span className={styles.select_header}>
            Have a summary
            <br />
            with clear updates
          </span>
        </div>
        <div
          className={`${styles.select_container} mx-4 ${
            news === "continue" ? styles.selected : ""
          }`}
          onClick={() => {
            setNews("continue");
          }}
        >
          <span className={styles.select_header}>
            Continue usual
            <br />
            reading patterns
          </span>
        </div>
      </Row>
      <Spacer />
      <Row className="mx-auto justify-content-center">
        <Button onClick={saveResponses} text="save" type="link" />
        <span>
          {saved === -1 ? "Saving..." : saved === 1 ? "Saved :)" : ""}
        </span>
      </Row>
    </div>
  );
};

export default Assessment;
