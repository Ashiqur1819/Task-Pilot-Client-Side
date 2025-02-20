import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import googleImage from "../../assets/google.png"
import registerImage from "../../assets/registerbg.jpg"
import { Link } from "react-router-dom";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${registerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="invisible mb-12">dfd</div>
        <div className="card max-w-md mx-auto bg-white p-4 md:p-6 lg:p-12 h-full rounded-none col-span-3">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Create Your Account
          </h2>
          <form className="mt-6">
            <div className="form-control mt-1">
              <label className="label px-0">
                <span className="label-text font-medium text-gray-700">
                  Name:
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="grow w-full text-gray-700 text-base input border border-gray-200 rounded-none focus:border-green-400 focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-1">
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
            <div className="form-control relative mt-1">
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
            </div>
            <div className="form-control mt-6">
              <button className="bg-green-400 w-full px-6 py-2 text-gray-700 font-medium hover:bg-green-500 cursor-pointer">
                Register
              </button>
            </div>
          </form>
          <div className="divider font-medium text-gray-700">OR</div>
          <button className="flex items-center gap-3 justify-center px-4 py-2 font-medium border border-gray-200 cursor-pointer hover:bg-gray-50">
            <img src={googleImage} className="w-6" alt="" />
            <span>Continue With Google</span>
          </button>
          <div className="mt-3">
            <p className="text-gray-700 text-center">
              Already have an account?{" "}
              <span className="underline text-yellow-500 font-medium">
                <Link to="/login">Log In</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="invisible mt-12">dfd</div>
      </div>
    );
};

export default Register;