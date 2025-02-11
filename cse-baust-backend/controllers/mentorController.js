const mentorModels = require("../models/mentorModels");
const { responseReturn } = require("../utils/response");
const cloudinary = require("cloudinary").v2;

class mentorController {
  //create new mentor

  createMentor = async (req, res) => {
    const {
      name,
      email,
      skills,
      phone,
      presentPosition,
      formerPosition,
      batch,
    } = req.body;
    try {
      const mentor = await mentorModels.findOne({ email: email });
      if (mentor) {
        responseReturn(res, 400, { message: "Mentor Already Exist" });
      } else {
        try {
          let file = req.files.photo;

          cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
            if (result) {
              try {
                const mentor = await mentorModels.create({
                  name: name,
                  email: email,
                  phone: phone,
                  skills: skills,
                  presentPosition: presentPosition,
                  formerPosition: formerPosition,
                  batch: batch,
                  image: result.secure_url,
                });
                responseReturn(res, 200, {
                  message: "Mentor Added Sucessfull",
                  mentor,
                });
              } catch (error) {
                responseReturn(res, 500, { message: error.message });
              }
            } else {
              responseReturn(res, 500, { message: err });
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
  //get existing mentors
  getMentors = async (req, res) => {
    try {
      const members = await mentorModels.find();
      if (members) {
        responseReturn(res, 200, members);
      } else {
        responseReturn(res, 404, { message: "No Members Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  //get single mentors
  getSingleMentors = async (req, res) => {
    try {
      const mentorQuery = await req.query._id;
      const mentor = await mentorModels.findOne({ _id: mentorQuery });
      if (mentor) {
        responseReturn(res, 200, mentor);
      } else {
        responseReturn(res, 400, { message: "Mentor Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: "Mentor Not Found" });
    }
  };
  //update mentor
  updateMentor = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const member = await mentorModels.findById(memberQuery);
      if (member) {
        const file = req?.files?.photo;
        if (file) {
          const {
            name,
            email,
            skills,
            phone,
            presentPosition,
            formerPosition,
            batch,
          } = req.body;
          try {
            cloudinary.uploader.upload(
              file.tempFilePath,
              async (err, result) => {
                if (result) {
                  try {
                    const member = await mentorModels.findByIdAndUpdate(
                      memberQuery,
                      {
                        name: name,
                        email: email,
                        phone: phone,
                        skills: skills,
                        presentPosition: presentPosition,
                        formerPosition: formerPosition,
                        batch: batch,
                        image: result.secure_url,
                      },
                      {
                        new: true,
                        runValidators: true,
                        useFindAndModify: false,
                      }
                    );
                    responseReturn(res, 200, {
                      message: "Mentor Updated",
                      member,
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
            const member = await mentorModels.findByIdAndUpdate(
              memberQuery,
              req.body,
              {
                new: true,
                runValidators: true,
                useFindAndModify: false,
              }
            );
            responseReturn(res, 200, { message: "Mentor Updated", member });
          } catch (error) {
            responseReturn(res, 500, { message: error.message });
          }
        }
      } else {
        responseReturn(res, 400, { error: "Mentor Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  //Delete Mentor
  deleteMentor = async (req, res) => {
    try {
      const mentorQuery = await req.query._id;
      const mentor = await mentorModels.findById(mentorQuery);
      if (mentor) {
        await mentorModels.findByIdAndDelete(mentor);
        responseReturn(res, 200, { message: "Mentor Deleted Successfully" });
      } else {
        responseReturn(res, 409, { message: "Mentor Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}

module.exports = new mentorController();
