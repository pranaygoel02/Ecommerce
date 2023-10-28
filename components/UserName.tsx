'use client'

import { useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";

export default function UserName({className} : {className?: string}) {
    const { data: session } = useSession();
  
    const text = session?.user?.name ? `Hello, ${session?.user?.name}` : "Hello, Guest";
  
    return (
      <div className={`flex text-white whitespace-nowrap items-center justify-center bg-primary gap-2 p-4 border-b-[1px] border-gray-500 ${className}`}>
          <FaUser className="text-xl"/>
          <p className="text-lg font-semibold">{text}</p>
      </div>
    );
  }