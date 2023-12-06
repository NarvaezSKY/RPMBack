import { Schema, model } from "mongoose";



const usuarioShema = new Schema({
    tipo_doc: {
        type: String,
        required: false,
        default: ""
    },
    numero_doc: {
        type: String,
        required: false,
        default: ""
    },
    nombres: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    fecha_nac: {
        type: String,
        required: false,
        default: ""
    },
    alias: {
        type: String,
        required: false,
        default: ""
    },
    red_social: {
        type: String,
        required: false,
        default: ""
    },
    genero: {
        type: String,
        required: false,
        default: ""
    },
    nacionalidad: {
        type: String,
        required: false,
        default: ""
    },
    rh: {
        type: String,
        required: false,
        default: ""
    },
    telefono: {
        type: String,
        required: false,
        default: ""
    }

})

export default model('usuarios', usuarioShema);