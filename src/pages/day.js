import { useEffect, useState } from "react";
import styles from "./day.module.css";
import { useParams } from "react-router-dom";
import Assessment from "../components/assessment";
import Day from "../components/day";
import { getUser } from "../util/api";

const DayPage = () => {
  const { id, day_no } = useParams();
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
        {Object.keys(info).length > 0 ? (
          day_no === "0" ? (
            <Assessment info={info} />
          ) : (
            <Day info={info} day_no={day_no} />
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default DayPage;
