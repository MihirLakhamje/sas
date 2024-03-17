import {
    COOKIE_ACCESS_TOKEN,
    COOKIE_OPTION,
    COOKIE_REFRESH_TOKEN,
    ROLE_ADMIN,
} from "@/constants";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { encrypt } from "@/lib/auth";

export async function POST(request) {
    try {
        const { email, password } = await request.json();
        await connectDB();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User not exists" },
                { status: 404 },
            );
        }

        const comparedPassword = await bcryptjs.compare(
            password,
            user.password,
        );
        if (!comparedPassword) {
            return NextResponse.json(
                { error: "Invalid credentails" },
                { status: 400 },
            );
        }

        const userPayload = {
            _id: user._id,
            email: user.email,
            role: user.role,
        };

        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const session = await encrypt(userPayload);

        const response = NextResponse.json(
            { message: "user signed up" },
            { status: 200 },
        );

        response.cookies.set("session", session, { expires, httpOnly: true });

        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
