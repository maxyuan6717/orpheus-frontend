import styles from "./story.module.css";
import Spacer from "./spacer";
import { Row } from "react-bootstrap";
import BackBtn from "./backbtn";

const Story = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>Our Story</div>
        <div className={styles.body}>
          <div>
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
            engulfed and lost foreve
          </div>
          <Spacer />
        </div>
        <Row className={`mx-auto justify-content-center`}>
          <BackBtn />
        </Row>
      </div>
    </div>
  );
};

export default Story;
