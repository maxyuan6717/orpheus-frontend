import styles from "./button.module.css";

const Button = ({ otherProps, text }) => {
  return (
    <div className={styles.container} {...otherProps}>
      <div className="m-auto">{text}</div>
    </div>
  );
};

export default Button;
