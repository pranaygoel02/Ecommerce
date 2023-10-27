import OnAuthentication from "@/components/OnAuthentication";
import Sidebar from "@/components/Sidebar";
import React from "react";

function layout({
  children,
}: {
  children: React.ReactNode;
  views?: React.ReactNode;
}) {
  return (
    <OnAuthentication redirectTo="/signin">
      <div className="flex flex-row items-start gap-8">
        <Sidebar />
        <section className="flex flex-1 flex-col gap-2 h-[100dvh] overflow-auto sticky top-28 w-full">{children}</section>
      </div>
    </OnAuthentication>
  );
}

export default layout;
