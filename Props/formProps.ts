export interface InputProps {
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
  defaultValue?: string;
}
export interface FormProps {
    inputs?: InputProps[];
    formAction?: (formData: FormData) => void,
    formSubmitFnc?: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    submitBtnText: string;
    formFields?: any,
    defaultValues?: any,
  }

