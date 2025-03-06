"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
class TodoController {
    constructor() {
        this.todos = [
            { id: 1, title: "Learn AI/ML Basics", completed: false, priority: "High", date: "2025-03-04" },
            { id: 2, title: "Build Video Translation App", completed: false, priority: "High", date: "2025-03-10" },
            { id: 3, title: "Apply for Google STEP Internship", completed: true, priority: "High", date: "2025-02-12" },
            { id: 4, title: "Learn FTP-based File Sharing", completed: false, priority: "Medium", date: "2025-03-15" },
            { id: 5, title: "Build Document Q&A Chatbot", completed: false, priority: "High", date: "2025-03-08" },
            { id: 6, title: "Deploy Portfolio Website", completed: true, priority: "Low", date: "2025-01-20" },
            { id: 7, title: "Contribute to Open Source", completed: false, priority: "Medium", date: "2025-03-20" },
            { id: 8, title: "Create Vishon Landing Page", completed: false, priority: "High", date: "2025-03-14" },
            { id: 9, title: "Write Tech Blog on FTP", completed: false, priority: "Medium", date: "2025-03-18" },
            { id: 10, title: "Learn TensorFlow", completed: false, priority: "High", date: "2025-03-25" },
            { id: 11, title: "Build YouTube Video Downloader App", completed: false, priority: "Low", date: "2025-03-12" },
            { id: 12, title: "Create Design System for Vishon", completed: false, priority: "Medium", date: "2025-03-22" },
            { id: 13, title: "Build Spotify Clone with Next.js", completed: false, priority: "Low", date: "2025-03-30" },
            { id: 14, title: "Learn LangChain", completed: false, priority: "High", date: "2025-03-28" },
            { id: 15, title: "Publish Blog on Video Translation App", completed: false, priority: "Medium", date: "2025-03-26" },
            { id: 16, title: "Deploy FTP File Sharing App", completed: false, priority: "High", date: "2025-04-05" },
            { id: 17, title: "Learn Gemini Pro API", completed: false, priority: "High", date: "2025-03-11" },
            { id: 18, title: "Build Vishon AI Chatbot", completed: false, priority: "High", date: "2025-04-10" },
            { id: 19, title: "Create Personal Blog Website", completed: false, priority: "Low", date: "2025-04-15" },
            { id: 20, title: "Learn WebRTC for Video Calls", completed: false, priority: "Medium", date: "2025-04-20" },
            { id: 21, title: "Contribute to Vishon Docs", completed: false, priority: "Medium", date: "2025-04-12" },
            { id: 22, title: "Build WhatsApp Bot with Gemini API", completed: false, priority: "High", date: "2025-03-29" },
            { id: 23, title: "Complete Vishon Branding Assets", completed: false, priority: "Medium", date: "2025-04-02" },
            { id: 24, title: "Launch Vishon Official Website", completed: false, priority: "High", date: "2025-04-30" },
            { id: 25, title: "Start YouTube Channel for Vishon", completed: false, priority: "Low", date: "2025-05-01" }
        ];
    }
    getTodos() {
        return this.todos;
    }
    getTodoById(id) {
        return this.todos.find((todo) => todo.id === id) || null;
    }
    addTodo(title, priority = "Medium", date = new Date().toISOString().split("T")[0]) {
        const newTodo = {
            id: this.todos.length + 1,
            title,
            completed: false,
            priority,
            date,
        };
        this.todos.push(newTodo);
        return newTodo;
    }
    updateTodoById(id, updatedFeilds) {
        const index = this.todos.findIndex(todo => todo.id == id);
        // for checking if the todo exist's or its a valid id or not 
        if (index !== -1) {
            this.todos[index] = { ...this.todos[index], ...updatedFeilds };
            return this.todos[index];
        }
        return null;
    }
    deleteTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            return this.todos.splice(index, 1)[0];
        }
        return null;
    }
    // Sort todos by priority (High > Medium > Low)
    sortTodosByPriority() {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return this.todos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }
    sortTodosByDate() {
        return this.todos.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
}
exports.TodoController = TodoController;
