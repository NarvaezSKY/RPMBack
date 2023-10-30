import mongoose from "mongoose";

export const conection=mongoose.connect('mongodb+srv://Cristian:Cristian@clustertal.nubhn3b.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('db is connected succesfully')
})
.catch((err)=>{
    console.error(err)
})