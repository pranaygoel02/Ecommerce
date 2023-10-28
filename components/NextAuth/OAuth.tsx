"use client";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function OAuth({
  provider,
  component,
}: {
  provider: string;
  component: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <button
      className="w-full"
      onClick={() =>
        signIn(provider, {
          callbackUrl,
        })
      }
    >
      {component}
    </button>
  );
}
