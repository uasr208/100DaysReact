import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="h-screen  bg-linear-to-r from-blue-600 to-indigo-500 flex flex-col items-center justify-center">
        <div className="w-32 h-32 bg-rose-600 flex items-center justify-center rounded-full animate__animated animate__slideInDown">
          <User className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-8xl font-bold text-white animate__animated animate__fadeIn">
          Sign up
        </h1>
        <p className="p-12 text-center text-white/80 animate__animated animate__fadeIn">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          odit numquam sint enim, aut illo maiores odio sapiente blanditiis in!
        </p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <form className="w-lg flex flex-col gap-4">
          <input
            placeholder="fullname"
            name="fullname"
            required
            className="border-b border-b-gray-300 py-3 focus:outline-none focus:border-b-blue-600 focus:border-b-2 focus:placeholder-blue-600 focus:font-medium"
          />
          <input
            placeholder="Email id"
            name="email"
            required
            className="border-b border-b-gray-300 py-3 focus:outline-none focus:border-b-blue-600 focus:border-b-2 focus:placeholder-blue-600 focus:font-medium"
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            required
            className="border-b border-b-gray-300 py-3 focus:outline-none focus:border-b-blue-600 focus:border-b-2 focus:placeholder-blue-600 focus:font-medium"
          />
          <button className="mt-4 bg-linear-to-r from-blue-500 to-indigo-500 text-white font-medium py-3 rounded-lg">
            Sign up
          </button>
        </form>
        <div className="mt-3 text-black/60">
          Already have an account ?{" "}
          <Link
            to="/login"
            className="text-blue-400 font-medium hover:underline hover:text-blue-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
