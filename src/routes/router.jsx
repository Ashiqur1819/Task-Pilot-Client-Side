import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTask from "../pages/AddTask/AddTask";
import AllTasks from "../pages/AllTasks/AllTasks";
import TaskUpdate from "../pages/TaskUpdate/TaskUpdate";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>Error page</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add_task",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "all_tasks",
        element: (
          <PrivateRoute>
            <AllTasks></AllTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "task_update/:id",
        element: (
          <PrivateRoute>
            <TaskUpdate></TaskUpdate>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
