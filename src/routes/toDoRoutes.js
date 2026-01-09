const express = require("express");
const {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/To-do-controller");

const router = express.Router();

router.post("/create", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodoById);
router.put("/:id/update", updateTodo);
router.delete("/:id/delete", deleteTodo);

module.exports = router;
