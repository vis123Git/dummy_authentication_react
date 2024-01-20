import React, { useState } from "react";
import "../login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(data));
        onLogin(data);
      } else {
        // Handle error display in the UI
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="loginBox">
      <p>Welcome back! 👋</p>
      <h1>Sign in to your account</h1>
      <form>
        <div>
          <label>Your email</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div>
          <label>Your password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
