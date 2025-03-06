# Advanced To-Do Application

## Overview
This is a feature-rich To-Do application built using **React, Redux, Tailwind CSS, and Redux Thunk/Saga**. It supports authentication, task management with prioritization, a weather widget, a dynamic UI with dark mode, and a statistics pie chart.

## Features
- **User Authentication** (Login/Register with Profile Photo Upload)
- **Task Management** (CRUD operations for tasks)
- **Task Prioritization** (High, Medium, Low)
- **Dynamic View Toggle** (Grid/List view for tasks)
- **Weather Widget** (Fetches real-time weather data based on location)
- **Dark Mode Toggle**
- **Sidebar with User Profile & Task Categories**
- **Pie Chart for Task Statistics** (Pending & Completed Tasks)
- **Responsive Design** (Optimized for mobile & desktop)

## Screenshots


## Tech Stack
- **Frontend:** React, Redux (with Redux Thunk/Saga), Tailwind CSS
- **Backend:** Node.js, Express, MongoDB (if used)
- **State Management:** Redux Toolkit
- **Authentication:** Mocked Redux authentication (or Firebase if integrated)
- **API Integration:** OpenWeatherMap API

---
## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/your-repo.git
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
