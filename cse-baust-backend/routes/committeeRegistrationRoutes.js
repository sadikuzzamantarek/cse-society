const { authMiddleware } = require("../middlewares/authMiddleware");

const committeeRouter = require("express").Router();
const committeeRegistrationController = require("../controllers/committeeRegistrationController");

committeeRouter.post(
  "/register-committee",
  committeeRegistrationController.handleCommitteeRegistration
);
committeeRouter.get(
  "/get-all-committee-registration",
  authMiddleware,
  committeeRegistrationController.getAllCommitteeRegistration
);
committeeRouter.get(
  "/get-committee-registration",
  authMiddleware,
  committeeRegistrationController.getSingleCommitteeRegistration
);
committeeRouter.delete(
  "/delete-committee-registration",
  authMiddleware,
  committeeRegistrationController.deleteARegisterCommittee
);

module.exports = committeeRouter;
