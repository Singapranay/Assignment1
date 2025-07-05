# Assignment1
MERN Projects
📘 Project Description
This project is a backend API built using Node.js, Express, and MongoDB. It demonstrates the use of custom middleware, RESTful routes, and MongoDB database integration using Mongoose. It can serve as a boilerplate for building scalable and maintainable REST APIs.

🚀 How to Run the Project
📦 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or above recommended)

MongoDB (Local or Atlas)

A package manager like npm or yarn

🔧 Installation Steps
Clone the Repository

bash
Copy
Edit
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install Dependencies

bash
Copy
Edit
npm install
Create Environment Variables

NOTE: Create your own cluster by MongoDB login and also make shore your id and password of MongoDB should be correct creditionals. 

Create a .env file in the root directory and add your MongoDB URI:
Copy
Edit
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-db-name?retryWrites=true&w=majority
PORT=3000
Run the Server

bash
npm start
or for development with hot-reloading:


server is running on port 8000
Connected to MongoDB



bash
Copy
Edit
npm run dev
🧪 API Usage
You can test the API using tools like Postman or Insomnia.
Base URL: http://localhost:8000/

🛠 Features
Custom middleware for logging, error handling, authentication, etc.

MongoDB integration using Mongoose

RESTful routes for CRUD operations

JSON request/response handling

Modular route/controller structure
