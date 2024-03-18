"use client";

import { useState } from "react";

export function PersonalForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        dateOfBirth: "",
        isDisabled: "",
        phoneNum: "+91",
        gender: "",
        address: "",
        state: "",
        city: "",
        pincode: "",
    });

    function handleSave(e){
        e.preventDefault()
        window.sessionStorage.setItem("personal",JSON.stringify(formData))
    }

    return (
        <>
            <form className="card-body gap-5 flex-wrap">
                <div className="flex gap-5 flex-wrap">
                    <div className="form-control flex-grow">
                        <label className="label">Full name</label>
                        <input
                            type="text"
                            className="input input-bordered"
                            placeholder="Lorem Ipsum"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    fullName: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-control flex-grow">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input input-bordered"
                            placeholder="example@gmail.com"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="flex gap-5 flex-wrap">
                    <div className="form-control flex-grow">
                        <label className="label">Date of Birth</label>
                        <input
                            type="date"
                            className="input input-bordered"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    dateOfBirth: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-control flex-grow">
                        <label className="label">Are you disabled</label>
                        <select
                            className="select select-bordered "
                            defaultValue={"select"}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    isDisabled: e.target.value,
                                })
                            }
                        >
                            <option>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-5 flex-wrap">
                    <div className="form-control flex-grow">
                        <label className="label">Phone number</label>
                        <input
                            type="text"
                            className="input input-bordered"
                            placeholder="+91 66666 99999"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phoneNum: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-control flex-grow">
                        <label className="label">Gender</label>
                        <select
                            className="select select-bordered "
                            defaultValue={"select"}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    gender: e.target.value,
                                })
                            }
                        >
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                    </div>
                </div>
                <div className="form-control flex-grow">
                    <label className="label">Address</label>
                    <input
                        type="text"
                        className="input input-bordered"
                        placeholder="room no, bld no, area"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                address: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex gap-5 flex-wrap">
                    <div className="form-control flex-grow w-full sm:w-0">
                        <label className="label">Sate</label>
                        <select
                            className="select select-bordered "
                            defaultValue={"select"}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    state: e.target.value,
                                })
                            }
                        ></select>
                    </div>
                    <div className="form-control flex-grow w-full sm:w-0">
                        <label className="label">City</label>
                        <select
                            className="select select-bordered "
                            defaultValue={"select"}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    city: e.target.value,
                                })
                            }
                        ></select>
                    </div>
                </div>
                <div className="form-control flex-grow">
                    <label className="label">Pincode</label>
                    <input
                        type="text"
                        className="input input-bordered max-w-xs"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                pincode: e.target.value,
                            })
                        }
                    />
                </div>

                {/* save in session storage */}
                <div className="flex gap-2 mt-5">
                    <button onClick={handleSave} className="btn btn-primary btn-sm">save</button>
                    <button
                        className="btn btn-outline btn-error btn-sm"
                        type="reset"
                    >
                        clear
                    </button>
                </div>
            </form>
        </>
    );
}
