import SignupForm from "@/components/SignupForm";

export const metadata = {
	title: "Signup",
	description: "Create your SAS account"
}

export default function SignupPage() {
    
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">
                            Create your account
                        </h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <SignupForm/>
                    </div>
                </div>
            </div>
        </>
    );
}