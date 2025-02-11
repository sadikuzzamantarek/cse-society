const adminModel = require("../models/adminModels");
const { responseReturn } = require("../utils/response");
const { createToken } = require("../utils/createToken");

const bcrypt = require("bcrypt");
class authController {
  admin_login = async (req, res) => {
    const { username, password } = req.body;
    try {
      const admin = await adminModel.findOne({ username }).select("+password");
      if (admin) {
        // responseReturn(res, 200, { data: admin });
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 27 * 60 * 60 * 1000),
            httpOnly: true,
          });
          responseReturn(res, 200, { token, message: "Login successful" });
        } else {
          responseReturn(res, 404, { error: "Password not matched" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  getUser = async (req, res) => {
    // console.log(req);
    responseReturn(res, 200, { message: "Got the req from fontend" });
  };
}
module.exports = new authController();
