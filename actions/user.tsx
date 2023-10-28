'use server'

import { connectDB } from "@/lib/mongodb";
import User from "@/models/user.model"

export async function updateUser(email:string, update:any) {
    try {
        await connectDB();
        const user = await User.findOneAndUpdate({email}, {$set: {...update}});
        return user;
    }
    catch(err) {
        throw err;
    }
}