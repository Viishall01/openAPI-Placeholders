"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getAllUsers = exports.getUsers = void 0;
const users_config_1 = require("../config/users.config");
const getUsers = (req, res) => {
    try {
        const user = new users_config_1.UserController();
        const response = user.getUsers();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error instanceof Error ? error.message : error });
    }
};
exports.getUsers = getUsers;
const getAllUsers = (req, res) => {
    try {
        const user = new users_config_1.UserController();
        const response = user.getAllUsers();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error instanceof Error ? error.message : error });
    }
};
exports.getAllUsers = getAllUsers;
const updateUser = (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ error: 'Bad Request', message: 'User ID is required' });
        }
        const body = req.body;
        const user = new users_config_1.UserController();
        const response = user.updateUserById(id, body);
        if (!response) {
            return res.status(404).json({ error: 'Not Found', message: 'User not found' });
        }
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error instanceof Error ? error.message : error });
    }
};
exports.updateUser = updateUser;
