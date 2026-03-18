import express from "express";
import SignUpHandler from "../controllers/SignUpHandler.js";
import logOutHandler from "../controllers/logOutHandler.js";
import loginHandler from "../controllers/loginhandler.js";

const router = express.Router();

router.route("/signUp")
    .post(SignUpHandler)

router.route("/logOut")
    .post(logOutHandler)

router.route("/login")
    .post(loginHandler)

export default router;
