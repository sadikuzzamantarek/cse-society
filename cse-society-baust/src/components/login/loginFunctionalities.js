"use server";
import axios from "axios";
export const loginUser = async (FormData) => {
  const username = FormData.get("username");
  const password = FormData.get("password");
  const setData = (data) => {};

  const options = {
    method: "POST",
    url: "http://127.0.0.1:5000/api/admin-login",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: { username: username, password: password },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.token);
    })
    .catch(function (error) {
      console.error(error);
    });
};
