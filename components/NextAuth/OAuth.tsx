"use client";

import { signIn } from "next-auth/react";

export default function OAuth({provider, component} : {provider: string, component: React.ReactNode}) {
  return (
    <button className="w-full" onClick={() => signIn(provider)}>
        {component}
    </button>
  );
}
