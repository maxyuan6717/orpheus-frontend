import { useEffect, useState } from "react";
import styles from "./day.module.css";
import { useParams } from "react-router-dom";
import Assessment from "../components/assessment";
import { getUser } from "../util/api";

const Day = () => {
  const { id, day } = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      let userInfo = await getUser(id);
      if (userInfo.data && userInfo.data.fetchedUser)
        setInfo(userInfo.data.fetchedUser);
    };
    fetchUser();
  }, [id]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {day === "0" && Object.keys(info).length > 0 ? (
          <Assessment info={info} />
        ) : (
          <div>Day {day}</div>
        )}
      </div>
    </div>
  );
};

export default Day;
