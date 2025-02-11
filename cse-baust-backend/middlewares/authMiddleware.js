const jwt = require("jsonwebtoken");
const { responseReturn } = require("../utils/response");
/**
 * Middleware function to authenticate user requests.
 * It verifies the JWT token in the request cookies and sets the user's role and id in the request object.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function in the stack
 *
 * @returns {void}
 */
module.exports.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;

  // Check if access token is present in the request cookies
  if (!accessToken) {
    // If access token is not present, return a 400 status with a message
    responseReturn(res, 400, { message: "Please login first" });
  } else {
    try {
      // Verify the JWT token using the secret key
      const deCodeToken = jwt.verify(accessToken, process.env.JWT_SECRET);

      // Set the user's role and id in the request object
      req.role = deCodeToken.role;
      req.id = deCodeToken.id;

      // Log the middleware call with the current date and decoded token
      console.log(`Middleware Called at ${new Date().toDateString()}`);
      console.log(deCodeToken);

      // Call the next middleware function in the stack
      next();
    } catch (error) {
      // If the JWT token is invalid or expired, return a 400 status with a message
      responseReturn(res, 400, {
        message: `Token Expires. Please Login Again`,
      });
    }
  }

  // Note: The commented lines are not part of the documented code block
  // const token = res.cookie("name","value");
  // responseReturn(res, 200),token;
};
