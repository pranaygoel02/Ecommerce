"use client";

import { addNewCategory } from "@/actions/store";
import { addNewAddress, updateUser, updateUserAddress } from "@/actions/user";
import { useState } from "react";
import { toast } from "react-hot-toast";

function AddCategoryLogic() {
  
  const [loading, setLoading] = useState(false);

  const inputs = [
    {
      label: "Name",
      placeholder: "Please enter the category name",
      name: "name",
    },
    {
      label: "Image",
      placeholder: "Please enter the category image url",
      name: "image",  
      type: "file"
    }
  ];

  async function addCategory (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const { name, image } = data;
    console.log(name, image);
    setLoading(true);
    try {
      // write update logic
      await addNewCategory({ name: name.toString() });
      toast.success("Category added successfully");
    } catch (err: any) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }  
  }

  // async function updateAddress (e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target as HTMLFormElement);
  //   const data = Object.fromEntries(formData.entries());
  //   data._id = addr._id;
  //   console.log(data);
  //   setLoading(true);
  //   try {
  //     await updateUserAddress(session?.user.email, data );
  //     toast.success("Address updated successfully");
  //   } catch (err: any) {
  //     toast.error(err.response.data);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return {
    inputs,
    loading,
    addCategory,
  };
}

export default AddCategoryLogic;