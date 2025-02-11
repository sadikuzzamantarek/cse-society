/**
 * A function to return a JSON response with a given status code and data.
 *
 * @param {Object} res - The response object from the Express server.
 * @param {number} code - The HTTP status code for the response.
 * @param {Object} data - The data to be sent in the JSON response.
 * @returns {Object} - The response object with the status code and JSON data.
 */
module.exports.responseReturn = (res, code, data) => {
  return res.status(code).json(data);
};
