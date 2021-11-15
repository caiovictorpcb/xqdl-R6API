import mongoose from 'mongoose'
import { UserSchema } from '../repositories/player.repository'

const User = mongoose.model("User", UserSchema)