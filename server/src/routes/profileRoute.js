import express from "express";
import * as Profile from "../controllers/profileController.js";
import verifyToken from "../controllers/authMiddleware.js";

const profileRouter = express.Router();

profileRouter.use(express.json());

profileRouter.post("/", Profile.createProfile);
profileRouter.get("/:id", verifyToken, Profile.getProfile);

export default profileRouter;