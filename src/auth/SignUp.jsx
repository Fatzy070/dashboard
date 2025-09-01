import React, { useState } from "react";
import { useNavigate , NavLink } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dashboardbackend-0yaz.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        navigate("/login")
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ Something went wrong!");
    }
  };

  return (
  <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <form
        onSubmit={handleSubmit}
        className="w-[380px] p-8 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-lg border border-white/30 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-white tracking-wide">
          Create an Account ✨
        </h2>
        <p className="text-sm text-gray-200 text-center">
          Sign up to get started with your dashboard
        </p>

        {message && (
          <p className="text-red-400 text-center bg-red-100/20 p-2 rounded-md">
            {message}
          </p>
        )}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition duration-300 shadow-md"
        >
          Sign Up
        </button>

        <div className="text-center text-sm text-gray-200">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="font-semibold text-white hover:underline"
          >
            Login
          </NavLink>
        </div>
      </form>
    </div>


  );
};

export default Signup;
