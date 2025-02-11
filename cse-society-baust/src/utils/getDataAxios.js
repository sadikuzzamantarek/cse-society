'use server'
import axios from "@/api/axios";

/**
 * This function is used to make a GET request to a specified API endpoint using axios.
 *
 * @param {string} url - The API endpoint to make the request to.
 * @returns {Promise<any>} - A promise that resolves to the response data.
 * @throws {Error} - If the request fails or encounters an error.
 *
 * @example
 * // Example usage:
 * const data = await getDataAxios('users');
 * console.log(data); // Output: Array of user objects
 */
export default async function getDataAxios(url) {
  const response = await axios.get(`http://localhost:5000/api/${url}`);
  return response.data;
}
