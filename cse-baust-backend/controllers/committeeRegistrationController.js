const cloudinary = require("cloudinary").v2;

const committeeRegistrationModel = require("../models/committeeRegistrationModel");
const { responseReturn } = require("../utils/response");
class committeeRegistrationController {
  //handle committeeRegistration
  /**
   * Handles committee registration.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {string} req.body.name - Name of the committee member.
   * @param {string} req.body.email - Email of the committee member.
   * @param {string} req.body.universityID - University ID of the committee member.
   * @param {File} req.body.photo - Photo of the committee member.
   * @param {string} req.body.phone - Phone number of the committee member.
   * @param {string} req.body.fieldOfInterest - Field of interest of the committee member.
   * @param {string} req.body.department - Department of the committee member.
   * @param {string} req.body.batch - Batch of the committee member.
   * @param {string} req.body.level - Level of the committee member.
   * @param {string} req.body.term - Term of the committee member.
   * @returns {Object} - Response object with status code and message.
   */
  handleCommitteeRegistration = async (req, res) => {
    const {
      name,
      email,
      universityID,
      // photo,
      phone,
      fieldOfInterest,
      department,
      batch,
      level,
      term,
    } = req.body;
    try {
      const registered = await committeeRegistrationModel.findOne({
        email: email,
      });
      if (registered) {
        responseReturn(res, 400, {
          message: "Already Registered With The Email",
        });
      } else {
        try {
          const id = await committeeRegistrationModel.findOne({
            universityID: universityID,
          });
          if (id) {
            responseReturn(res, 400, {
              message: "Already Registered With The ID",
            });
          } else {
            try {
              const file = req.files.photo;
              cloudinary.uploader.upload(
                file.tempFilePath,
                async (err, result) => {
                  if (result) {
                    try {
                      const committeeRegistration =
                        await committeeRegistrationModel.create({
                          name: name,
                          email: email,
                          universityID: universityID,
                          image: result.secure_url,
                          phone: phone,
                          fieldOfInterest: fieldOfInterest,
                          department: department,
                          batch: batch,
                          level: level,
                          term: term,
                        });
                      responseReturn(res, 200, {
                        message: "Registration Successfull.",
                        committeeRegistration,
                      });
                    } catch (error) {
                      responseReturn(res, 500, { message: error.message });
                    }
                  } else {
                    responseReturn(res, 500, {
                      message: err.message + "From Here",
                    });
                  }
                }
              );
            } catch (error) {
              responseReturn(res, 500, {
                message: error.message + new Date().toTimeString(),
              });
            }
          }
        } catch (error) {
          responseReturn(res, 500, { message: error.message });
        }
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  /**
   * Retrieves all registered committee members.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Object} - Response object with status code and array of committee members.
   */
  getAllCommitteeRegistration = async (req, res) => {
    try {
      const members = await committeeRegistrationModel.find();
      if (members) {
        responseReturn(res, 200, members);
      } else {
        responseReturn(res, 404, { message: "No Members Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  /**
   * Retrieves a single registered committee member based on the provided ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {string} req.query._id - ID of the committee member to retrieve.
   * @returns {Object} - Response object with status code and the committee member object if found.
   * @throws Will throw an error if the member is not found or if there is a server error.
   */
  getSingleCommitteeRegistration = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const member = await committeeRegistrationModel.findById(memberQuery);
      if (member) {
        responseReturn(res, 200, member);
      } else {
        responseReturn(res, 404, { message: "Member Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  deleteARegisterCommittee = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const member = await committeeRegistrationModel.findById(memberQuery);
      if (member) {
        await committeeRegistrationModel.findByIdAndDelete(member);
        responseReturn(res, 200, {
          message: `Registration of ${member.name} Deleted Successfully`,
        });
      } else {
        responseReturn(res, 400, { message: "Member Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}
module.exports = new committeeRegistrationController();
