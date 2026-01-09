const express = require("express");

const app = express();
const toDoRoutes = require("./routes/toDoRoutes");

app.use(express.json());

app.use("/api/todo", toDoRoutes);

module.exports = app;

