<!-- 🔍 Project Overview -->

The Employee Management System (EMS) is a web-based application designed to manage employee records efficiently.
It allows users to add, edit, delete, view, filter, and manage employee status (active/inactive) through an intuitive dashboard.

The application also includes basic authentication, ensuring only logged-in users can access the dashboard.

This project is built as part of an assignment to demonstrate frontend architecture, state management, CRUD operations, and UI design best practices.

<!-- 🛠️ Tech Stack Used -->

Frontend
React.js (Functional Components & Hooks)
React Router DOM (Routing & Protected Routes)
React Icons (UI Icons)
CSS3 (Custom styling, responsive layout)
State & Storage
React Context API (Authentication state)
Local Storage (Session persistence)
Backend (Mock API)
JSON Server (Mock REST APIs)
Fetch API (API communication)

<!-- ✨ Features -->

🔐 Login & Logout functionality
🧑‍💼 Add / Edit / Delete Employees
🔄 Toggle Active / Inactive status
🔍 Search, Filter by Gender & Status
🖼️ Profile image upload preview
📊 Dashboard statistics (Total / Active / Inactive employees)
📱 Responsive UI (Desktop & Tablet)

<!-- 🚀 Steps to Run the Project Locally -->

1️⃣ Clone the Repository
git clone https://github.com/ManojK2000/employee-management.git
cd bookxpert-employee-management

2️⃣ Install Dependencies
npm install

3️⃣ Start JSON Server (Mock API)

Create a db.json file in the project root:

{
"employees": [],
"users": [
{
"id": 1,
"username": "admin",
"password": "admin123"
}
]
}

<!-- Run JSON Server: -->

In project root folder
npx json-server --watch db.json --port 5000

4️⃣ Start React Application
npm start

The application will run at:

http://localhost:3000

<!-- 🔑 Login Credentials (Mock) -->

Username: admin
Password: admin123

<!-- 📁 Project Structure (High Level) -->

src/
├── components/
│ ├── employee/
│ ├── layout/
│ └── common/
├── pages/
├── services/
├── context/
├── utils/
└── App.jsx

<!-- 🧠 Assumptions & Design Decisions -->

-->JSON Server is used instead of a real backend to simulate REST APIs.
-->Authentication is mocked using Local Storage for simplicity.
-->Images are handled using browser object URLs (no actual file upload).
-->Form validations are handled manually (no external validation libraries).
-->UI is kept minimal and clean, focusing on usability and clarity.
-->Cascading dropdowns (Country → State) are intentionally avoided as per requirements.

<!-- 📌 Future Enhancements (Optional) -->

-->Role-based authentication (Admin/User)
-->Pagination & sorting
-->API error handling & loaders
-->Real backend integration (Node.js / Spring Boot)
-->Unit & integration tests

<!-- 👨‍💻 Developed By -->

Manoj Teja Kalepu
Frontend / MERN Stack Developer
