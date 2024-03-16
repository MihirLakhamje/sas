import User from "@/models/User";
import { SignJWT, compactVerify, jwtVerify } from "jose";
import { nanoid } from "nanoid";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function getSecretKey(){
    const key = process.env.ACCESS_TOKEN_SECRET

    if(!key){
        throw new Error("token not found")
    }
    return key
}

export async function encrypt(payload) {
    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setJti(nanoid())
        .setExpirationTime("1d")
        .sign(new TextEncoder().encode(getSecretKey()));
    return token;
}

export async function decrypt(input) {
    try {
        const verifiedToken = await jwtVerify(input, new TextEncoder().encode(getSecretKey()));
        return verifiedToken.payload;
    } catch (error) {
        throw new Error("error occurred in decrypt", error.message)
    }
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
}

