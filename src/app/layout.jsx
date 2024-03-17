import "./globals.css";

export const metadata = {
    title: "SAS",
    description: "Manage student application forms.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
