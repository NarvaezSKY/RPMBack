
import mongoose from "mongoose";

const URI= "mongodb+srv://luis:luis@cluster0.trhswsz.mongodb.net/?retryWrites=true&w=majority"

export const connectDb= async ()=>{
    try {
         await mongoose.connect(URI)
        console.log('bd is connected')
    } catch (error) {
        console.log(error)
        
    }
}


