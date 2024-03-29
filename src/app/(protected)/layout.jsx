import Header from "@/components/Header";

export default function ProtectedLayout({ children }) {
    return (
        <>
            <Header />
            <main className="p-0 sm:p-5">{children}</main>
        </>
    );
}
