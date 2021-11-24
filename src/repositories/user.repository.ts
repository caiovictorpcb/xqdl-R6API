import mongoose, { model} from 'mongoose'
import { Platforms } from '../types/api';
import {UserModel, User} from '../models/user'
import R6Service from '../services/R6Service';
import ApiService from '../services/ApiService'
const { Schema } = mongoose;

class UserRepository {
    async newUser(user:User){
        const existingUser = await UserModel.findOne({discordId:user.discordId})
        if(existingUser) return undefined;
        return await new UserModel(user).save()
    }
    async listUsers(){
        return await UserModel.find({})
    }
    async getUserStats(discordId:string){
        const user = await UserModel.findOne({discordId})
        if(user) return await ApiService.getGenericStats(user.nickname, user.platform);
    }
    async deleteUser(discordId:string){
        const deleted = await UserModel.findOneAndDelete({discordId})
        return deleted
    }
}

export default UserRepository;