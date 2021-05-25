import styles from "./quiz.module.css";
import quiz_text from "../assets/quiz_text.png";
import Button from "./button";
import ReactGA from "react-ga";

const Quiz = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <img src={quiz_text} width="100%" />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Button
            type="router"
            onClick={() => {
              ReactGA.event({
                category: "Landing",
                action: "Goto Survey",
              });
            }}
            to="/survey"
            text="Take the Quiz"
            height="6rem"
            width="20rem"
            fontSize="1.6em"
            borderRadius="5rem"
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
