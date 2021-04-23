import styles from "./input.module.css";

const Input = ({
  borderColor = "black",
  textColor = "black",
  ...otherProps
}) => {
  return (
    <input
      style={{ border: `2px solid ${borderColor}`, color: textColor }}
      className={styles.container}
      {...otherProps}
    />
  );
};

export default Input;
