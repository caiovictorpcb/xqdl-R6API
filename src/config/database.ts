import {MongoClient} from 'mongodb'
import mongoose from 'mongoose'

const uri = "mongodb+srv://CaioVictor:C@iovi02391@cluster0.7vczx.mongodb.net/r6ApiDB?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

export const CreateConnection = async () => {
    return await mongoose.connect('').catch(e => console.log(e))
}