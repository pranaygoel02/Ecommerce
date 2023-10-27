import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcrypt";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { MongooseError } from "mongoose";

export async function POST (req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, password } = body;
        if (!name || !email || !password) {
            return new NextResponse("Missing fields", { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectDB();
        const user = await User.create({ name, email, hashedPassword });
        return new NextResponse(user, { status: 201 });
    } catch (err: any) {
        console.log(err.message);
        return new NextResponse(err.message.includes('E11000') ? "Email is already registered" : "Something went wrong", { status: 500 });
    }
} 
