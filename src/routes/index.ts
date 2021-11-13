import express from "express";
import PlayerRouter from './player.router'
import PlayerController from './../controllers/player.controller';
const router = express.Router();


router.use("/players", PlayerRouter)


export default router;