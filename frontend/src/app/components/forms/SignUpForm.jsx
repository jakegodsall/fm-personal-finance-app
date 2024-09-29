"use client";

import { useState } from "react";

import Link from "next/link";

import FormInput from "./FormInput";
import FormButton from "../ui/FormButton";
import { setRequestMeta } from "next/dist/server/request-meta";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const data = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if ((!response, ok)) {
        setError(result.error || "Something went wrong. Please try again.");
      } else {
        setSuccess("User registered successfully!");
        setUsername("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full max-w-[540px] rounded-xl bg-white px-5 py-6 sm:p-8"
    >
      <h1 className="mb-8 text-2xl font-bold lg:text-3xl">Sign Up</h1>
      <div className="mb-8">
        <div className="mb-8 flex flex-col gap-4">
          <FormInput
            type="text"
            label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            z
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <FormButton type="submit">Create Account</FormButton>
      </div>
      <p className="text-center text-primary-grey-dark">
        Already have an account?{" "}
        <Link
          href="login"
          className="font-bold text-primary-grey-darkest underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
