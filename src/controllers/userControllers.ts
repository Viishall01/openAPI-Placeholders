import { Request, Response } from 'express';
import { UserController } from '../config/users.config';

export const getUsers = (req: Request, res: Response) => {
  try {
    const user = new UserController();
    const response = user.getUsers();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error instanceof Error ? error.message : error });
  }
};

export const getAllUsers = (req: Request, res: Response) => {
  try {
    const user = new UserController();
    const response = user.getAllUsers();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error instanceof Error ? error.message : error });
  }
};

export const updateUser = (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'Bad Request', message: 'User ID is required' });
    }

    const body = req.body;
    const user = new UserController();
    const response = user.updateUserById(id, body);

    if (!response) {
      return res.status(404).json({ error: 'Not Found', message: 'User not found' });
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error instanceof Error ? error.message : error });
  }
};
