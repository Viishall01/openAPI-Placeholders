import { Router } from "express";
import { getAllTodos, todoFromId, updateTodoById} from "../controllers/todosController";

const router = Router();

router.get('/all', getAllTodos);
router.get('/:id',todoFromId);
router.post('/update',updateTodoById);


export default router;