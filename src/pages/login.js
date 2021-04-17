import { useState } from "react";
import styles from "./login.module.css";
import Button from "../components/button";
import { loginUser } from "../util/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = async () => {
    if (email.length === 0 || password.length === 0) {
      setErr("Please fill in all fields");
      setTimeout(() => {
        setErr("");
      }, 2000);
    } else {
      let res = await loginUser(email, password);
      console.log(res);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="header">Login</div>
        <div>
          <div className="subheader">Email</div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="subheader">Password</div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button
          type="link"
          height="3rem"
          text="Create"
          onClick={handleSubmit}
        />
        <div>{err.length > 0 && err}</div>
      </div>
    </div>
  );
};

export default Login;
