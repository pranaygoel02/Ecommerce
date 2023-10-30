import { FormProps } from "@/Props/formProps";
import Input from "./Input";
import Button from "./Button";
import { Suspense } from "react";

function Form({
  inputs,
  formSubmitFnc,
  submitBtnText,
  loading,
  formAction,
  defaultValues,
}: FormProps) {

  console.log('defaultValues: ', defaultValues);
  
  
  inputs =
    inputs &&
    inputs.map((input) => {
      return defaultValues && input && defaultValues[input.name as keyof typeof defaultValues]
        ? {
            ...input,
            defaultValue: defaultValues[input.name as keyof typeof defaultValues],
          }
        : input;
    });

    console.log('inputs: ', inputs);    

  return (
    <Suspense fallback={<div className="p-4 bg-gray-500 w-full h-12"></div>}>
      <form
        action={formAction}
        onSubmit={formSubmitFnc}
        className="w-full flex flex-col gap-4"
      >
        {inputs &&
          inputs.map((input) => (
            <Input key={input.defaultValue} show={true} {...input} />
          ))}
        <Button
          style="w-full"
          loading={loading}
          type={"submit"}
          text={submitBtnText}
        />
      </form>
    </Suspense>
  );
}

export default Form;
