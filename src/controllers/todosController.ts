
import { Request, Response } from 'express';
import { TodoController } from '../config/todos.config';

export const getAllTodos = (req:Request, res:Response) => {
    const Todo = new TodoController();
    const response = Todo.getTodos();
    res.json(response);
}

export const todoFromId = (req:Request, res:Response) => {
    const { id } =  req.params ;
    const Todo = new TodoController();
    // @ts-ignore
    const ID = parseInt(id)
    const response = Todo.getTodoById(ID)
    res.json(response);
    
}

export const updateTodoById =  (req: Request, res: Response) => {
    const {id} = req.body;
    const body = req.body;
    const Todo = new TodoController()
    const response = Todo.updateTodoById(id, body);
    res.json(response);
}

