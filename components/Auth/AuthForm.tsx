import React from "react";
import Input from "../Input";
import Button from "../Button";
import Google from "../NextAuth/Google";
import OAuth from "../NextAuth/OAuth";
import ProtectedRoute from "../ProtectedRoute";

interface AuthFormProps {
  inputs: {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    show?: boolean;
    label?: string;
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
  }[];
  formAction?: (formData: FormData) => void,
  formSubmitFnc?: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  submitBtnText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  inputs,
  formSubmitFnc,
  formAction,
  loading,
  submitBtnText,
}) => {
  return (
    <>
    <ProtectedRoute>
      <form
        onSubmit={formSubmitFnc}
        className="w-full flex flex-col gap-4"
      >
        {inputs.map((input) => (
          <Input key={input.name} show={true} {...input} />
        ))}
        <Button style="w-full" loading={loading} type={"submit"} text={submitBtnText} />
      </form>
      <div className="text-center">
        <p className="my-4 text-sm text-neutral-500">OR</p>
        <OAuth provider="google" component={<Google/>} />      
      </div>
    </ProtectedRoute>
    </>
  );
};

export default AuthForm;
