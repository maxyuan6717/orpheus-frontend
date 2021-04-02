import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ text, type, ...otherProps }) => {
  console.log(otherProps);
  return type === "link" ? (
    <a className={styles.container} {...otherProps}>
      <div className="m-auto">{text}</div>
    </a>
  ) : (
    <Link className={styles.container} {...otherProps}>
      <div className="m-auto">{text}</div>
    </Link>
  );
};

export default Button;
