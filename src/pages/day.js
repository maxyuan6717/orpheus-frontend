import { useEffect, useState } from "react";
import styles from "./day.module.css";
import { useParams } from "react-router-dom";
import Assessment from "../components/assessment";
import Day from "../components/day";
import { getUser } from "../util/api";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Spacer from "../components/spacer";

const DayPage = () => {
  let { id, day_no } = useParams();
  day_no = parseInt(day_no);
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
          <>
            <Row className="mx-auto">
              <Link className="my-auto mr-2" to={`/${id}/${day_no - 1}`}>
                <FaChevronLeft size={25} className={styles.arrow} />
              </Link>
              <span className="header">Day {day_no}</span>
              <Link className="my-auto ml-2" to={`/${id}/${day_no + 1}`}>
                <FaChevronRight size={25} className={styles.arrow} />
              </Link>
            </Row>
            <Spacer />
            {day_no === 0 ? (
              <Assessment info={info} />
            ) : (
              <Day info={info} day_no={day_no} />
            )}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default DayPage;
