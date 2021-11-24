import { Get, Route, Tags, Query, Path, Post, Body } from "tsoa";
import UserRepository from "../repositories/user.repository";
import { platform } from "os";
import { User } from "../models/user";

@Route("users")
@Tags("User")
export default class UserController {
  @Get("/")
  public async getUsers(){
    const repository = new UserRepository();
    return repository.listUsers()
  }
  @Post("/")
  public async newUser(@Body() user: User){
    const repository = new UserRepository();
    return repository.newUser(user)
  }
  @Get("/stats/:discordId")
  public async getUserStats(@Path() discordId:string){
    const repository = new UserRepository();
    return repository.getUserStats(discordId)
  }


}