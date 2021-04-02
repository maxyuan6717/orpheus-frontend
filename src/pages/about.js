import { useEffect } from "react";
import About from "../components/about";
import ThankYou from "../components/thankyou";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <About />
      <ThankYou />
    </>
  );
};

export default AboutPage;
