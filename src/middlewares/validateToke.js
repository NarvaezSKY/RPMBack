import { json } from "express";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
export const validate = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.json({ message: 'No hay token' })
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(404).json({ message: 'token invalido' })
        req.usuario = user;
        next();

    })
}
