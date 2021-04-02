import styles from "./landing.module.css";

import Home from "../components/home";
import Addicted from "../components/addicted";
import About from "../components/about";
import ThankYou from "../components/thankyou";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Home />
        <Addicted />
        <About />
        <ThankYou />
      </div>
    </div>
  );
};

export default Landing;
