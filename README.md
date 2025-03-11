# Advanced To-Do Application

Live link :- [Link]](https://incredible-sopapillas-8fcadb.netlify.app/)

## Overview

This is a feature-rich To-Do application built using **React, Redux, Tailwind CSS, and Redux Thunk/Saga**. It supports authentication, task management with prioritization, a weather widget, a dynamic UI with dark mode, and a statistics pie chart.

## Features

-  **User Authentication** (Login/Register with Profile Photo Upload)
-  **Task Management** (CRUD operations for tasks)
-  **Task Prioritization** (High, Medium, Low)
-  **Dynamic View Toggle** (Grid/List view for tasks)
-  **Weather Widget** (Fetches real-time weather data based on location)
-  **Dark Mode Toggle**
-  **Sidebar with User Profile & Task Categories**
-  **Pie Chart for Task Statistics** (Pending & Completed Tasks)
-  **Responsive Design** (Optimized for mobile & desktop)

## Screenshots

## Screenshots

![Screenshot](https://github.com/SauravChaudhary26/quadb_tech_project/blob/main/src/assets/1.png)
![Screenshot](https://github.com/SauravChaudhary26/quadb_tech_project/blob/main/src/assets/2.png)
![Screenshot](https://github.com/SauravChaudhary26/quadb_tech_project/blob/main/src/assets/3.png)
![Screenshot](https://github.com/SauravChaudhary26/quadb_tech_project/blob/main/src/assets/4.png)
![Screenshot](https://github.com/SauravChaudhary26/quadb_tech_project/blob/main/src/assets/5.png)
![Screenshot](https://github.com/SauravChaudhary26/quadb_tech_project/blob/main/src/assets/6.png)

## Tech Stack

-  **Frontend:** React, Redux (with Redux Thunk/Saga), Tailwind CSS
-  **Backend:** Node.js, Express, MongoDB (if used)
-  **State Management:** Redux Toolkit
-  **Authentication:** Mocked Redux authentication (or Firebase if integrated)
-  **API Integration:** OpenWeatherMap API

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/SauravChaudhary26/quadb_tech_project
cd your-repo
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
REACT_APP_API_KEY=your_openweathermap_api_key
```

### 4. Run the Application

```sh
npm start
```

The app will be available at `http://localhost:5173`.

---

## Folder Structure

```
📂 src
 ├── 📂 components
 │    ├── 📂 navbar
 │    │    ├── Navbar.jsx
 │    ├── 📂 sidebar
 │    │    ├── Sidebar.jsx
 │    ├── 📂 task
 │    │    ├── TaskForm.jsx
 │    │    ├── TaskList.jsx
 │    │    ├── TaskItem.jsx
 │    │    ├── TaskDetailsSidebar.jsx
 │    ├── 📂 weather
 │    │    ├── WeatherWidget.jsx
 │
 ├── 📂 pages
 │    ├── Home.jsx
 │    ├── Login.jsx
 │    ├── Register.jsx
 │
 ├── 📂 redux
 │    ├── AuthSlice.js
 │    ├── TaskSlice.js
 │    ├── ThemeSlice.js
 │    ├── UiSlice.js
 │    ├── Store.js
 │
 ├── Layout.jsx
 ├── App.jsx
 ├── index.js
```
