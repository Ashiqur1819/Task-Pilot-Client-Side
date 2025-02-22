import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="navbar bg-base-50 shadow-sm px-4 md:px-6 lg:px-8 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium text-gray-700"
          >
            {user && (
              <>
                <li>
                  <NavLink to="/add_task">Add Task</NavLink>
                </li>
                <li>
                  <NavLink to="/all_tasks">All Tasks</NavLink>
                </li>
                <li>
                  <h2 className="bg-green-100 px-3 py-1 text-sm md:px-6 md:py-2 md:text-base text-gray-700 font-semibold">
                    {user?.displayName}
                  </h2>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <Link to="/">
            <button className="text-xl md:text-2xl lg:text-3xl ml-1 font-bold text-gray-700 cursor-pointer">
              TaskPilot
            </button>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-6 flex items-center justify-center font-medium text-gray-700">
          {user && (
            <>
              <li>
                <NavLink to="/add_task">Add Task</NavLink>
              </li>
              <li>
                <NavLink to="/all_tasks">All Tasks</NavLink>
              </li>
              <li>
                <h2 className="bg-green-100 px-3 py-1 text-sm md:px-6 md:py-2 md:text-base text-gray-700 font-semibold">
                  {user?.displayName}
                </h2>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {!user && (
          <>
            <Link to="/login">
              <button className="bg-yellow-400 px-3 py-1 text-sm md:px-6 md:py-2 md:text-base text-gray-700 font-medium hover:bg-yellow-500 cursor-pointer">
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-green-400 px-3 py-1 text-sm md:px-6 md:py-2 md:text-base text-gray-700 font-medium hover:bg-green-500 cursor-pointer">
                Register
              </button>
            </Link>
          </>
        )}
        {user && (
          <>
            <Link to="/">
              <button
                onClick={logOut}
                className="bg-red-500 px-3 py-1 text-sm md:px-6 md:py-2 md:text-base text-white font-medium hover:bg-red-600 cursor-pointer"
              >
                Log Out
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
