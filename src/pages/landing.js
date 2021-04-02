import styles from "./landing.module.css";

import Home from "../components/home";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Home />
      </div>
    </div>
  );
};

export default Landing;
