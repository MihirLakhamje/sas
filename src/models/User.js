
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: [true, "All fields are required"],
        },
        email: {
            type: String,
            required: [true, "All fields are required"],
        },
        password: {
            type: String,
            required: [true, "All fields are required"],
        },
        role: {
            type: String,
            enum: ["USER", "ADMIN"],
            default: "USER",
        },
        refreshToken: String,
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
    },
    { timestamps: true },
);



const User = mongoose.models?.users || mongoose.model("users", userSchema);

export default User;
