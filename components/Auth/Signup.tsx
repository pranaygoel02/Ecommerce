"use client"

import React from "react";
import AuthHeader from "./AuthHeader";
import AuthForm from "./AuthForm";
import RegisterLogic from "@/logic/Register.logic";

const Signup: React.FC = () => {
  const { inputs, signupUser, loading } = RegisterLogic();

  return (
    <section className="w-full">
      <AuthHeader
        title={"Create a new account"}
        subheader={"Already have an account?"}
        link={"/signin"}
        linkText={"Sign in"}
      />
      <AuthForm
        inputs={inputs}
        formSubmitFnc={signupUser}
        loading={loading}
        submitBtnText={"Sign up"}
      />
    </section>
  );
};

export default Signup;