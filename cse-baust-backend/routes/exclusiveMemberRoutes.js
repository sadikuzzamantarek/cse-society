const { authMiddleware } = require("../middlewares/authMiddleware");
const exclusiveMembersRouter = require("express").Router();
const exclusiveMembersController = require("../controllers/exclusiveMemberController");
exclusiveMembersRouter.post(
  "/add-exclusive-member",
  authMiddleware,
  exclusiveMembersController.createExclusiveMember
);
exclusiveMembersRouter.put(
  "/update-exclusive-member",
  authMiddleware,
  exclusiveMembersController.updateSingleExlclusiveMember
);
exclusiveMembersRouter.get(
  "/get-exclusive-members",
  exclusiveMembersController.getAllExclusiveMember
);
exclusiveMembersRouter.get(
  "/get-exclusive-member",
  
  exclusiveMembersController.getSingleExclusivedMember
);
exclusiveMembersRouter.delete(
  "/delete-exclusive-member",
  authMiddleware,
  exclusiveMembersController.deleteExclusiveMember
);

module.exports = exclusiveMembersRouter;
