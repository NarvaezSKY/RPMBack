import Usuario from "../models/Motoviajero.js";
//
import bcrypt from "bcryptjs";

import { createToken } from "../middlewares/jwt.js";

export const registroUsuario = async (req, res) => {
    const { nombres, apellidos, email, contraseña } = req.body;
    try {

        const bcryptContraseña = await bcrypt.hash(contraseña, 10)
        const nuevoUsuario = new Usuario({
            nombres,
            apellidos,
            email,
            contraseña: bcryptContraseña
        })

        await nuevoUsuario.save();
        const token = await createToken({ id: nuevoUsuario._id })
        res.cookie('token', token)
        res.json({ message: 'Usuario Registrado' })

    } catch (error) {
        console.log(error)
    }

}

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios)
    } catch (error) {
        console.log(error)

    }
}
export const eliminarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id)
        res.json({ message: 'Usuario Eliminado' })

    } catch (error) {
        console.log(error)
    }

}



//login-logOut

export const login = async (req, res) => {
    const { email, contraseña } = req.body;

    try {
        const usuarioEncontrado = await Usuario.findOne({ email })
        if (!usuarioEncontrado) return res.status(400).json({ message: 'No Encontrado' })
        const compareContraseña = bcrypt.compare(usuarioEncontrado.contraseña, contraseña)
        if (!compareContraseña) return res.status(400).json({ message: 'Error en la contraseña' })

        const token = await createToken({ id: usuarioEncontrado._id })
        
        res.cookie('token', token)
        res.json({
            message: `Bienvenido: ${usuarioEncontrado.nombres}`
        })

    } catch (error) {
        console.log(error)
    }

}

export const logOut = async (req, res) => {
    try {
        res.cookie('token', "", {

            expires: new Date(0)
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }

}