import { useState } from "react";
import { Row } from "react-bootstrap";
import styles from "./home.module.css";
import Logo from "../assets/logo.png";
import Button from "./button";
import Input from "./input";
import Spacer from "./spacer";
import { addUser } from "../util/api";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (!email.includes("@")) {
      setMessage("Please enter a valid email");
      setError(true);
      return;
    } else {
      const user = await addUser(email);
      setMessage(user.data.message);
      setError(user.data.error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row className={`mx-auto justify-content-center ${styles.header}`}>
          <span style={{ textAlign: "center" }}>
            are you tethered to your device?
          </span>
        </Row>
        <Row className={`mx-auto justify-content-center ${styles.header}`}>
          <span style={{ textAlign: "center" }}>
            welcome to 21 days disconnected
          </span>
        </Row>
        <img
          src={Logo}
          alt="Orpheus Logo"
          width="100%"
          className={styles.logo}
        />
        <Row className={`${styles.divider_container} mx-auto`}>
          <div className={styles.divider} />
        </Row>
        <div className={styles.text}>
          <div style={{ fontWeight: 400 }}>
            The Orpheus Pledge is a 21 day program designed to give you the
            experience of being untethered to technology - particularly
            feed-based social media.
          </div>
          <Spacer />
          <div>
            We aim to provide you 'couples counseling' with social media so you
            can successfully decouple and redefine what you want to do with your
            limited time and attention.
          </div>
          <Spacer />
          <div>
            Our name is based on based on the Greek tragedy of Orpheus and
            Eurydice. Orpheus, grieving the death of his wife, Eurydice, visited
            the underworld and pleaded to Hades to bring her back. Hades agreed
            - Eurydice would follow Orpheus - on the rule that if Orpheus were
            to look back on his way out of the underworld, he would lose her.
            Just as Orpheus was heading back to earth, out of anxiety that
            Eurydice wasn't there, Orpheus looked back - and saw Eurydice
            engulfed and lost forever.
          </div>
          <Spacer />
          <div>
            Our hope is that once you are freed of the distraction of
            technology, can live in more present, meaningful, and happy ways.
          </div>
          <Spacer />
          <div>
            This is a completely free program complete with thought-provoking
            readings and prompts - downloadable as a PDF worksheet to revisit
            during the 21 day Pledge.
          </div>
        </div>
        <Row className="mx-auto justify-content-center">
          {/* <Button
            text="Print PDF"
            type="link"
            href="https://drive.google.com/file/d/1yWb8L8Kdaw65xLjSKMBV39XzdJF7SR-d/view?usp=sharing"
          /> */}
          <div className="mx-2 mb-2">
            <Input
              value={email}
              onChange={(e) => {
                if (e.target.value && e.target.value.length > 0) {
                  setMessage("");
                }
                setEmail(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="mx-2 mb-2">
            <Button
              type="link"
              onClick={handleSubmit}
              text="Sign me up!"
              height="3.25rem"
            />
          </div>
        </Row>
        <Row className="mx-auto justify-content-center">
          <div
            className={styles.message}
            style={{ color: error ? "#f75c5c" : "#67f07c" }}
          >
            {message}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Home;
