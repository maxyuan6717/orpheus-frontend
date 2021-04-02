import styles from "./about.module.css";
import Spacer from "./spacer";
import { Row } from "react-bootstrap";
import BackBtn from "./backbtn";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>About</div>
        <div className={styles.body}>
          <div>
            The Orpheus Pledge was developed by Niels Rosenquist and Michelle
            Fang. Niels is a physician-economist at Massachusetts General
            Hospital and Harvard Medical School. Michelle is a junior at Yale
            University studying Ethics, Politics & Economics.
          </div>
          <Spacer />
          <div>
            The logo and certain aspects of the design were created by Kaixi
            Yang, a product designer and recent graduate of Stanford University.
          </div>
          <Spacer />
          <div>
            The Pledge documents are designed to be read and written on paper,
            offline. While some material is copyrighted, it is free for private
            use by individuals but not for resale. The website does not collect
            any information from readers or participants.
          </div>
          <Spacer />
          <div>
            The material is based on a wealth of research, clinical experience,
            and philosophy. A number of individuals, books, and films have
            inspired us. For people interested in these origins, you can
            download a partial list of them here.
          </div>
        </div>
        <Row className={`mx-auto justify-content-center ${styles.btn_row}`}>
          <a href="https://google.com" className={styles.btn}>
            <div className="m-auto">Resources</div>
          </a>
        </Row>
        <Row className={`mx-auto justify-content-center`}>
          <BackBtn />
        </Row>
      </div>
    </div>
  );
};

export default About;
