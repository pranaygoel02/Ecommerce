"use client"

import { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from "react-hot-toast";
import axios from "axios";
import PasswordIcon from "@/components/Auth/PasswordIcon";
import { useSearchParams } from "next/navigation";

function RegisterLogic() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  
  const inputs = [
    {
      label: "Name",
      placeholder: "Please enter your name",
      name: "name",
      type: "text",
    },
    {
      label: "Email Address",
      placeholder: "Please enter your email",
      name: "email",
      type: "email",
    },
    {
      label: "Phone Number",
      placeholder: "Please enter your contact number",
      name: "phone",
      type: "tel",
    },
    {
      label: "Password",
      placeholder: "Please enter your password",
      name: "password",
      type: !showPass ? "password" : "text",
      rightIcon: <PasswordIcon cb={() => setShowPass(!showPass)} state={showPass} />
    },
    {
      label: "Confirm Password",
      placeholder: "Please re-enter your password",
      name: "c_password",
      type: !showPass ? "password" : "text",
      rightIcon: <PasswordIcon cb={() => setShowPass(!showPass)} state={showPass} />
    },
  ];

  const signupUser = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const { name, email, phone, password, c_password } = data;
    console.log(name, email, phone, password, c_password);
    if(password !== c_password) {
      toast.error("Passwords do not match")
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/register", {
        name,
        email,
        phone,
        password
      })
      toast.success("User registered successfully");
    } catch (err: any) {
      toast.error(err.response.data);
    }
    finally {
      setLoading(false);
    }   
  }

  return {
    inputs,
    loading,
    showPass,
    setShowPass,
    signupUser,
    error
  };
}

export default RegisterLogic;