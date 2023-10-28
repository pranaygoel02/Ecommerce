"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";

export default function UserInfo() {
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  if(isLoading) return (
      <div className="btn btn-primary inline-flex items-center gap-2"><FaSpinner className="animate-spin"/> Loading</div>
  )

  if (!isAuthenticated)
    return (
      <Link className="btn btn-primary" href="/signin">
        Sign in
      </Link>
    );

  return (
    <button onClick={() => signOut({
      callbackUrl: "/"
    })} className="btn btn-primary"> Sign out</button>
  )
}
