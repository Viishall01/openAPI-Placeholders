"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoById = exports.todoFromId = exports.getAllTodos = void 0;
const todos_config_1 = require("../config/todos.config");
const getAllTodos = (req, res) => {
    const Todo = new todos_config_1.TodoController();
    const response = Todo.getTodos();
    res.json(response);
};
exports.getAllTodos = getAllTodos;
const todoFromId = (req, res) => {
    const { id } = req.params;
    const Todo = new todos_config_1.TodoController();
    // @ts-ignore
    const ID = parseInt(id);
    const response = Todo.getTodoById(ID);
    res.json(response);
};
exports.todoFromId = todoFromId;
const updateTodoById = (req, res) => {
    const { id } = req.body;
    const body = req.body;
    const Todo = new todos_config_1.TodoController();
    const response = Todo.updateTodoById(id, body);
    res.json(response);
};
exports.updateTodoById = updateTodoById;
