"use client"

import React from "react";
import { AiOutlineLoading } from 'react-icons/ai'

interface ButtonProps {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
    cb?: () => void,
    loading: boolean,
    style?: string
}

const Button: React.FC<ButtonProps> = ({ text, type, cb, loading, style }) => {
    return (
            <button
                type={type}
                disabled={loading}
                className={`btn btn-primary ${style || 'my-8'}`}
                onClick={cb}
            >
                { loading ? <AiOutlineLoading className="animate-spin mx-auto"/> : text}
            </button>
    );
};

export default Button;