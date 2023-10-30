"use server";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/user.model";
import { revalidatePath } from "next/cache";

export async function updateUser(email: string, update: any) {
  try {
    await connectDB();
    console.log(email, update);
    const user = await User.updateOne({ email }, { $set: { ...update } });
    console.log(user);
    return user;
  } catch (err) {
    throw err;
  }
}

export async function addNewAddress(email: string, data: any) {
  try {
    await connectDB();
    console.log(email, data);
    const user = await User.updateOne({ email }, { $push: { address: data } });
    revalidatePath("/account/address");
    return user;
  } catch (err) {
    throw err;
  }
}

export async function deleteAddress(formData: FormData) {
  try {
    console.log("deleting address");
    const addr_id = formData.get("addr_id") as string;
    const parent_id = formData.get("parent_id") as string;

    console.log(addr_id);
    await connectDB();
    const user = await User.updateOne(
      { _id: parent_id },
      { $pull: { address: { _id: addr_id } } }
    );
    console.log(user);
    revalidatePath("/account/address");
  } catch (err) {
    throw err;
  }
}

export async function addNewCard(email: string, data: any) {
  try {
    await connectDB();
    console.log(email, data);
    const user = await User.updateOne({ email }, { $push: { card: data } });
    return user;
  } catch (err) {
    throw err;
  }
}

export async function deleteCard(email: string, data: any) {
  try {
    await connectDB();
    console.log(email, data);
    const user = await User.updateOne({ email }, { $pull: { card: data } });
    return user;
  } catch (err) {
    throw err;
  }
}

export async function getAddress(email: string) {
  try {
    await connectDB();
    const address = await User.findOne({ email }, { address: 1 });
    console.log(address);
    return address;
  } catch (err) {
    throw err;
  }
}
