"use client";
import "./style.css";
import React, { useState } from "react";
import PageLoading from "@/components/loading/loading";
import Loader from "@/components/loader/loader";
import LoginForm from "@/components/login-form/login-form";
import { CameraIcon, PhotoIcon } from "@heroicons/react/24/solid";

function AuthPage() {
  const [verifying, setVerifying] = useState<boolean>(false);

  return (
    <main
      className="main-container"
      style={{
        backgroundImage: `url("/background.jpg")`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
    >
      {verifying ? (
        <div className="loaders-container">
          <PageLoading />
          <Loader />
        </div>
      ) : (
        <LoginForm />
      )}
    </main>
  );
}

export default AuthPage;
