const exclusiveMemberModel = require("../models/exclusiveMemberModel");
const { responseReturn } = require("../utils/response");
const cloudinary = require("cloudinary").v2;
class exclusiveMembersController {
  createExclusiveMember = async (req, res) => {
    const { name, email, designition, phone, department, position, photo } =
      req.body;
    try {
      const exclusiveMember = await exclusiveMemberModel.findOne({
        email: email,
      });
      if (exclusiveMember) {
        responseReturn(res, 400, { message: "Exclusive Member Already Exist" });
      } else {
        try {
          // const file = photo;
          const file = req.files.photo;
          cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
            if (result) {
              try {
                const exclusiveMember = await exclusiveMemberModel.create({
                  name: name,
                  email: email,
                  designition: designition,
                  phone: phone,
                  department: department,
                  position: position,
                  image: result.secure_url,
                });
                responseReturn(res, 200, {
                  message: "Memeber Added Sucessfully",
                  exclusiveMember,
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

  getAllExclusiveMember = async (req, res) => {
    try {
      const members = await exclusiveMemberModel.find();
      responseReturn(res, 200, members);
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  getSingleExclusivedMember = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const member = await exclusiveMemberModel.findById(memberQuery);
      if (member) {
        responseReturn(res, 200, member);
      } else {
        responseReturn(res, 405, { error: "Exclusive Member Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  updateSingleExlclusiveMember = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const exclusiveMember = await exclusiveMemberModel.findById(memberQuery);
      if (exclusiveMember) {
        const file = req?.files?.photo;
        if (file) {
          const { name, email, designition, phone, department, position } =
            req.body;
          try {
            cloudinary.uploader.upload(
              file.tempFilePath,
              async (err, result) => {
                if (result) {
                  try {
                    const exclusiveMember =
                      await exclusiveMemberModel.findByIdAndUpdate(
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
                      message: "Member Updated Successfully",
                      exclusiveMember,
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
            const exclusiveMember =
              await exclusiveMemberModel.findByIdAndUpdate(
                memberQuery,
                req.body,
                {
                  new: true,
                  runValidators: true,
                  useFindAndModify: false,
                }
              );
            responseReturn(res, 200, {
              message: "Member Updated Successfully",
              exclusiveMember,
            });
          } catch (error) {
            responseReturn(res, 500, { message: error.message });
          }
        }
      } else {
        responseReturn(res, 400, { error: "exclusiveMember Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };

  deleteExclusiveMember = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const boardMember = await exclusiveMemberModel.findById(memberQuery);
      if (boardMember) {
        await exclusiveMemberModel.findByIdAndDelete(boardMember);
        responseReturn(res, 200, {
          message: "ExclusiveMember Deleted Successfully",
        });
      } else {
        responseReturn(res, 400, { message: "ExclusiveMember Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}
module.exports = new exclusiveMembersController();
