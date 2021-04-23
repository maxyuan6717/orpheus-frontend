import axios from "axios";
import { Base } from "./base";

const addBeta = async (email) => {
  let beta = await axios.post(`${Base}/beta/add`, { email });
  return beta;
};

const registerUser = async (email, name, password1, password2) => {
  let user = await axios.post(`${Base}/user/register`, {
    email,
    name,
    password1,
    password2,
  });
  return user;
};

export { addBeta, registerUser };
