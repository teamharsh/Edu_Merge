import express from "express";
import { SignUp, googleAuthCallback, signin, verify, googleAuth, getUserDetails } from "../controller/user-controller";
// import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", signin);
router.post("/verify", verify);
router.get("/auth/google/callback", googleAuthCallback);
router.get("/auth/google", googleAuth);
router.get("/user", getUserDetails);


export default router;
