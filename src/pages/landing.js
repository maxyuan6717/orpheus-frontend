import styles from "./landing.module.css";

import Home from "../components/home";
import Addicted from "../components/addicted";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Home />
        <Addicted />
      </div>
    </div>
  );
};

export default Landing;
