const express = require("express");

const app = express();
const toDoRoutes = require("./routes/todo.routes");

app.use(express.json());

app.use("/api/todos", toDoRoutes);

module.exports = app;
