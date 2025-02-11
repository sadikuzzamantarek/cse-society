"use server";
import axios from "axios";
import { cookies } from "next/headers";
/**
 * This function is used to submit form data to a specified API endpoint.
 * It uses the axios library to make the HTTP POST request.
 *
 * @param {FormData} FormData - The form data to be sent to the API.
 * @param {string} url - The API endpoint to which the form data will be sent.
 * @returns {Promise<{status: number, message: string}>} - A promise that resolves to an object containing the HTTP status code and message from the API response.
 * @throws {Error} - If an error occurs during the API request, it will be thrown.
 */
export async function FormSubmission(FormData, url) {
  "use server";

  console.log(FormData)
  // Get the access token cookie
  const cookie = cookies().get("accessToken");

  // Set up the axios request options
  const option = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `http://localhost:5000/api/${url}`,
    headers: {
      "Content-Type": "multipart/form-data",
      Cookie: `${cookie.name}=${cookie.value}`,
    },
    withCredentials: "true",
    data: FormData,
  };

  try {
    // Make the API request
    const response = await axios.request(option);

    // Return the status and message from the API response
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (err) {
    // Handle and return the error message from the API response
    return {
      status: err.response.status || 500,
      message:
        typeof err.response.data.message === "string"
          ? err.response.data.message
          : "Internal Server Error. Try Reloading The Page",
    };
  }
}
