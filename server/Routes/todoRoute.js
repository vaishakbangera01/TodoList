const express = require('express')
const { getAllToDo, createToDo, deleteToDo, updateToDo } = require("../Controllers/todoCtrl")



const todoRouter = express.Router()

// get-> read
// post-> send/create
// put-> upadate
// delete-> delete

// https://localhost:3000/getall'
todoRouter.get('/getall', getAllToDo)
todoRouter.post('/', createToDo)
todoRouter.put('/updateToDo/:id', updateToDo)
todoRouter.delete('/deleteToDo/:id', deleteToDo)

module.exports = todoRouter

