import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../util/api";
import styles from "./welcome.module.css";
const Welcome = () => {
  const { id } = useParams();
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
        <div>Hello {info.email}</div>
        <div>Welcome to day {info.day}</div>
      </div>
    </div>
  );
};

export default Welcome;
