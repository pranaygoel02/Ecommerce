import { connectDB } from "@/lib/mongodb";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {
    try {
        await connectDB();
        const categories = await Category.find({});
        if(categories) return new NextResponse(JSON.stringify(categories),{ status: 200, headers: { 'Content-Type': 'application/json' } });
        else return new NextResponse(JSON.stringify({ error: 'No categories found' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    } catch (err: any) {
        console.log(err.message);
    }
} 
