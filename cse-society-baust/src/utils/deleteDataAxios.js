"use server";

import axios from "@/api/axios";

const { cookies } = require("next/headers");

/**
 * This function sends a DELETE request to a specified API endpoint with an ID parameter.
 * It uses the provided cookie for authentication.
 *
 * @param {string} url - The API endpoint URL without the ID parameter.
 * @param {string} id - The ID of the resource to be deleted.
 * @returns {Promise<{status: number, message: string}>} - A promise that resolves to an object containing the HTTP status code and message.
 * @throws Will throw an error if the request fails.
 */
export default async function deleteDataAxios(url, id) {
  // Get the access token cookie
  const cookie = cookies().get("accessToken");

  // Configure the request
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `http://127.0.0.1:5000/api/${url}?_id=${id}`,
    headers: {
      Cookie: `${cookie.name}=${cookie.value}`,
    },
  };

  try {
    // Send the request
    const response = await axios.request(config);

    // Return the status and message
    return {
      status: response.status.toString(),
      message: response.data.message,
    };
  } catch (error) {
    // Log the error and return a default status and message
    console.log(error, { time: new Date() });

    return {
      status: "400",
      message: error.message,
    };
  }
}
