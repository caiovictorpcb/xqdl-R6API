import {MongoClient} from 'mongodb'
import mongoose, { connect } from 'mongoose'

const uri = "mongodb+srv://CaioVictor:C%40iovi02391@cluster0.7vczx.mongodb.net/r6ApiDB?retryWrites=true&w=majority";




export const CreateConnection = async () => {
  
  return await connect(uri).catch(e => console.log(e))
}