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
        alert(data.message);
        // console.log(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="loginBox">
      <p>Welcome back! 👋</p>
      <h1>Sign in to your account</h1>
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <div className="inputFields">
          <label>Email</label>
          <input autoComplete="off" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="inputFields">
          <label>Password</label>
          <input autoComplete="off" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
