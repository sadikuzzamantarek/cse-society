"use server";
import axios from "@/api/axios";

export const getDataByAdmin = async (url) => {
  //   const options = {
  //     method: "GET",
  //     url: `http://127.0.0.1:5000/api/get-members/${url}`,
  //   };
  //   await axios
  //     .request(options)
  //     .then(function (response) {
  //       return response;
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  const response = await axios.get(`http://127.0.0.1:5000/api/${url}`);

  return response.data;
};
