import mongoose from "mongoose";
import { MongoURI } from "./config.js";

export async function connectDB() {
  try {
    const db = await mongoose.connect(MongoURI)
    console.log("Conectado" + db.connection.name)
  } catch (error) {
    console.error("errr" +error);
  }
}