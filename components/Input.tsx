import { InputProps } from "@/Props/formProps";
import React from "react";

const Input : React.FC = ({
    leftIcon,
    rightIcon,
    show,
    required,
    defaultValue,
    ...rest
}: InputProps) => {
  return ( show &&
    <div className="flex flex-col gap-1">
      <label className="text-sm text-neutral-500 font-medium">{rest.label}{required && <span className="text-red-600">*</span>}</label>
      {(
        <div className={`p-2 px-1 ${leftIcon && 'pl-2'} ${rightIcon && 'pr-2'} overflow-hidden outline outline-2 outline-neutral-300 bg-transparent w-full inline-flex items-center justify-between rounded-xl text-sm focus-within:outline-primary`}>
        {leftIcon}
          <input
            defaultValue={defaultValue}
            {...rest}
            className="p-1 w-full bg-transparent focus-within:outline-none focus-within:border-none disabled:text-neutral-500"
          />
          {rightIcon}
        </div>
      )}
    </div>
  );
}

export default Input;