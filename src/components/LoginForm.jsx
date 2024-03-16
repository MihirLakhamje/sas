"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ErrorMsg } from "./AlertMsg";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm() {
    const [formData, setForData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const {replace} = useRouter()

    async function loginSubmit(e) {
        e.preventDefault();
        try {
            if (!formData.email || !formData.password) {
                setError("All fields are required");
            }
            await axios.post("/api/users/login", formData)
            
            replace("/application")
            setError("");
        } catch (error) {
            setError(error?.response?.data?.errorMsg);
        }
    }
    return (
        <>
            <form className="card-body" onSubmit={loginSubmit}>
                {error && <ErrorMsg alertMessage={error} />}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        onChange={(e) => setForData({...formData,email:e.target.value})}
                        placeholder="email"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        onChange={(e) => setForData({...formData,password:e.target.value})}
                        placeholder="password"
                        className="input input-bordered"
                        autoComplete="true"
                    />
                </div>
                <div className="form-control mt-4">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <label className="label">
                    <Link
                        href="/signup"
                        className="label-text-alt link link-hover"
                    >
                        Don&apos;t have account?
                    </Link>
                </label>
            </form>
        </>
    );
}
