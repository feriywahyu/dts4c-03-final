import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const testAccount = () => {
    logInWithEmailAndPassword("test@gmail.com", "test123");
  };

  return (
    <section className="relative py-36 bg-black overflow-hidden">
      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src=""
        alt=""
      />
      {/* src image */}
      <div className="relative z-10 container px-4 mx-auto">
        <div className="mb-8 p-12 max-w-xl mx-auto border border-gray-800 rounded-4xl">
          <h2
            className="mb-3 text-5xl text-white text-center font-semibold leading-tight"
            contenteditable="true"
          >
            Login
          </h2>
          <p className="mb-11 pb-11 font-medium text-center text-lg text-gray-400 leading-normal border-b border-gray-900">
            Login to your account
          </p>
          <form>
            <label className="block mb-4">
              <p className="mb-2 text-white font-semibold leading-normal">
                Email Address
              </p>
              <input
                onChange={handleChange}
                className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-800 rounded-lg focus:ring focus:ring-indigo-300"
                id="email"
                name="email"
                type="text"
                placeholder="Enter email address"
              />
            </label>
            <label className="block mb-4">
              <p className="mb-2 text-white font-semibold leading-normal">
                Password
              </p>
              <input
                onChange={handleChange}
                className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-800 rounded-lg focus:ring focus:ring-indigo-300"
                id="password"
                name="password"
                type="password"
                placeholder="********"
                autocomplete="off"
              />
            </label>
            <div className="flex flex-wrap justify-between -m-2 mb-4">
              <div className="w-auto p-2">
                <div className="flex items-center">
                  <input
                    className="w-4 h-4"
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                  />
                  <label
                    className="ml-2 text-sm text-white font-medium"
                    for="default-checkbox"
                  >
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="w-auto p-2">
                <a
                  href="reset"
                  className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              id="signin"
              onClick={(e) => {
                e.preventDefault();
                logInWithEmailAndPassword(userData.email, userData.password);
              }}
              className="mb-4 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
              type="button"
            >
              Sign In
            </button>
            <button
              id="signin"
              onClick={(e) => {
                e.preventDefault();
                testAccount();
              }}
              className="mb-4 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
              type="button"
            >
              Login with test account
            </button>
            <button
              id="signinwithgoogle"
              onClick={(e) => {
                e.preventDefault();
                signInWithGoogle();
              }}
              className="py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
              type="button"
            >
              Sign In with Google
            </button>
            <div>
              <Link to="/reset">Forgot Password</Link>
            </div>
          </form>
        </div>
        <p className="text-white text-center font-medium">
          <span>Don’t have an account? </span>
          <Link
            className="text-indigo-600 hover:text-indigo-700"
            to="/register"
          >
            Create free account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
