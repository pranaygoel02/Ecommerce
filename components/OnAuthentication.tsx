"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

function OnAuthentication({
  children,
  redirectTo,
}: {
  children: React.ReactNode;
  redirectTo: string;
}) {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace(redirectTo || "/signin");
    },
  });

  const isAuthenticated = status === "authenticated";

  if (isAuthenticated) return <>{children}</>;

  return (
    <section className="flex flex-col items-center text-center justify-center gap-4">
      <p className="text-center font-bold text-2xl">This is a protected route</p>
      <p className="text-neutral-600 text-sm">
        You need to be authenticated to access this page
      </p>
      <Link className="btn btn-primary" href="/signin">
        Sign in
      </Link>
    </section>
  );
}

export default OnAuthentication;
