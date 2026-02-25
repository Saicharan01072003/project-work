# ReactJS Employee Management Assignment

This project is a **ReactJS Application** developed as part of a technical assignment.  
The application consists of **4 screens** and integrates with a **REST API** and **MySQL Database**.

---

## 🚀 Features

✔ Login Authentication  
✔ Employee List from REST API  
✔ Employee Details Page  
✔ Camera Capture Feature  
✔ Photo Result Page  
✔ Salary Bar Chart  
✔ MySQL Database Integration  
✔ REST API Integration  
✔ Responsive UI

---

## 📌 Application Screens

### 1️⃣ Login Page
- User must enter:
  - Username: **test**
  - Password: **123456**
- On successful login user is redirected to List Page.

---

### 2️⃣ List Page
Displays employee data from REST API.

Columns:
- Name
- Salary
- City
- Action (Details Button)

Features:
- Logout Button (Top Right)
- View Chart Button (Below Table)

API Used: http://localhost/getemployees.php
---

### 3️⃣ Details Page

Displays selected employee details:

- Name
- Salary
- City

Features:

✔ Camera Access  
✔ Capture Photo Button

---

### 4️⃣ Photo Result Page

Displays captured photo.

Features:

✔ Shows captured image  
✔ Clean UI

---

### 5️⃣ Salary Chart Page

Displays salary bar chart for employees.

Features:

✔ Vertical Bar Graph  
✔ Dynamic Data from API  
✔ Responsive Chart

---

## 🛠 Technologies Used

- ReactJS
- React Router DOM
- JavaScript
- HTML
- CSS
- MySQL
- PHP
- REST API
- Axios
- Vite

---

## 📂 Project Structure 
react-assignment/
│
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── List.jsx
│   │   ├── Details.jsx
│   │   ├── Chart.jsx
│   │   ├── PhotoResult.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── backend/
│   └── getemployees.php
│
└── package.json
Table Structure:

| id | name | salary | city |
|----|------|--------|------|

Example Data:
charan | 30000 | Hyderabad
Sai | 25000 | Bangalore
hari | 30000 | Hyderabad
Pavan | 25000 | Bangalore
raju | 20000 | Chennai
varun | 35000 | Delhi
Rani | 45000 | Bangalore

▶️ How to Run Project

Step 1 — Start XAMPP

Start:
	•	Apache
	•	MySQL
Step 2 — Run React Project
 npm install
 npm run dev
📷 Camera Feature
    Uses browser camera API:navigator.mediaDevices.getUserMedia()
📊 Chart Feature

Displays employee salary graph.
	•	Dynamic data
	•	Vertical bars
	•	Responsive layout

⸻

👨‍💻 Author

 Valgula Sai Charan
