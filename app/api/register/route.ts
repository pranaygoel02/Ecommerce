import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcrypt";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, password } = body;
        console.log(body);
        if (!name || !email || !password || !phone) {
            return new NextResponse("Missing fields", { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectDB();
        const user = await User.create({ name, email, phone, hashedPassword });
        return new NextResponse(user, { status: 201 });
    } catch (err: any) {
        console.log(err.message);
        return new NextResponse(err.message.includes('E11000') ? "Email is already registered" : "Something went wrong", { status: 500 });
    }
} 

export async function GET (req: NextRequest) {
    try {
        const body = await req.json();
        const { email } = body;
        await connectDB();
        const user = await User.findOne({ email }, {email : 1});
        if(user) return new NextResponse(user,{ status: 201 });
        else return new NextResponse(user, { status: 500 });
    } catch (err: any) {
        console.log(err.message);
        return new NextResponse(err.message.includes('E11000') ? "Email is already registered" : "Something went wrong", { status: 500 });
    }
} 
