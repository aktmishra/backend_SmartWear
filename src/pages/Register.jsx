import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User detail", { name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-4">
            <h2 className=" text-xl  font-extrabold tracking-tighter">
              WearSmart
            </h2>
          </div>

          <h2 className="text-3xl font-bold text-center mb-5">Hey there!👋</h2>
          <p className="text-center mb-6 text-gray-500">
            Register yourself here.
          </p>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2 ">
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 "
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2 "
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 "
          >
            Sign Up
          </button>

          <p className="mt-5 text-center text-sm text-gray-700">
            Already have an account?
            <Link to="/login" className="text-blue-500 underline ">
              {" "}
              Log In
            </Link>
          </p>
        </form>
      </div>
      {/* Right Section */}
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="loginImg"
            className="h-[700px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
