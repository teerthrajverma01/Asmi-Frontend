import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import BASE_URL from "../apis/Config";

const RegisterUserForm = () => {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState();

  const { assessmenttype } = useParams();

  const [loading, setLoading] = useState(false);

  //   const [assessmentCategory, setAssessmentCategory] = useState("");
  //   const [paymentid, setPaymentid] = useState("");
  //   const [assessmentAppeared, setAssessmentAppeared] = useState(false);

  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/aru/postuser`, {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          assessmentCategory: assessmenttype,
          paymentid: "#123",
          assessmentAppeared: "false",
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }

      if (res.ok) {
        setRedirect(true);
        navigate("/");
      } else {
        alert("wrong credentials");
      }
    } catch (error) {
      console.error("Error in registerUserEmail:", error);
      // Handle error (e.g., display error message to user)
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={login}
      className="flex flex-col items-center w-full max-w-md p-6 mx-auto mt-24 bg-white rounded-md shadow-md"
    >
      {/* user */}
      <div className="w-full mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border-b-2 border-neutral300 focus:outline-none focus:border-primary03"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUser(ev.target.value)}
        />
      </div>
      {/* email */}
      <div className="w-full mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border-b-2 border-neutral300 focus:outline-none focus:border-primary03"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </div>

      <input
        className="w-full py-2 text-white rounded-md bg-primary03 hover:bg-primary02 focus:outline-none"
        type="submit"
        value={loading ? "Loading..." : "Register"}
        disabled={loading}
      />
    </form>
  );
};

export default RegisterUserForm;
