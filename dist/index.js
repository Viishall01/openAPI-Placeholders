"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.get('/', (req, res) => {
    res.send("Hello From OpenAPI !");
});
app.use('/users', userRoutes_1.default);
app.use('/todos', todoRoutes_1.default);
// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
