import Link from "next/link";

export function ProtectedNav() {
    return (
        <>
            <li>
                <Link href="/programmes">Programmes</Link>
            </li>
            <li>
                <Link href="/forum">Forum</Link>
            </li>
        </>
    );
}
