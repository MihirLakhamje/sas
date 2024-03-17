"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ErrorMsg } from "./AlertMsg";

export default function SignupForm() {
    const router = useRouter();
    const [formData, setForData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [disableBtn, setDisableBtn] = useState(false);

    async function signupSubmit(e) {
        e.preventDefault();
        try {
            if (!formData.email || !formData.password) {
                setError("All fields are required");
            }
            await axios.post(
                "/api/users/signup",
                formData,
            );
            router.push("/login")
            setError("");
            setDisableBtn(true);
        } catch (error) {
            setError(error?.response?.data?.error);
        }
    }
    return (
        <>
            <form className="card-body" onSubmit={signupSubmit}>
                {error && <ErrorMsg alertMessage={error} />}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full name</span>
                    </label>
                    <input
                        type="text"
                        onChange={(e) =>
                            setForData({
                                ...formData,
                                fullName: e.target.value,
                            })
                        }
                        placeholder="full name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        onChange={(e) =>
                            setForData({
                                ...formData,
                                email: e.target.value,
                            })
                        }
                        placeholder="email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        onChange={(e) =>
                            setForData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                        placeholder="password"
                        className="input input-bordered"
                        autoComplete="true"
                        required
                    />
                </div>
                <div className="form-control mt-4">
                    <button
                        disabled={disableBtn}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Signup
                    </button>
                </div>
                <label className="label">
                    <Link
                        href="/login"
                        className="label-text-alt link link-hover"
                    >
                        Already have account?
                    </Link>
                </label>
            </form>
        </>
    );
}
