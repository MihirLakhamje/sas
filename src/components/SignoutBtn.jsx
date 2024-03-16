"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignoutBtn() {
    const router = useRouter()
    async function signout(){
        try {
            await axios.get("/api/users/logout")
            router.push('/login')
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <button onClick={signout} className="btn btn-ghost">
            Logout
        </button>
    );
}
