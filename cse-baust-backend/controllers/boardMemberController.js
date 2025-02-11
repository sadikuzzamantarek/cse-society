//This Controller will be used as advisor controller
const boardMemberModel = require("../models/boardModel");
const { responseReturn } = require("../utils/response");
const cloudinary = require("cloudinary").v2;
class boardMemberController {
  //create new board member
  createBoardMember = async (req, res) => {
    const { name, email, designition, phone, department, position } = req.body;
    try {
      const advisor = await boardMemberModel.findOne({ email: email });
      if (advisor) {
        responseReturn(res, 400, { message: "Advisor Already Exist" });
      } else {
        try {
          const file = req.files.photo;
          cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
            if (result) {
              try {
                const advisor = await boardMemberModel.create({
                  name: name,
                  email: email,
                  designition: designition,
                  phone: phone,
                  department: department,
                  position: position,
                  image: result.secure_url,
                });
                responseReturn(res, 200, {
                  message: "Mentor Added Sucessfull",
                  advisor,
                });
              } catch (error) {
                responseReturn(res, 500, { message: error.message });
              }
            } else {
              responseReturn(res, 500, { message: err.message });
            }
          });
        } catch (error) {
          responseReturn(res, 500, { message: error.message });
        }
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  //get all members
  getAllBoardMember = async (req, res) => {
    try {
      const members = await boardMemberModel.find();
      responseReturn(res, 200, members);
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  //get single member
  getSingleBoardMember = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const member = await boardMemberModel.findById(memberQuery);
      if (member) {
        responseReturn(res, 200, member);
      } else {
        responseReturn(res, 405, { error: "Advisor Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  //update Single board Member
  updateBoardMember = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const advisor = await boardMemberModel.findById(memberQuery);
      console.log(advisor);
      if (advisor) {
        const file = req?.files?.photo;
        if (file) {
          const { name, email, designition, phone, department, position } =
            req.body;
          try {
            // if (advisor.email === email) {
            //   responseReturn(res, 400, {
            //     message: "Advisor Mail Already Exist",
            //   });
            // }
            cloudinary.uploader.upload(
              file.tempFilePath,
              async (err, result) => {
                if (result) {
                  try {
                    const advisor = await boardMemberModel.findByIdAndUpdate(
                      memberQuery,
                      {
                        name: name,
                        email: email,
                        designition: designition,
                        phone: phone,
                        department: department,
                        position: position,
                        image: result.secure_url,
                      },
                      {
                        new: true,
                        runValidators: true,
                        useFindAndModify: false,
                      }
                    );
                    responseReturn(res, 200, {
                      message: "Advisor Updated",
                      advisor,
                    });
                  } catch (error) {
                    responseReturn(res, 500, { message: error.message });
                  }
                } else {
                  responseReturn(res, 500, { message: "Image Not Uploaded" });
                }
              }
            );
          } catch (error) {
            responseReturn(res, 500, { message: error.message });
          }
        } else {
          try {
            const findAdvisor = await boardMemberModel.findOne({
              email: req.body.email,
            });
            // if (findAdvisor) {
            //   responseReturn(res, 400, {
            //     message: "Advisor Mail Already Exist",
            //   });
            // } else {
            const advisor = await boardMemberModel.findByIdAndUpdate(
              memberQuery,
              req.body,
              {
                new: true,
                runValidators: true,
                useFindAndModify: false,
              }
            );
            responseReturn(res, 200, { message: "Advisor Updated", advisor });
            // }
          } catch (error) {
            responseReturn(res, 500, { message: error.message });
          }
        }
      } else {
        responseReturn(res, 400, { message: "Advisor Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  //delete board member
  deleteBoardMember = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const boardMember = await boardMemberModel.findById(memberQuery);
      if (boardMember) {
        await boardMemberModel.findByIdAndDelete(boardMember);
        responseReturn(res, 200, { message: "Advisor Deleted Successfully" });
      } else {
        responseReturn(res, 400, { message: "Advisor Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}
module.exports = new boardMemberController();
