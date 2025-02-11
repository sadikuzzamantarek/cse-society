const committeeRouter = require("express").Router();
const committeeController = require("../controllers/committeeController");
const { authMiddleware } = require("../middlewares/authMiddleware");
committeeRouter.post(
  "/add-committee-member",
  authMiddleware,
  committeeController.createMember
);
committeeRouter.put(
  "/update-member",
  authMiddleware,
  committeeController.updateMember
);
committeeRouter.get("/get-committee-members", committeeController.getMember);
committeeRouter.get(
  "/get-committee-member",
  authMiddleware,
  committeeController.getSingleMember
);
committeeRouter.delete(
  "/delete-committee-member",
  authMiddleware,
  committeeController.deleteMember
);
committeeRouter.post(
  "/add-registered-committee",
  authMiddleware,
  committeeController.approveFromRegistration
);

module.exports = committeeRouter;
