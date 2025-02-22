# TaskPilot

## Short Description
TaskPilot is a Task Management Application where users can add, edit, and delete tasks. Tasks are categorized into three sections: **To Do, In Progress, and Done**. Changes are saved instantly to the database to maintain persistence. The app features authentication using Firebase and ensures a real-time, responsive user experience.

## Live Links
- **Live Application:** https://task-pilot-1.web.app
- **Frontend Repository:** https://github.com/Ashiqur1819/Task-Pilot-Client-Side
- **Backend Repository:** https://github.com/Ashiqur1819/Task-Pilot-Server-Side

## Dependencies
### Frontend
- React.js (via Vite.js)
- React Router
- Firebase Authentication
- Axios (for API requests)
- Tailwind CSS (for styling)

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- CORS
- dotenv

## Installation Steps
### Frontend Setup
1. Clone the frontend repository:
   ```sh
   git clone https://github.com/Ashiqur1819/Task-Pilot-Client-Side.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Task-Pilot-Client-Side
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables (`.env` file):
   ```sh
   FIREBASE_API_KEY=your_firebase_api_key
   ``` 
4. Start the development server:
   ```sh
   npm run dev
   ```

### Backend Setup
1. Clone the backend repository:
   ```sh
   git clone https://github.com/Ashiqur1819/Task-Pilot-Server-Side
   ```
2. Navigate to the project folder:
   ```sh
   cd Task-Pilot-Server-Side
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables (`.env` file):
   ```sh
   MONGO_URI=your_mongodb_connection_string
   ```
5. Start the backend server:
   ```sh
   node index.js
   ```

## Technologies Used
### Frontend
- **React.js**
- **Firebase Authentication**
- **React Router**
- **Axios**
- **Tailwind CSS**

### Backend
- **Node.js & Express.js**
- **MongoDB** 
---

