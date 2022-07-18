import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../common/ErrorMessage";
import Logo from "../images/login_logo.jpeg";
import "../styles/login.css";
const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
      setLoading(true);
    if (data?.username === "test" && data?.password === "test") {
      localStorage?.setItem("auth-token", "qwertyuiop");
      setTimeout(() => {
        setLoading(false);
        history.push("/");
      }, 1000);
    } else {
      setTimeout(() => {
        setErr(true);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-body">
        <div>
          <img src={Logo} alt="logo" width={150} height={150} />
        </div>
        <div className="login-header">
          <h1>Sign in to Hybr1d</h1>
        </div>
        <div className="login-form">
          <label htmlFor="login-label">Username</label>
          <input
            type="text"
            name="username"
            value={data?.username}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="login-label">Password</label>
          <input
            type="password"
            name="password"
            value={data?.password}
            onChange={(e) => handleChange(e)}
          />
          {err && (
            <ErrorMessage
              handleClose={() => setErr(false)}
              errMsg="Incorrect username or password."
            />
          )}
          <div
            className={`login-btn ${loading ? "login-btn-loading" : ""}`}
            onClick={() => handleLogin()}
          >
            {loading ? "Signing in ..." : "Sign in"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
