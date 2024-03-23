import { Router } from "express";
import * as user from "./reques-handler/user-handler.js";

const router = Router();
import { Auth } from "./middleware/auth.js";

router.route("/signup").post(user.signup);
router.route("/login").post(user.login);

router.route("/getusername").get(Auth,user.getUsername);

export default router;