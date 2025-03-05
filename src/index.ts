import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import todoRoutes from './routes/todoRoutes'

const app = express();
const PORT = 3000;


// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.get('/', (req, res) => {
    res.send("Hello From OpenAPI !");
});

app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));