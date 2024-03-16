import { ROLE_ADMIN, ROLE_USER } from "@/constants";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

export async function POST(request) {
    try {
        const { fullName, email, password } = await request.json();
        await connectDB();

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json(
                { error: "user already exists" },
                { status: 400 },
            );
        }

		const hashedPassword = await bcryptjs.hash(password, 10)

        const createdUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
			role: ROLE_USER
        });

		await createdUser.save()

        return NextResponse.json(
            { message: "user signed up" },
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
