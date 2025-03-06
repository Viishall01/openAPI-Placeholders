"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosController_1 = require("../controllers/todosController");
const router = (0, express_1.Router)();
router.get('/all', todosController_1.getAllTodos);
router.get('/:id', todosController_1.todoFromId);
router.post('/update', todosController_1.updateTodoById);
exports.default = router;
