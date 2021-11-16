import express from "express";
import UsersRouter from './user.router'
const router = express.Router();


router.use("/users", UsersRouter)


export default router;