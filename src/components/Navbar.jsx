import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar bg-base-50 shadow-sm px-4 md:px-6 lg:px-8 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/add_task">Add Task</NavLink>
              </li>
              <li>
                <NavLink to="/all_tasks">All Tasks</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/">
              <btn className="text-3xl font-bold text-gray-700">TaskPilot</btn>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-6">
            <li>
              <NavLink to="/add_task">Add Task</NavLink>
            </li>
            <li>
              <NavLink to="/all_tasks">All Tasks</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          <Link to="/login">
            <button className="bg-yellow-400 px-6 py-2 text-gray-700 font-medium hover:bg-yellow-500 cursor-pointer">
              Log In
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-green-400 px-6 py-2 text-gray-700 font-medium hover:bg-green-500 cursor-pointer">
              Register
            </button>
          </Link>
          <Link to="/">
            <button className="bg-red-500 px-6 py-2 text-white font-medium hover:bg-red-600 cursor-pointer">
              Log Out
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Navbar;