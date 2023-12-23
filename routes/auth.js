import express from "express"
import signup from "../controller/auth/signup.js"
import signin from "../controller/auth/signin.js"
import verifyToken from "../controller/auth/verifyToken.js"
import refreshToken from "../controller/auth/refreshToken.js"
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/verifyToken", verifyToken)
router.post("/refreshToken", refreshToken)

export default router