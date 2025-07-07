import express from "express"
import { createAccountController ,loginAccountController} from "../controller/auth.js";
const router = express.Router(); 

router.post("/signup",createAccountController)
router.post("/signin",loginAccountController)

export default  router