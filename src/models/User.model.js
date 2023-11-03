import mongoose, { model } from "mongoose";

const UserSchema= new mongoose.Schema({
    nombres_usu:{
        type:String,
        required:true,
    },
    apellidos_usu:{
        type:String,
        required:true,
    },
    nacionalidad_usu:{
        type:String,
    },
    genero:{
        type:String,
    },
    celular_usu:{
        type:Number
    },fecha_na_usu:{
        type:String,
    },numero_id_usu:{
        type:String
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

export default model("usuarios",UserSchema)