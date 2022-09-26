import { Router } from "express";
import Tarea from "../Models/Tarea.js";

const router = Router();

router.get("/post", async (req, res) => {
  try {
    const data = await Tarea.find();
    return res.send(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/post", async (req, res) => {
  try {
    const { titulo, descripcion, tipo } = req.body;
    const tarea = new Tarea({ titulo, descripcion, tipo });
    await tarea.save();
    return res.json(tarea);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/post/:id", async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(tarea);
    return res.send("recibido");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete("/post/:id", async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndDelete(req.params.id, { new: true });
    console.log(tarea);
    return res.send("Borrado");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    console.log(tarea);
    return res.send(tarea);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
