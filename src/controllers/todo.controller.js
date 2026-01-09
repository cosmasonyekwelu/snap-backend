const Todo = require("../models/todo.model");

const createTodo = async (req, res) => {
  try {
    const { title, description, completed, dueDate, user } = req.body;

    if (!title) {
      return res
        .status(400)
        .json({ status: "error", message: "Title is required" });
    }

    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "User is required" });
    }

    let parsedDueDate;
    if (dueDate) {
      const d = new Date(dueDate);
      if (!isNaN(d)) parsedDueDate = d;
    }

    const todo = await Todo.create({
      title,
      description,
      completed,
      dueDate: parsedDueDate,
      user,
    });

    return res.status(201).json({
      status: "success",
      message: "To-do created successfully",
      data: todo,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: "error", message: "Server error" });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.status(200).json({ status: "sucesss", data: todos });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: "error", message: "Server error" });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        status: "error",
        message: "To-do not found",
      });
    }

    return res.status(200).json({ status: "success", data: todo });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: "error", message: "Server error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!todo) {
      return res.status(404).json({
        status: "error",
        message: "To-do not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "To-do updated successfully",
      data: todo,
    });
  } catch (error) {
    console.error(err);
    return res.status(500).json({ status: "error", message: "Server error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({
        status: "error",
        message: "To-do not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "To-do deleted successfully",
    });
  } catch (error) {
    console.error(err);
    return res.status(500).json({ status: "error", message: "Server error" });
  }
};

module.exports = { createTodo, getTodos, getTodoById, updateTodo, deleteTodo };
