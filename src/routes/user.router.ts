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
  if(response) return res.status(201).send(response)
  return res.status(200).send("ERROR")
});

router.get("/stats/:discordId", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUserStats(_req.params.discordId)
  return res.send(response)
});


export default router;