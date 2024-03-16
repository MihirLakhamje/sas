import { NextResponse } from "next/server"
import { decrypt, updateSession } from "./lib/auth"

export async function middleware(request) {
    // return await updateSession(request)
    const session = request.cookies.get("session")?.value
    const path = request.nextUrl.pathname;

    const publicUrl = path === "/login" || path === "/signup"
    
    const verifiedToken = session && (await decrypt(session).catch((err)=>{
        console.log(err)
    }))
    if(publicUrl && !verifiedToken){
        return 
    }

    if(publicUrl && verifiedToken){
        return NextResponse.redirect(new URL("/application", request.url))
    }

    if(!verifiedToken){
        return NextResponse.redirect(new URL("/login", request.url))
    }
    
    if(verifiedToken?.role === "ADMIN"){
        return NextResponse.redirect(new URL("/admin", request.url))
    }
}

export const config = {
    matcher: ["/login", "/signup", "/application", "/admin"]
}
