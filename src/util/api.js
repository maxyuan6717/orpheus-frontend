import axios from "axios";
import { Base } from "./base";

const addUser = async (email) => {
  let user = await axios.post(`${Base}/user/add`, { email: email });
  return user;
};

const getUser = async (id) => {
  let user = await axios.post(`${Base}/user/get`, { userId: id });
  return user;
};

const saveUser = async (id, responses) => {
  let saved = await axios.post(`${Base}/user/save`, {
    userId: id,
    responses: responses,
  });
  return saved;
};

export { addUser, getUser, saveUser };
