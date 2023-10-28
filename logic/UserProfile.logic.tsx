"use client";

import { updateUser } from "@/actions/user";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";

function UserProfileLogic() {
  const { data: session, update } = useSession();

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputs = [
    {
      label: "Name",
      placeholder: "Please enter your name",
      name: "name",
      type: "text",
      defaultValue: session?.user.name,
    },
    {
      label: "Phone",
      placeholder: "Please enter your phone number",
      name: "phone",
      type: "tel",
      defaultValue: session?.user?.phone,
    },
    {
      label: "Email Address",
      placeholder: "Please enter your email",
      name: "email",
      type: "email",
      readOnly: true,
      defaultValue: session?.user?.email,
    },
  ];

  const updateUserData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const { name, email, phone } = data;
    console.log(name, email, phone);
    setLoading(true);
    try {
      // write update logic
      await updateUser(email.toString(), { name, phone });
      await update({ name, phone });
      toast.success("User data updated successfully");
    } catch (err: any) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  return {
    inputs,
    loading,
    showPass,
    setShowPass,
    updateUserData,
  };
}

export default UserProfileLogic;
