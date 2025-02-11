const noticeModel = require("../models/noticeModel");
const { responseReturn } = require("../utils/response");
const cloudinary = require("cloudinary").v2;

class noticeController {
  // add new notice
  createNotice = async (req, res) => {
    const { title, subtitle, notice } = req.body;
    try {
      const file = req.files.thumbnail;
      cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
        if (result) {
          try {
            const ntc = await noticeModel.create({
              title: title,
              subtitle: subtitle,
              notice: notice,
              thumbnail: result.secure_url,
            });
            responseReturn(res, 200, ntc);
          } catch (error) {
            responseReturn(res, 500, { message: error.message });
          }
        } else {
          responseReturn(res, 500, { message: "Image Not Uploaded" });
        }
      });
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  // get all notice
  getAllNotice = async (req, res) => {
    try {
      const notices = await noticeModel.find();
      responseReturn(res, 200, notices);
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  //get single notice
  getSingleNotice = async (req, res) => {
    try {
      const noticeQuery = await req.query._id;
      const notice = await noticeModel.findById(noticeQuery);
      if (notice) {
        responseReturn(res, 200, notice);
      } else {
        responseReturn(res, 404, { message: "Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
  //update notice
  updateNotice = async (req, res) => {
    try {
      const memberQuery = await req.query._id;
      const ntc = await noticeModel.findById(memberQuery);
      if (ntc) {
        const file = req?.files?.thumbnail;
        if (file) {
          const { title, subtitle, notice } = req.body;

          try {
            cloudinary.uploader.upload(
              file.tempFilePath,
              async (err, result) => {
                if (result) {
                  try {
                    const ntc = await noticeModel.findByIdAndUpdate(
                      memberQuery,
                      {
                        title: title,
                        subtitle: subtitle,
                        notice: notice,
                        thumbnail: result.secure_url,
                      },
                      {
                        new: true,
                        runValidators: true,
                        useFindAndModify: false,
                      }
                    );
                    responseReturn(res, 200, ntc);
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
            const ntc = await noticeModel.findByIdAndUpdate(
              memberQuery,
              req.body,
              {
                new: true,
                runValidators: true,
                useFindAndModify: false,
              }
            );
            responseReturn(res, 200, ntc);
          } catch (error) {
            responseReturn(res, 500, { message: error.message });
          }
        }
      } else {
        responseReturn(res, 400, { error: "Notice Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };

  //delete notice
  deleteNotice = async (req, res) => {
    try {
      const noticeQuery = await req.query._id;
      const notice = await noticeModel.findById(noticeQuery);
      if (notice) {
        try {
          await noticeModel.findByIdAndDelete(notice);
          responseReturn(res, 200, { message: "Notice Deleted Successfully" });
        } catch (error) {
          responseReturn(res, 500, { message: error.message });
        }
      } else {
        responseReturn(res, 409, { message: "Notice Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}
module.exports = new noticeController();
