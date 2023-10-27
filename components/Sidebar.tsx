"use client";

import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
    <nav className="hidden lg:flex flex-col gap-3 sticky top-28 lg:h-[100dvh] pr-4 border-r border-neutral-200 text-sm">
      <Link href="/account/">Account</Link>
      <Link href="/account/cart">Cart</Link>
      <Link href="/account/wishlist">Wishlist</Link>
    </nav>
  );
}

export default Sidebar;
