import styles from "./thankyou.module.css";
import { Row } from "react-bootstrap";
import { HiMail } from "react-icons/hi";

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>Thank you</div>
        <div className={styles.body}>
          Get off the grid! Redirect your bandwidth to more productive
          activities. If you have any feedback, email us!
        </div>
        <Row className={`mx-auto justify-content-center ${styles.btn_row}`}>
          <a href="mailto: orpheuspledge@gmail.com">
            <div className={`${styles.btn_container} d-flex`}>
              <HiMail
                className="m-auto"
                size={35}
                style={{ display: "block" }}
              />
            </div>
          </a>
        </Row>
        <div className={styles.copyright}>
          © Orpheus Pledge. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
