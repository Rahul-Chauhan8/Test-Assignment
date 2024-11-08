import mongoose,{Schema} from "mongoose";


const Users = new Schema({
    name:String,
    email:String,
    password:String
})

