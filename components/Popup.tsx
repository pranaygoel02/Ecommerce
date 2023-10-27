"use client";

import { useEffect } from "react";

function Popup({ num, name }: { num: number, name: string }) {
  useEffect(() => {
    const popup = document.getElementById(name);
    popup?.classList.add("animate-bounce");
    const timeout = setTimeout(() => {
      popup?.classList.remove("animate-bounce");
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [num]);

  return (
    <p key={name} id={name} className="absolute -top-2 left-2 p-2 text-white bg-primary rounded-full flex items-center justify-center aspect-square w-4 h-4 text-center font-medium text-xs">
      {num}
    </p>
  );
}

export default Popup;
