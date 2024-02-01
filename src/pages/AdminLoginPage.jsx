import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import BASE_URL from "../apis/Config";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    console.log(res.ok);

    if (res.ok) {
      setRedirect(true);
      navigate("/blogs");
    } else {
      alert("wrong credentials");
    }
  };

  return (
    <form
      onSubmit={login}
      className="flex flex-col items-center w-full max-w-md p-6 mx-auto mt-24 bg-white rounded-md shadow-md"
    >
      <h1 className="mb-8 text-3xl font-semibold text-neutral900">
        Login as Admin
      </h1>
      <div className="w-full mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border-b-2 border-neutral300 focus:outline-none focus:border-primary03"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
      </div>
      <div className="w-full mb-6">
        <input
          type="password"
          className="w-full px-4 py-2 border-b-2 border-neutral300 focus:outline-none focus:border-primary03"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </div>
      <button
        className="w-full py-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default AdminLoginPage;
