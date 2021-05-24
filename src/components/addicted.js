import styles from "./addicted.module.css";
import { Row } from "react-bootstrap";
const Addicted = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row className="mx-auto">
          <div className={styles.header}>Are you addicted to social media?</div>
        </Row>
        <Row className="mx-auto">
          <ul className={styles.list}>
            <li>
              <p>
                <em>Yes?</em> Let's learn more about your relationship with
                technology.
              </p>
            </li>
            <li>
              <p>
                <em>Maybe?</em> We often find ourselves here. Try the assessment
                and see if you need this.
              </p>
            </li>
            <li>
              <p>
                <em>No?</em> Great. You may be interested in the rest of the
                material and are welcome to check it out. If you ever think
                differently you can come back.
              </p>
            </li>
          </ul>
        </Row>
      </div>
    </div>
  );
};

export default Addicted;
