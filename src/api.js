import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:9090/api" //to run locally, ensure the corresponding BE project is also being run
});

export const postRegistrationHandler = ({
  firstName,
  lastName,
  emailAddress,
  password,
}) => {
  const dataToSend = {
    firstName,lastName, emailAddress,password
  };
  return api.post(`/user/register`, dataToSend).then((res) => {
    return res;
  });
};

export const postLoginHandler = (dataToSend) => {
    return api.post(`/user/login`, dataToSend).then((res) => {
        console.log(res)
      return res;
    });
  };