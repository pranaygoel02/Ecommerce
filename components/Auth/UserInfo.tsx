"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserInfo() {
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";

  if (!isAuthenticated)
    return (
      <Link className="btn btn-primary" href="/signin">
        Sign in
      </Link>
    );

  return (
    <button onClick={() => signOut()} className="btn btn-primary"> Sign out</button>
  )
}
