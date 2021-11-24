import {MongoClient} from 'mongodb'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()




const URI = process.env.DATABASE_URI;




export const CreateConnection = async () => {
  if(URI){
    return await connect(URI).catch(e => console.log(e))
  }
  else{
    return console.log("ESQUECEU O .ENV ein")
  }
}