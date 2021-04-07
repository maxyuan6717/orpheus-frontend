import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../util/api";
import styles from "./dashboard.module.css";
import { Row } from "react-bootstrap";
import { ResponsiveLine } from "@nivo/line";

const Dashboard = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [screentime, setScreentime] = useState(new Array(21).fill(0));
  useEffect(() => {
    const fetchUser = async () => {
      let userInfo = await getUser(id);
      if (userInfo.data && userInfo.data.fetchedUser)
        setInfo(userInfo.data.fetchedUser);
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    if (Object.keys(info).length === 0) return;
    const res = info.responses;
    let temp = [...screentime];
    for (let i = 1; i <= 21; i++) {
      temp[i - 1] = res[i].hours ? parseInt(res[i].hours) : 0;
    }
    setScreentime(temp);
  }, [info, screentime]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="header">Hello {info.email}</div>
        <div className="subheader">
          <Row className="mx-auto">
            <span className="my-auto">Welcome to day {info.day}/21</span>
            <span className="mx-3 my-auto">|</span>
            <Link
              className={styles.entry_link + " my-auto"}
              to={`/${id}/${info.day}`}
            >
              Fill out today's entry →
            </Link>
          </Row>
        </div>
        <div className={styles.graph_container}>
          <ResponsiveLine
            data={[
              {
                id: "screentime",
                color: "red",
                data: screentime.map((hr, index) => {
                  return { x: index + 1, y: hr };
                }),
              },
            ]}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Day",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Hours",
              legendOffset: -40,
              legendPosition: "middle",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
