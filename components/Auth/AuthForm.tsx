import Google from "../NextAuth/Google";
import OAuth from "../NextAuth/OAuth";
import ProtectedRoute from "../ProtectedRoute";
import { FormProps } from "@/Props/formProps";
import Form from "../Form";

function AuthForm ({
  inputs,
  formSubmitFnc,
  formAction,
  loading,
  submitBtnText,
} : FormProps) {
  return (
    <>
    <ProtectedRoute>
      <Form inputs={inputs} formSubmitFnc={formSubmitFnc} submitBtnText={submitBtnText} loading={loading} />
      <div className="text-center">
        <p className="my-2 text-sm text-neutral-500">OR</p>
        <OAuth provider="google" component={<Google/>} />      
      </div>
    </ProtectedRoute>
    </>
  );
};

export default AuthForm;
