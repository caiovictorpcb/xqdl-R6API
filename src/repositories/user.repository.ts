import mongoose, { model} from 'mongoose'
import { Platforms } from '../types/api';
import {UserModel, User} from '../models/user'

const { Schema } = mongoose;

class UserRepository {
    async newUser(user:User){
        return await new UserModel(user).save()
    }
    async listUsers(){
        return await UserModel.find({})
    }
}

export default UserRepository;