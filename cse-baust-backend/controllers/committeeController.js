const committeeModel = require("../models/committeeModel");
const { responseReturn } = require("../utils/response");
const cloudinary = require("cloudinary").v2;
class committeeController {
  // adding new membber
  createMember = async (req, res) => {
    const {
      name,
      email,
      universityID,
      fieldOfInterest,
      department,
      batch,
      phone,
      designition,
      level,
      term,
      team,
      rank,
    } = req.body;

    try {
      const member = await committeeModel.findOne({ email: email });

      if (member) {
        responseReturn(res, 400, {
          message: "Member Email already exists",
        });
      } else {
        const memberId = await committeeModel.findOne({
          universityID: universityID,
        });
        if (memberId) {
          responseReturn(res, 400, {
            message: "Member ID already exists",
          });
        } else {
          try {
            const teamCheck = await committeeModel.findOne({
              teamInformation: {
                teamName: team,
                rank: rank,
              },
            });
            if (teamCheck) {
              responseReturn(res, 400, {
                message:
                  "Cannot assign same rank to multiple team member within a same team",
              });
            } else {
              try {
                const file = req.files.photo;
                cloudinary.uploader.upload(
                  file.tempFilePath,
                  async (err, result) => {
                    if (result) {
                      try {
                        // const {teamName, rank} = teamInformation;
                        const members = await committeeModel.create({
                          name: name,
                          email: email,
                          universityID: universityID,
                          image: result.secure_url,
                          fieldOfInterest: fieldOfInterest,
                          department: department,
                          batch: batch,
                          phone: phone,
                          designition: designition,
                          level: level,
                          term: term,

                          teamInformation: {
                            teamName: team,
                            rank: rank,
                          },
                        });
                        responseReturn(res, 200, {
                          message: "Committee Added Succesfully",
                          members,
                        });
                      } catch (error) {
                        responseReturn(res, 500, { message: error.message });
                      }
                    } else {
                      responseReturn(res, 500, {
                        message: "Image Not Uploaded",
                        errorLog: err,
                      });
                    }
                  }
                );
              } catch (error) {
                responseReturn(res, 500, { message: error.message });
              }
            }
          } catch (error) {
            responseReturn(res, 500, { message: error.message });
          }
        }
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  // getting all member
  getMember = async (req, res) => {
    try {
      const members = await committeeModel.find();
      if (members) {
        responseReturn(res, 200, members);
      } else {
        responseReturn(res, 400, { message: "No Members Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  // get single member
  getSingleMember = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const member = await committeeModel.findById(memberQuery);
      if (member) {
        responseReturn(res, 200, member);
      } else {
        responseReturn(res, 405, { error: "Member Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  //updating member
  updateMember = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const member = await committeeModel.findById(memberQuery);
      if (member) {
        const file = req?.files?.photo;
        if (file) {
          const {
            name,
            email,
            universityID,
            fieldOfInterest,
            department,
            batch,
            phone,
            designition,
            level,
            term,
            team,
            rank,
          } = req.body;
          try {
            cloudinary.uploader.upload(
              file.tempFilePath,
              async (err, result) => {
                if (result) {
                  try {
                    const member = await committeeModel.findByIdAndUpdate(
                      memberQuery,
                      {
                        name: name,
                        email: email,
                        universityID: universityID,
                        image: result.secure_url,
                        fieldOfInterest: fieldOfInterest,
                        department: department,
                        batch: batch,
                        phone: phone,
                        designition: designition,
                        level: level,
                        term: term,

                        teamInformation: {
                          teamName: team,
                          rank: rank,
                        },
                      },
                      {
                        new: true,
                        runValidators: true,
                        useFindAndModify: false,
                      }
                    );
                    responseReturn(res, 200, {
                      messsage: "Committee Updated Sucessfully",
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
            const member = await committeeModel.findByIdAndUpdate(
              memberQuery,
              req.body,
              {
                new: true,
                runValidators: true,
                useFindAndModify: false,
              }
            );
            responseReturn(res, 200, {
              messsage: "Committee Updated Sucessfully",
              member,
            });
          } catch (error) {
            responseReturn(res, 500, { message: error.message });
          }
        }
      } else {
        responseReturn(res, 400, { error: "Member Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  // deleting memeber
  deleteMember = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const member = await committeeModel.findById(memberQuery);
      if (member) {
        await committeeModel.findByIdAndDelete(member);
        responseReturn(res, 200, { message: "Member Deleted Successfully" });
      } else {
        responseReturn(res, 409, { message: "Member Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  // Approving any Registered member controller workflow is here
  approveFromRegistration = async (req, res) => {
    const {
      name,
      email,
      universityID,
      fieldOfInterest,
      department,
      batch,
      phone,
      designition,
      level,
      term,
      team,
      rank,
      image,
      // photo
    } = req.body;

    try {
      const member = await committeeModel.findOne({ email: email });

      if (member) {
        responseReturn(res, 400, {
          message: "Member Email already exists",
        });
      } else {
        const memberId = await committeeModel.findOne({
          universityID: universityID,
        });
        if (memberId) {
          responseReturn(res, 400, {
            message: "Member ID already exists",
          });
        } else {
          try {
            const teamCheck = await committeeModel.findOne({
              teamInformation: {
                teamName: team,
                rank: rank,
              },
            });
            if (teamCheck) {
              responseReturn(res, 400, {
                message:
                  "Cannot assign same rank to multiple team member within a same team",
              });
            } else {
              try {
                const file = req?.files?.photo;
                if (file) {
                  cloudinary.uploader.upload(
                    file.tempFilePath,
                    async (err, result) => {
                      if (result) {
                        try {
                          const members = await committeeModel.create({
                            name: name,
                            email: email,
                            universityID: universityID,
                            image: result.secure_url,
                            fieldOfInterest: fieldOfInterest,
                            department: department,
                            batch: batch,
                            phone: phone,
                            designition: designition,
                            level: level,
                            term: term,

                            teamInformation: {
                              teamName: team,
                              rank: rank,
                            },
                          });
                          responseReturn(res, 200, {
                            message: "Committee Added Succesfully",
                            members,
                          });
                        } catch (error) {
                          responseReturn(res, 500, { message: error.message });
                        }
                      } else {
                        responseReturn(res, 500, {
                          message: "Image Not Uploaded",
                          errorLog: err,
                        });
                      }
                    }
                  );
                } else {
                  try {
                    const members = await committeeModel.create({
                      name: name,
                      email: email,
                      universityID: universityID,
                      image: image,
                      fieldOfInterest: fieldOfInterest,
                      department: department,
                      batch: batch,
                      phone: phone,
                      designition: designition,
                      level: level,
                      term: term,

                      teamInformation: {
                        teamName: team,
                        rank: rank,
                      },
                    });
                    responseReturn(res, 200, {
                      message: "Committee Added Succesfully",
                      members,
                    });
                  } catch (error) {
                    responseReturn(res, 500, { message: error.message });
                  }
                }
              } catch (error) {
                responseReturn(res, 500, { message: error.message });
              }
            }
          } catch (error) {
            responseReturn(res, 500, { message: error.message });
          }
        }
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
}
module.exports = new committeeController();
