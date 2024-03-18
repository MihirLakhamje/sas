"use client";
import Link from "next/link";

export function ProtectedNav() {
    return (
        <>
            <li>
                <Link href="/user/application">Application</Link>
            </li>
            <li>
                <Link href="/programmes">Programmes</Link>
            </li>
            <li>
                <Link href="/user/forum">Forum</Link>
            </li>
        </>
    );
}
export function PublicNav() {
    return (
        <>
            <li>
                <Link href="/programmes">Programmes</Link>
            </li>
        </>
    );
}

const FormLinkItem = ({ title }) => {
    return (
        <>
            <li className="step step-neutral gap-10">
                <span className="ms-5 sm:ms-0">{title}</span>
            </li>
        </>
    );
};

export function FormNav() {
    return (
        <>
            <div className="card shrink-0 p-5 shadow-md mb-5 bg-base-100 flex justify-center items-center">
                <h2 className="text-xl font-medium mb-5">Steps info</h2>
                <ol
                    type="1"
                    className="steps steps-vertical sm:steps-horizontal w-lg sm:w-full"
                >
                    <FormLinkItem title={"Personal"} />
                    <FormLinkItem title={"Education details"} />
                    <FormLinkItem title={"Choose Programme"} />
                    <FormLinkItem title={"Upload documents"} />
                    <FormLinkItem title={"Payment"} />
                </ol>
            </div>
        </>
    );
}
