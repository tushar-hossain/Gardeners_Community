import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, setUsers, createGoogleUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // login users
    loginUser(email, password)
      .then((result) => {
        setUsers(result.user);
        toast.success("Login successfully");
        navigate(location.state || "/");
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };

  // login google user
  const handelLoginGoogle = () => {
    createGoogleUser()
      .then((result) => {
        toast.success("Login successfully");
        setUsers(result.user);
        navigate(location.state || "/");
      })
      .catch(() => {
        toast.error("Invalid email");
      });
  };

  return (
    <div className="py-12">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <form onSubmit={handelLogin} className="space-y-6">
          {/* email */}
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter E-mail"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* password */}
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex justify-end text-xs dark:text-white">
              <Link to="/reset-password" className="mt-3">
                {" "}
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-white dark:bg-violet-600 cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-white">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          {/* Google */}
          <button
            onClick={handelLoginGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-white">
          Don't have an account?{" "}
          <Link to="/registration" className=" underline font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
