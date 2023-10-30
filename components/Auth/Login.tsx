"use client"

import React from "react";
import AuthHeader from "./AuthHeader";
import AuthForm from "./AuthForm";
import LoginLogic from "@/logic/Login.logic";

const Login: React.FC = () => {
  const { inputs, loginUser, loading } = LoginLogic();

  return (
    <section className="w-full">
      <AuthHeader
        title={"Sign in to your account"}
        subheader={"Don't have an account?"}
        link={"/signup"}
        linkText={"Sign up"}
      />
      <AuthForm
        inputs={inputs}
        formSubmitFnc={loginUser}
        loading={loading}
        submitBtnText={"Sign in"}
      />
    </section>
  );
};

export default Login;