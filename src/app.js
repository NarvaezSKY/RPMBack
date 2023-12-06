import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
//rutas
import rutasUsuarios from "./routes/usuarios.routes.js";
import rutasRuta from "./routes/rutas.routes.js";
import cookieParser from 'cookie-parser';


const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())


//routes
app.use('/', rutasUsuarios)
app.use('/rutas', rutasRuta)


export default app;

