import express, {Request} from "express";
import UserController from '../controllers/user.controller';
const router = express.Router();


router.get("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers()
  return res.send(response)
});


router.post("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.newUser(_req.body)
  return res.send(response)
});


export default router;