import { NextResponse } from "next/server";
import { decrypt } from "./lib/auth";

export async function middleware(request) {
    // get session
    const session = request.cookies.get("session")?.value;

    // get pathname
    const path = request.nextUrl.pathname;

    // public url
    const publicUrl = path === "/login" || path === "/signup" || path === "/";

    // access to the verified data
    const verifiedToken = session && (await decrypt(session).catch((err) => {
            console.log(err);
        }));

    // do nothing if url is public and token not fired
    if (publicUrl && !verifiedToken) {
        return;
    }

    // go to /application if token found
    if (publicUrl && verifiedToken) {
        return NextResponse.redirect(new URL("/user", request.url));
    }
    
    // handle admin access
    if(verifiedToken?.role === "ADMIN" && !request.nextUrl.pathname.startsWith("/admin")){
        return NextResponse.redirect(new URL("/admin", request.url));
    }

    // handle user access
    if(verifiedToken?.role === "USER" && request.nextUrl.pathname.startsWith("/admin")){
        return NextResponse.redirect(new URL("/user", request.url));
    }
    

    // check for token not found
    if (!verifiedToken) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/", "/login", "/signup", "/user", "/user/:path*", "/admin", "/admin/:path*"],
};
