import { useState } from "react";
import styles from "./survey.module.css";
import Button from "../components/button";
import { StyledInput } from "../common/styledcomponents";

const Survey = () => {
  const [screentime, setScreentime] = useState();
  const [pickups, setPickups] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="header mb-5">How do you consume technology?</div>
        <div className="mb-3">
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
            }}
          />
        </div>
        <div className="mb-3">
          <div className="subheader italic">
            Do you feel controlled by your device? Get the tools to build a
            healthy relationship with your screen.
          </div>
        </div>
        <div className="d-flex justify-content-left">
          <Button
            type="link"
            height="4rem"
            width="18rem"
            text="Take the Pledge"
          />
        </div>
      </div>
    </div>
  );
};

export default Survey;
