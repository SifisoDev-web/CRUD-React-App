# 📚 React CRUD Project

This project is a **simple React CRUD application** that manages a list of products using a fake REST API powered by **JSON Server**.

---

- GitHub: [Sifiso Wiseman](https://github.com/SifisoDev-web)

## 🚀 Technologies Used

- React JS (Frontend)
- JSON Server (Fake Backend API)
- Bootstrap (for styling)

---

## 📥 Requirements

Before running this project, make sure you have installed:

- [Node.js and npm](https://nodejs.org/en/)
- A code editor like [VSCode](https://code.visualstudio.com/)
- Git (optional)

---

## 📦 Installations

1. **Clone the repository** or copy your project files.

2. **Navigate** to your project folder:

   ```bash
   cd crud-app
Install React dependencies:

bash
Copy
Edit
npm install
Install JSON Server globally:

bash
Copy
Edit
npm install -g json-server
 
🛠 How to Run
1. Start JSON Server
In your project folder:

bash
Copy
Edit
json-server --watch db.json --port 5000
API will run at: http://localhost:5000/products

2. Start the React App
In another terminal:

bash
Copy
Edit
npm start
React app will open at: http://localhost:3000/

🔥 Features
Create a product

View products

Update product details

Delete products

Instant updates without page reload

⚙️ API Endpoints
GET /products — Get all products

POST /products — Add new product

PUT /products/:id — Edit product

DELETE /products/:id — Delete product

🛑 Notes
Make sure both JSON Server and React App are running.

Default API URL is http://localhost:5000/products.

If you change the port, update the URLs inside Products.js.