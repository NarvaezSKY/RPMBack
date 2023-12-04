import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
//rutas
import rutasUsuarios from "./routes/usuarios.routes.js";
import rutasRuta from "./routes/rutas.routes.js";


const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())



//routes
app.use('/', rutasUsuarios)
app.use('/rutas', rutasRuta)


export default app;

