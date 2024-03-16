import LoginForm from "@/components/LoginForm";

export const metadata = {
	title: "Login",
	description: "Login to your SAS account"
}

export default function LoginPage() {
    
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">
                            Welcome, back!
                        </h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </>
    );
}