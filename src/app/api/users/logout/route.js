import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const response = NextResponse.json(
            { message: "user log out" },
            { status: 201 },
        );

        response.cookies.set("session", "", { expires: new Date(0) });

        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
