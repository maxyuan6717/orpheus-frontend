import axios from "axios";
import { Base } from "./base";

const addUser = async (email) => {
  let user = await axios.post(`${Base}/user/add`, { email: email });
  return user;
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

export { addUser, registerUser };
