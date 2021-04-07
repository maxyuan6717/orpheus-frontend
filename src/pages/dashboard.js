import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../util/api";
import styles from "./dashboard.module.css";
import { Row } from "react-bootstrap";

const Dashboard = () => {
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
        <div className="header">Hello {info.email}</div>
        <div className="subheader">
          <Row className="mx-auto">
            <span className="my-auto">Welcome to day {info.day}</span>
            <span className="mx-3 my-auto">|</span>
            <Link
              className={styles.entry_link + " my-auto"}
              to={`/${id}/${info.day}`}
            >
              Fill out today's entry →
            </Link>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
