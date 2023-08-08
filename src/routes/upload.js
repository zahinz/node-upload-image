import uploadController from "../controllers/upload";
import upload from "../middleware/upload/image";

const { Router } = require("express");

const uploadRoute = Router();

uploadRoute.get(
  "/profile-picture",
  upload.image.single("profile-picture"),
  uploadController.profilePicture
);

export default uploadRoute;
