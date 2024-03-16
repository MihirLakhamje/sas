import { ProtectedNav } from "@/components/NavLinks";
import SignoutBtn from "@/components/SignoutBtn";
import Link from "next/link";

export default function RootLayout({ children }) {
    return (
            <body>
                <div className="navbar bg-base-100 flex justify-between">
                    <div className="navbar-start w-1/2">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost md:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link href="/programmes">Programmes</Link>
                                </li>
                                <li>
                                    <Link href="/forum">Forum</Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/"
                            className="btn btn-ghost text-xl md:hidden"
                        >
                            SAS
                        </Link>
                        <Link
                            href="/"
                            className="btn btn-ghost text-xl md:flex hidden"
                        >
                            Student Admission System
                        </Link>
                    </div>
                    <div className="flex-none hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link href="/programmes">Programmes</Link>
                            </li>
                            <li>
                                <Link href="/forum">Forum</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <SignoutBtn />
                    </div>
                </div>
                {children}
            </body>
    );
}
