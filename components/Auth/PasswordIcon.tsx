"use client";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function PasswordIcon({
  cb,
  state,
}: {
  cb: () => void;
  state: boolean;
}) {
  return (
    <button
      onClick={(e) => {
        e?.preventDefault();
        cb();
      }}
    >
      {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </button>
  );
}
