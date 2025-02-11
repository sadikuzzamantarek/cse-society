"use server";
import axios from "@/api/axios";
const { cookies } = require("next/headers");
export default async function updateDataAxios(formData, url, id) {
  // Get the access token cookie
  const cookie = cookies().get("accessToken");

  // Configure the request
  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `http://127.0.0.1:5000/api/${url}?_id=${id}`,
    headers: {
      "Content-Type": "multipart/form-data",
      Cookie: `${cookie.name}=${cookie.value}`,
    },
    withCredentials: "true",
    data: formData,
  };

  try {
    // Send the request
    const response = await axios.request(config);

    // Return the status and message
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (err) {
    // Log the error and return a default status and message
    console.log("FromHere");
    console.log(err, { time: new Date() });

    return {
      status: err.response.status || 500,
      message:
        typeof err.response.data.message === "string"
          ? err.response.data.message
          : "Internal Server Error. Try Reloading The Page",
    };
  }
}
