import React, { useEffect, useState } from "react";
import Head from "../Head";
import Nav from "../../navigations/Nav";

const Profile = () => {
  const [user, setUser] = useState({
  username: localStorage.getItem("username") || "",
  email: "",
  avatar: localStorage.getItem("avatar") || "",
  bio: "",
  createdAt: "",
});

  const [preview, setPreview] = useState(null); // local preview for new avatar
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    // fetch full profile from backend
    fetch("https://dashboardbackend-0yaz.onrender.com/profile", {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
})

      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
          if (data.user.avatar) {
            localStorage.setItem("avatar", data.user.avatar);
        }
      }
      })
    
      .catch((err) => console.log(err));
  }, [token]);

  // handle avatar selection and upload
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // show preview immediately
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await fetch("https://dashboardbackend-0yaz.onrender.com/profile/avatar", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (data.avatar) setUser((prev) => ({ ...prev, avatar: data.avatar }));
    } catch (err) {
      console.log(err);
      setError("Failed to upload avatar");
    }
  };

  return (
    <div>
      {/* Header and Nav */}
      <Head title="Profile" name={user.username} />
      <Nav title="Profile" name={user.username} />

      {/* Profile Card */}
      <div className="flex justify-center mt-10">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
          {/* Avatar */}
          <div className="relative w-28 h-28 mx-auto">
           <img
  src={
    preview ||
    (user.avatar
      ? user.avatar // Cloudinary URL
      : `https://ui-avatars.com/api/?name=${user.username}&background=0D8ABC&color=fff`)
  }
  alt="avatar"
  className="w-28 h-28 rounded-full object-cover"
/>
            <label className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full cursor-pointer hover:bg-blue-600">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarUpload}
              />
              <span className="text-white text-sm">✏️</span>
            </label>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {user.username}
          </h2>
          {user.email && <p className="text-gray-500">{user.email}</p>}
          <p className="mt-3 text-gray-600 italic">
            {user.bio || "No bio yet..."}
          </p>
          {user.createdAt && (
            <p className="mt-2 text-sm text-gray-400">
              Joined: {new Date(user.createdAt).toDateString()}
            </p>
          )}

          {error && (
            <p className="text-red-500 mt-2 text-sm font-medium">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
