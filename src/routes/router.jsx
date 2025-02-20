import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTask from "../pages/AddTask/AddTask";
import AllTasks from "../pages/AllTasks/AllTasks";


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
        element: <AddTask></AddTask>,
      },
      {
        path: "all_tasks",
        element: <AllTasks></AllTasks>
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