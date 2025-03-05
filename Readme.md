# User API

Welcome to the **User API** documentation. This API provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on user data and retrieve dummy users in JSON format.

## Table of Contents
- [Getting Started](#getting-started)
- [Base URL](#base-url)
- [Endpoints](#endpoints)
- [Request & Response Formats](#request--response-formats)
- [Error Handling](#error-handling)
- [Technologies Used](#technologies-used)
- [License](#license)

## Getting Started
To use the API, make HTTP requests to the provided endpoints with the required headers and request body.

### Prerequisites
- Node.js
- Express.js
- JSON support

### Installation
```bash
# Clone the repository
git clone https://github.com/your-repo/user-api.git

# Navigate to the project directory
cd user-api

# Install dependencies
npm install

# Start the server
npm run start
```

## Base URL
```
http://localhost:3000/api/v1
```

## Endpoints
### 1. Get Dummy Users
**GET** `/users/dummy`
#### Response
```json
{
  "users": [
    { "id": 10, "name": "Jiya", "lastname": "Nair", "fullname": "Jiya Nair", "gender": "Female", "age": 22, "city": "Kochi" },
    { "id": 11, "name": "Arjun", "lastname": "Menon", "fullname": "Arjun Menon", "gender": "Male", "age": 25, "city": "Chennai" }
  ]
}
```

### 2. Create User
**POST** `/users`
#### Request
```json
{
  "name": "Alice",
  "lastname": "Smith",
  "gender": "Female",
  "age": 28,
  "city": "New York"
}
```
#### Response
```json
{
  "message": "User created successfully",
  "user": {
    "id": 3,
    "name": "Alice",
    "lastname": "Smith",
    "fullname": "Alice Smith",
    "gender": "Female",
    "age": 28,
    "city": "New York"
  }
}
```

### 3. Get User by ID
**GET** `/users/:id`
#### Response
```json
{
  "id": 3,
  "name": "Alice",
  "lastname": "Smith",
  "fullname": "Alice Smith",
  "gender": "Female",
  "age": 28,
  "city": "New York"
}
```

### 4. Update User
**PUT** `/users/:id`
#### Request
```json
{
  "name": "Alice Johnson",
  "lastname": "Johnson",
  "gender": "Female",
  "age": 29,
  "city": "Los Angeles"
}
```
#### Response
```json
{
  "message": "User updated successfully",
  "user": {
    "id": 3,
    "name": "Alice Johnson",
    "lastname": "Johnson",
    "fullname": "Alice Johnson",
    "gender": "Female",
    "age": 29,
    "city": "Los Angeles"
  }
}
```

### 5. Delete User
**DELETE** `/users/:id`
#### Response
```json
{
  "message": "User deleted successfully"
}
```

### 6. Get Todos
**GET** `/todos`
#### Response
```json
{
  "todos": [
    { "id": 13, "title": "Build Spotify Clone with Next.js", "completed": false, "priority": "Low", "date": "2025-03-30" },
    { "id": 14, "title": "Write Blog on API Design", "completed": true, "priority": "High", "date": "2025-03-10" }
  ]
}
```

## Error Handling
All errors are returned in the following JSON format:
```json
{
  "error": "Error message here",
  "status": 400
}
```

## Technologies Used
- Node.js
- Express.js
- JSON

## License
This project is licensed under the MIT License.

