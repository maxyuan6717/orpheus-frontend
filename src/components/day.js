import styles from "./day.module.css";
import { program } from "../util/ProgramText";
import Spacer from "./spacer";

const Day = ({ info, day_no }) => {
  return (
    <div>
      <div className="header">Day {day_no}</div>
      <Spacer />
      <div className="text1 bold">
        Daily story: {program[day_no - 1].story_title}
      </div>
      <Spacer />
      <div>{program[day_no - 1].story_body}</div>
    </div>
  );
};

export default Day;
