import { useEffect } from "react";
import FAQ from "../components/faq";
import ThankYou from "../components/thankyou";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FAQ />
      <ThankYou />
    </>
  );
};

export default FAQPage;
