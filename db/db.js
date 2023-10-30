import mongoose from "mongoose";

export const conection=mongoose.connect('mongodb+srv://Cristian:1234@clustertal.nubhn3b.mongodb.net/RutasParaMoteros')
.then(()=>{
    console.log('db is connected succesfully')
})
.catch((err)=>{
    console.error(err)
})