import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controller.js";

dotenv.config()
mongoose.connect(process.env_urldb)

.then(()=>{
    console.log("Funciona la base de datos")
})
.catch((error)=>{
    console.log("No funciona ya salio", error)
})

const app =express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("se escucha mamalon")
})

test()