"use server";

import { connectDB } from "@/lib/mongodb";
import Category from "@/models/category.model";
import { revalidatePath } from "next/cache";

export async function addNewCategory({ name, image }: { name: string; image?: string}) {
  try {
    await connectDB();
    console.log(name, image);
    const user = await Category.create({ name });
    revalidatePath("/admin/category");
    return user;
  } catch (err) {
    throw err;
  }
}

export async function getAllCategories() {
  try {
    await connectDB();
    const categories = await Category.find();
    return categories;
  } catch (err) {
    throw err;
  }
}