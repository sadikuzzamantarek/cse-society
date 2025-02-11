const boardMemberController = require("../controllers/boardMemberController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const boardMemberRouter = require("express").Router();

boardMemberRouter.post(
  "/add-advisor",
  authMiddleware,
  boardMemberController.createBoardMember
);
boardMemberRouter.get("/get-advisors", boardMemberController.getAllBoardMember);
boardMemberRouter.get(
  "/get-advisor",
  boardMemberController.getSingleBoardMember
);
boardMemberRouter.put(
  "/update-advisor",
  authMiddleware,
  boardMemberController.updateBoardMember
);
boardMemberRouter.delete(
  "/delete-advisor",
  authMiddleware,
  boardMemberController.deleteBoardMember
);

module.exports = boardMemberRouter;
