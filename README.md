# Mongoose Relations Demo

🚀 Exploring MongoDB Relations with Mongoose in Node.js.  
This project demonstrates a **one-to-many relationship** by embedding address objects inside a user document.

---

## 📂 Project Setup

1. Create a new folder:
   ```bash
   mkdir RelationShips
   cd RelationShips
2. Initialize Node.js project:
   ```bash
   npm install express mongoose
3. Install dependencies:
   ```bash
   npm install express mongoose
4. Create Example folder and user.js:
   ```bash
   mkdir Example
   cd Example
   touch user.js
5. Write your code in user.js
6. Run the project:
   ```bash
   node user.js

## 🗄️ Checking Data in MongoDB
After running your project, you can verify the inserted data with the following commands:
   ```bash
mongosh
show dbs
use relationDemo
show collections
db.users.find()
