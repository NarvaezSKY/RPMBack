import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {  connectDb} from "./db/db.js";

connectDb();

const app=express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.listen(3000,()=>{
console.log(`la wea fome corre en el 3000`)
})