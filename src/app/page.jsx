import Link from "next/link";

export default function Home() {
    return (
        <>	
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-2xl font-bold md:text-4xl">Student Admission System</h1>
                        <p className="py-6 text-xs text-neutral md:text-lg">
                            A system to manage student application forms
                        </p>
                        <Link href="/signup" className="btn btn-primary mr-3 w-1/3">Signup</Link>
                        <Link href="/login" className="btn btn-primary w-1/3">Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}