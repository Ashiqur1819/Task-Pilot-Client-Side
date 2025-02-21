import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen mx-auto flex items-center justify-center">
        <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon"/>
    </div>;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
