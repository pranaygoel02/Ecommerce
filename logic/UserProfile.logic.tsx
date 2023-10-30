"use client";

import { addNewAddress, updateUser, updateUserAddress } from "@/actions/user";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

function UserProfileLogic() {
  const { data: session, update } = useSession();

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const addressInfo = searchParams.get("address_info");
  const parent_id = searchParams.get("parent_id");
  const addr = addressInfo && JSON.parse(addressInfo);
  console.log(addr, parent_id);  

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

  const addressInputs = [
    {
      label: "Address",
      placeholder: "Please enter your address",
      name: "address",
      type: "text",
    },
    {
      label: "City",
      placeholder: "Please enter your city",
      name: "city",
      type: "text",
    },
    {
      label: "State",
      placeholder: "Please enter your state",
      name: "state",
      type: "text",
    },
    {
      label: "Country",
      placeholder: "Please enter your country",
      name: "country",
      type: "text",
    },
    {
      label: "Pin Code",
      placeholder: "Please enter your zip code",
      name: "pincode",
      type: "text"
    },
  ]

  const formFields = [
    {
      legend: "Personal Information",
      inputs: inputs,
      action: updateUserData,
      submitBtnText: "Update Profile"
    },
    {
      legend: "Address Information",
      inputs: addressInputs,
      action: addAddress,
      submitBtnText: "Add Address"
    }
  ]

  async function addAddress (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const { address, city, state, country, pincode } = data;
    console.log(address, city, state, country, pincode);
    setLoading(true);
    try {
      // write update logic
      await addNewAddress(session?.user?.email, { address, city, state, country, pincode });
      toast.success("Address added successfully");
    } catch (err: any) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }  
  }

  async function updateAddress (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    data._id = addr._id;
    console.log(data);
    setLoading(true);
    try {
      await updateUserAddress(session?.user.email, data );
      toast.success("Address updated successfully");
    } catch (err: any) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }
  }
  
  async function updateUserData (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.target);
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
    formFields,
    addr,
    updateAddress
  };
}

export default UserProfileLogic;
