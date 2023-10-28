'use server'

import { connectDB } from "@/lib/mongodb";
import User from "@/models/user.model"

export async function updateUser(email:string, update:any) {
    
    try {
        await connectDB();
        console.log(email, update);
        const user = await User.updateOne({email}, {$set: {...update}});
        console.log(user);
        return user;
    }
    catch(err) {
        throw err;
    }
}

export async function addNewAddress(email:string, data: any) {
    try {
        await connectDB();
        console.log(email, data);
        const user = await User.updateOne({email}, {$push: {address: data}});
        return user;
    }
    catch(err) {
        throw err;
    }
}