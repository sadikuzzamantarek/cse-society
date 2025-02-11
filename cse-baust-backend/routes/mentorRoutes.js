const { authMiddleware } = require("../middlewares/authMiddleware");
const mentorRouter = require("express").Router();
const mentorController = require("../controllers/mentorController");

mentorRouter.post("/add-mentor", authMiddleware, mentorController.createMentor);
mentorRouter.get("/get-mentors", mentorController.getMentors);
mentorRouter.get("/get-mentor", mentorController.getSingleMentors);
mentorRouter.put(
  "/update-mentor",
  authMiddleware,
  mentorController.updateMentor
);
mentorRouter.delete(
  "/delete-mentor",
  authMiddleware,
  mentorController.deleteMentor
);

module.exports = mentorRouter;
