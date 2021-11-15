import express, {Request} from "express";
import PlayerController from './../controllers/player.controller';
const router = express.Router();


router.get("/", async (_req, res) => {
  const controller = new PlayerController();
  const response = await controller.getStats()
  return res.send(response)
});



export default router;