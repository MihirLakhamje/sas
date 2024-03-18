import { PersonalForm } from "@/components/Form";
import React from "react";

export default function PersonalPage() {
    return (
        <>
            <div className="flex flex-wrap sm:gap-10 w gap-0">
                <div className="flex-grow basis-5/12 ps-5 pb-5 sm:p-0">
                    <h2 className="text-xl font-medium">Personal details</h2>
                    <h3 className="text-gray-600 text-sm">Please provide your personal information below. All fields are required</h3>
                </div>
                <div className="card sm:max-w-4xl border-2 flex-grow shadow-slate-200">
                    <PersonalForm />
                </div>
            </div>
            <div className="divider"></div>
        </>
    );
}
