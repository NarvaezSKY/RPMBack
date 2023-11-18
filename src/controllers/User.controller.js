import UserSchema from "../models/User.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs.js";

import Jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const getAllUsers = async (req, res) => {
  try {
    const todos = await UserSchema.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: `ERROR! ${error}` });
  }
};

export const RegisterUser = async (req, res) => {
  try {
    const {
      nombres_usu,
      apellidos_usu,
      nacionalidad_usu,
      genero,
      celular_usu,
      fecha_na_usu,
      numero_id_usu,
      email,
      password,
    } = req.body;

    const userfound = await UserSchema.findOne({ email });

    if (userfound) {
      return res.json({ message: `El correo ${userfound} ya está en uso.` });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newuser = new UserSchema({
      nombres_usu,
      apellidos_usu,
      nacionalidad_usu,
      genero,
      celular_usu,
      fecha_na_usu,
      numero_id_usu,
      email,
      password: passwordHash,
    });

    const usersave = await newuser.save();

    const token = await createAccessToken({ id: usersave._id });

    res.cookie("token", token);

    res.json({
      id: usersave._id,
      nombres_usu: usersave.nombres_usu,
      apellidos_usu: usersave.apellidos_usu,
      nacionalidad_usu: usersave.nacionalidad_usu,
      genero: usersave.genero,
      celular_usu: usersave.celular_usu,
      fecha_na_usu: usersave.fecha_na_usu,
      numero_id_usu: usersave.numero_id_usu,
      email: usersave.email,
      createdAt: usersave.createdAt,
      updatedAt: usersave.updatedAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `SERVER INTERNAL ERROR! ${error}` });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const Userfound = await UserSchema.findOne({ email });
    if (!Userfound) return res.json({ message: "user not found" });
    const coincide = await bcrypt.compare(password, Userfound.password);
    if (!coincide) return res.json({ message: "incorrect password" });

    const token = await createAccessToken({ id: Userfound._id });
    res.cookie("token", token);
    res.json({
      id: Userfound._id,
      email: Userfound.email,
      createdAt: Userfound.createdAt,
      updatedAt: Userfound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: `LOGIN ERROR! ${error}` });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.status(200).json({message:`Cerraste sesión satisfactoriamente. Mamaguebo.`});
};

export const Profile = async (req, res) => {
  const userfound = await UserSchema.findById(req.params.id);
  if (!userfound) return res.json({ message: "User not found" });

  return res.json({
    id: userfound._id,
    username: userfound.username,
    email: userfound.email,
    
    createdAt: userfound.createdAt,
    updatedAt: userfound.updatedAt,
  });
};

export const VerifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.json({ message: "acesso no autorizado" });

  Jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.json({ message: "acesso no autorizado" });
    const userfound = await UserSchema.findById(user.id);
    if (!userfound) return res.json({ message: "acesso no autorizado" });
    return res.json({
      id: userfound._id,
      username: userfound.username,
      email: userfound.email,
    });
  });
};
