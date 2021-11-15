import mongoose from 'mongoose'



const { Schema } = mongoose;
export const UserSchema = new Schema ({
    username:String,
    platform:String,
    discordId:String
})