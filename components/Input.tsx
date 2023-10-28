import React from "react";

interface props {
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
    required?: boolean;
}

const Input : React.FC = ({
    leftIcon,
    rightIcon,
    show,
    required,
    ...rest
}: props) => {
  return ( show &&
    <div className="flex flex-col gap-1">
      <label className="text-sm text-neutral-500 font-medium">{rest.label}{required && <span className="text-red-600">*</span>}</label>
      {(
        <div className={`p-2 px-1 ${leftIcon && 'pl-2'} ${rightIcon && 'pr-2'} outline outline-2 outline-neutral-300 bg-transparent w-full inline-flex items-center rounded-xl text-sm focus-within:outline-primary`}>
        {leftIcon}
          <input
            {...rest}
            className="p-1 flex-1 bg-transparent focus-within:outline-none focus-within:border-none disabled:text-neutral-500"
          />
          {rightIcon}
        </div>
      )}
    </div>
  );
}

export default Input;