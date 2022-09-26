import express from 'express';
import postRoutes from './Rutas/posts.routes.js';
import { connectDB } from './db.js';
import { port } from "./config.js";

const app = express();

app.use(express.json())
app.use(postRoutes)

connectDB()
app.listen(port);
console.log("Starting")