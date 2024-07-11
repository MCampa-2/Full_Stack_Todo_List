import express from "express";
const router = express.Router();
import { getAllTodos, getTodo, updateTodo, deleteTodo, createTodo } from "../controllers/todo.js";


router.get("/", getAllTodos);
router.get("/:id", getTodo);
router.patch("/:id",updateTodo);
router.delete("/:id", deleteTodo);
router.post("/", createTodo);

export default router;