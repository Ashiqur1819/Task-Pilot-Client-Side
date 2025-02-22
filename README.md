# TaskPilot

## Short Description
TaskPilot is a Task Management Application that allows users to add, edit, and delete tasks. Tasks are categorized into three sections: To-Do, In Progress, and Done. Changes are saved instantly to the database to maintain persistence. The app features authentication using Firebase and ensures a real-time, responsive user experience.

## Live Links
- **Live Application:** https://task-pilot-1.web.app
- **Frontend Repository:** https://github.com/Ashiqur1819/Task-Pilot-Client-Side
- **Backend Repository:** https://github.com/Ashiqur1819/Task-Pilot-Server-Side

## Technologies Used
### Frontend
- **React.js**
- **Firebase Authentication**
- **React Router**
- **Axios**
- **Tailwind CSS**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** 
---

## Dependencies
### Frontend
- @tailwindcss/vite (^4.0.7)
- @tanstack/react-query (^5.66.8)
- axios (^1.7.9)
- firebase (^11.3.1)
- localforage (^1.10.0)
- match-sorter (^8.0.0)
- react (^19.0.0)
- react-dom (^19.0.0)
- react-icons (^5.5.0)
- react-router-dom (^7.2.0)
- react-toastify (^11.0.3)
- sort-by (^1.2.0)
- sweetalert2 (^11.17.2)
- tailwindcss (^4.0.7)

### Backend
- cors (^2.8.5)
- dotenv (^16.4.7)
- express (^4.21.2)
- mongodb (^6.13.0)


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


