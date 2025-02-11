const noticeController = require("../controllers/noticeController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const noticeRouter = require("express").Router();
noticeRouter.post("/add-notice", authMiddleware, noticeController.createNotice);

noticeRouter.get("/get-notices", noticeController.getAllNotice);
noticeRouter.get("/get-notice", noticeController.getSingleNotice);
noticeRouter.put(
  "/update-notice",
  authMiddleware,
  noticeController.updateNotice
);
noticeRouter.delete(
  "/delete-notice",
  authMiddleware,
  noticeController.deleteNotice
);

module.exports = noticeRouter;
