import mongoose from "mongoose";

export const db= async()=>{
    try {
       await mongoose.connect("mongodb+srv://Cristian:1234@clustertal.nubhn3b.mongodb.net/RPMBackEndTest")
       console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
}