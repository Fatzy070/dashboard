import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(""); // change from email → username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://dashboardbackend-0yaz.onrender.com/login", {
        username, // send username
        password,
      });

      // Save token & username in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username);
      localStorage.setItem("avatar", res.data.user.avatar || "");


      // Redirect to dashboard
      navigate("/dashboard"); // or "/" if your dashboard is root
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <form
        onSubmit={handleLogin}
        className="w-[380px] p-8 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-lg border border-white/30 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-white tracking-wide">
          Welcome Back 👋
        </h2>
        <p className="text-sm text-gray-200 text-center">
          Login to access your dashboard
        </p>

        {error && (
          <p className="text-red-400 text-center bg-red-100/20 p-2 rounded-md">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition duration-300 shadow-md"
        >
          Login
        </button>

        <div className="text-center text-sm text-gray-200">
          Don’t have an account?{" "}
          <NavLink
            to="/"
            className="font-semibold text-white hover:underline"
          >
            Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
