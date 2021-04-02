import styles from "./backbtn.module.css";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <Link to="/">
      <div className={`${styles.container} d-flex`}>
        <IoArrowBack
          className="m-auto"
          size={35}
          style={{ display: "block" }}
        />
      </div>
    </Link>
  );
};

export default BackBtn;
