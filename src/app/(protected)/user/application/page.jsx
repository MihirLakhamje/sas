import Form from "@/components/Form";
import { FormNav } from "@/components/NavLinks";
import Link from "next/link";
import React from "react";

export default function ApplicationPage() {
    return (
        <>
            <div><FormNav/></div>
            <Link className="btn btn-primary" href={"/user/application/set"}>Lets start</Link>
        </>
    );
}
