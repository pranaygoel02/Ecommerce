export interface FormProps {
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