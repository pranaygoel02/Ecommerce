"use client";

import PasswordIcon from "@/components/Auth/PasswordIcon";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

function LoginLogic() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const inputs = [
    {
      label: "Email Address",
      placeholder: "Please enter your email",
      name: "email",
      type: "email",
      //   leftIcon: <UserIcon/>,
    },
    {
      //   leftIcon: <LockIcon/>,
      label: "Password",
      placeholder: "Please enter your password",
      name: "password",
      type: !showPass ? "password" : "text",
      rightIcon: (
        <PasswordIcon cb={() => setShowPass(!showPass)} state={showPass} />
      ),
    },
  ];

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const { email, password } = data;
    console.log(email, password);
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });
      if (res?.error) {
        console.log('error: ', res.error);
        toast.error(res.error);
      } else if (res?.ok && !res?.error) {
        toast.success("Logged in successfully");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    inputs,
    loading,
    showPass,
    setShowPass,
    loginUser,
    error
  };
}

export default LoginLogic;
