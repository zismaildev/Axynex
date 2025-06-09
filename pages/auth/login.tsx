import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import Link from "next/link";

import { signInWithEmail, signInWithGoogle } from "@/lib/auth";
import DefaultLayout from "@/layouts/default";
import { GoogleIcon } from "@/components/icons";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await signInWithEmail(username, password);

    if (error) setError(error.message);
    else window.location.href = "/";
  };

  const handleGoogleLogin = async () => {
    const { error } = await signInWithGoogle();

    if (error) setError(error.message);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center min-h-[80vh] via-slate-50 to-slate-200">
        <div className="w-full max-w-md mx-auto">
          <div className="rounded-2xl shadow-xl px-8 py-10 flex flex-col gap-6">
            <div className="mb-2 text-center">
              <h1 className="text-2xl font-bold mb-1">
                Sign in to Zismail Shop
              </h1>
              <p className="text-sm">
                Enter your credentials to access your account
              </p>
            </div>
            <Form className="flex flex-col gap-4" onSubmit={handleEmailLogin}>
              <Input
                isRequired
                className="rounded-lg"
                errorMessage="Please enter a valid username"
                label="Username"
                labelPlacement="outside"
                name="username"
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                isRequired
                className="rounded-lg"
                errorMessage="Please enter a valid password"
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex gap-2 mt-2">
                <Link href="./forget">Forgot password?</Link>
              </div>
              <div className="flex call gap-2 mt-2">
                <Button
                  className="w-full font-semibold"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
              </div>
              {error && (
                <div className="text-small text-danger text-center">
                  {error}
                </div>
              )}
            </Form>
            <div className="flex items-center gap-2 my-2">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-xs text-slate-400">or</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <Button
              className="w-full font-semibold flex items-center justify-center gap-2"
              color="primary"
              startContent={<GoogleIcon />}
              variant="bordered"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
