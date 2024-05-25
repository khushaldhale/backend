const express = require("express");
const { getAllTask, createTask, deleteTask, updateTask } = require("../controllers/task");


const router = express.Router();


router.get("/tasks", getAllTask);
router.post("/task", createTask);
router.delete("/task", deleteTask);
router.put("/task", updateTask)


module.exports = router