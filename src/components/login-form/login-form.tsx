"use client";
import "./style.css";
import Loader from "../loader/loader";
import { useEffect, useState } from "react";
import { PiSignInFill } from "react-icons/pi";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

function LoginForm() {
  const [currentForm, setCurrentForm] = useState<string>("Sign Up");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let right = "";
    let left = "";
    if (currentForm == "Sign Up") {
      left = "0px";
      right = `-400px`;
    } else {
      right = `0px`;
      left = `-400px`;
    }
    document.getElementById("welcome-back-banner")!.style.right = right;
    document.getElementById("welcome-banner")!.style.left = left;
    document.getElementById("signin-form")!.style.left = right;
    document.getElementById("signup-form")!.style.right = left;
  }, [currentForm]);

  return (
    <div className="form-container-card">
      <div className="sign-btns-container">
        <button
          className="sign-tab-btn"
          style={
            currentForm == "Sign In"
              ? { color: `black`, background: `white` }
              : { color: `white`, background: `transparent` }
          }
          onClick={() => {
            setCurrentForm("Sign In");
          }}
        >
          Sign In
        </button>
        <button
          className="sign-tab-btn"
          style={
            currentForm == "Sign Up"
              ? { color: `black`, background: `white` }
              : { color: `white`, background: `transparent` }
          }
          onClick={() => {
            setCurrentForm("Sign Up");
          }}
        >
          Sign Up
        </button>
      </div>
      <div className="banner" id="welcome-back-banner">
        Welcome back !!
      </div>
      <div className="banner" id="welcome-banner">
        Welcome !!
      </div>
      <div className="auth-form-container">
        <form
          className="signup-form"
          id="signup-form"
          onSubmit={(event: any) => event.preventDefault()}
        >
          <div className="auth-form">
            <div className="usernamer-input-container">
              <input
                name="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>

            <input name="email" type="text" placeholder="Email" required />
            <div className="password-input-container">
              <p
                className="eye"
                onClick={() => {
                  setShowPassword((current) => !current);
                }}
              >
                <Eye show={showPassword} />
              </p>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="passwordField"
                required
              />
            </div>
            <button id="sign-btn" type="submit">
              <PiSignInFill className="w-4 h-4" />
              Sign Up
            </button>
            <Loading loading={loading} />
          </div>
        </form>
        <form
          className="signin-form"
          id="signin-form"
          onSubmit={(event: any) => event.preventDefault()}
        >
          <div className="auth-form">
            <input name="email" type="text" placeholder="Email" required />
            <div className="password-input-container">
              <p
                className="eye"
                onClick={() => {
                  setShowPassword((current) => !current);
                }}
              >
                <Eye show={showPassword} />
              </p>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="passwordField"
                required
              />
            </div>
            <button id="sign-btn" type="submit">
              <PiSignInFill className="w-4 h-4" />
              Sign Up
            </button>
            <Loading loading={loading} />
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Forgot Password?
            </a>
            <div className="extra"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

function Eye(props: any) {
  return props.show ? (
    <HiOutlineEye className="w-4 h-4" />
  ) : (
    <HiOutlineEyeSlash className="w-4 h-4" />
  );
}

function Loading(props: any) {
  return props.loading ? <Loader /> : "";
}
