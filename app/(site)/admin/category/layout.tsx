import CategoryList from "@/components/CategoryList";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-2"> 
      <CategoryList />
      {children}
    </section>
  );
}

export default layout;
