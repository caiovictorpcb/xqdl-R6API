import mongoose, { Schema, model } from 'mongoose'
import {Platforms} from '../types/api'

export interface User {
    discordId:string
    platform:string
    nickname:string
  }


const UserSchema = new Schema<User>({
    discordId: { type: String, required: true },
    nickname: { type: String, required: true },
    platform: { type: String, required: true },
  });

export const UserModel = model<User>('User', UserSchema);