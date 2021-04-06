import styles from "./day.module.css";
import { useParams } from "react-router-dom";
import Assessment from "../components/assessment";

const Day = () => {
  const { day } = useParams();
  console.log(day);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {day === "0" ? <Assessment /> : <div>Day {day}</div>}
      </div>
    </div>
  );
};

export default Day;
