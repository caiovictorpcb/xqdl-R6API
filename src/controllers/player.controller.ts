import { Get, Route, Tags, Query, Path } from "tsoa";
import R6Service from "../services/R6Service";
import { platform } from "os";

@Route("players")
@Tags("Player")
export default class PlayerController {
  @Get("/")
  public async getStats(){
      return await R6Service.getStats()
  }

}