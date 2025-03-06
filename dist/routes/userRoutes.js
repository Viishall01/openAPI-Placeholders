"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const router = (0, express_1.Router)();
router.get('/', userControllers_1.getUsers);
router.get('/all', userControllers_1.getAllUsers);
// @ts-ignore
router.post('/update', userControllers_1.updateUser);
exports.default = router;
