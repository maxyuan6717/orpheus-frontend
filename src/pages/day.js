import styles from "./day.module.css";
import { useParams } from "react-router-dom";

const Day = () => {
  const { day } = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.content}>Day {day}</div>
    </div>
  );
};

export default Day;
