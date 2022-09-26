import mongoose from "mongoose";

const Tarea =  new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    }
})
export default mongoose.model('Tarea', Tarea)