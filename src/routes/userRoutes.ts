import { Router } from "express";
import { getAllUsers, getUsers, updateUser } from "../controllers/userControllers";

const router = Router();

router.get('/', getUsers);

router.get('/all', getAllUsers);

// @ts-ignore
router.post('/update', updateUser);


export default router;