import { useState } from "react";
import loginbg from "../../assets/bg4.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import googleImage from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, userLogin, setLoading, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password).then((res) => {
      setUser(res.user);
      toast.success("Login Successful!");
      navigate("/");
      setLoading(false);
    });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Login successful!`);
        navigate("/");
      })
      .catch(() => {
        toast.error(
          "Login failed. Please check your connection and try again."
        );
      });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${loginbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-12 invisible">dfdfd</div>
      <div className="card md:max-w-md md:mx-auto mx-4 bg-[#ffffff] p-4 md:p-6 lg:p-12 rounded-none col-span-3">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Log in to Your Account
        </h2>
        <form onSubmit={handleLogin} className="mt-6">
          <div className="form-control">
            <label className="label px-0">
              <span className="label-text font-medium text-gray-700">
                Email:
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="grow w-full text-gray-700 text-base input border border-gray-200 rounded-none focus:border-green-400 focus:outline-none"
              required
            />
          </div>
          <div className="form-control mt-2 relative">
            <label className="label px-0">
              <span className="label-text font-medium text-gray-700">
                Password:
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              className="grow w-full text-gray-700 text-base input border border-gray-200 rounded-none focus:border-green-400 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[38px] text-gray-500"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            <label className="label">
              <a
                href="#"
                className="label-text-alt text-sm link link-hover text-gray-700"
              >
                Forgot Password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="bg-green-400 w-full px-6 py-2 text-gray-700 font-medium hover:bg-green-500 cursor-pointer">
              Log In
            </button>
          </div>
        </form>
        <div className="divider font-medium text-gray-700">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-3 justify-center px-4 py-2 font-medium border border-gray-200 cursor-pointer hover:bg-gray-50"
        >
          <img src={googleImage} className="w-6" alt="" />
          <span>Continue With Google</span>
        </button>
        <div className="mt-3">
          <p className="text-gray-700 text-center">
            {"Don't have an account?"}{" "}
            <span className="underline text-yellow-500 font-medium">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="invisible mt-12">dfd</div>
    </div>
  );
};

export default Login;
