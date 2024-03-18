import Header from "@/components/Header";

export default  function PublicLayout({ children }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
}
