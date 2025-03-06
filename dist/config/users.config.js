"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const data_1 = require("../data/data");
class UserController {
    constructor() {
        this.users = data_1.usersList;
    }
    getAllUsers() {
        return this.users;
    }
    getUsers() {
        const shuffled = this.users.sort(() => 0.5 - Math.random());
        const randomTenUsers = shuffled.slice(0, 10);
        return randomTenUsers;
    }
    getUserById(id) {
        return this.users.find((user) => user.id == id) || null;
    }
    updateUserById(id, updatedFeilds) {
        const index = this.users.findIndex(user => user.id == id);
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...updatedFeilds };
            return this.users[index];
        }
        return null;
    }
}
exports.UserController = UserController;
