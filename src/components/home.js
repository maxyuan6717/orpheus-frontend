import { Row } from "react-bootstrap";
import styles from "./home.module.css";
import Logo from "../assets/logo.png";
import Button from "./button";
import Spacer from "./spacer";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row className={`mx-auto justify-content-center ${styles.header}`}>
          <span>are you tethered to your device?</span>
        </Row>
        <Row className={`mx-auto justify-content-center ${styles.header}`}>
          <span>welcome to 21 days disconnected</span>
        </Row>
        <img src={Logo} width="100%" className={styles.logo} />
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
          <Button text="Print PDF" type="link" href="https://google.com" />
        </Row>
      </div>
    </div>
  );
};

export default Home;
