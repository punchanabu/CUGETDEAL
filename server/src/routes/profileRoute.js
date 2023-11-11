import express from "express";
import * as Profile from "../controllers/profileController.js";
import verifyToken from "../controllers/authMiddleware.js";

const profileRouter = express.Router();

profileRouter.use(express.json());

profileRouter.post("/", verifyToken, Profile.initProfile);
profileRouter.put("/", verifyToken, Profile.updateProfile);
profileRouter.get("/:id", Profile.getProfilebyID);
profileRouter.get("/", verifyToken, Profile.getProfile);

export default profileRouter;