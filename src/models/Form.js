import mongoose, { Schema } from "mongoose";

const formSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        personalform: {
            dateOfBirth: {
                type: Date,
                required: true,
            },
            gender: {
                type: String,
                required: true,
            },
            phoneNum: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            pincode: {
                type: String,
                required: true,
            },
            isDisable: {
                type: Boolean,
                required: true,
            },
        },
        educationform: {
            boardName: {
                type: String,
                required: true,
            },
            yearOfPassing: {
                type: Number,
                required: true,
            },
            percentage: {
                type: Number,
                required: true,
            },
            collegeName: {
                type: String,
                required: true,
            },
        },
        programmeform: {
            degreeType: {
                type: String,
                required: true,
            },
            programmeName: {
                type: String,
                required: true,
            },
        },
        upload: {
            photo: {
                type: String, // from Cloudinary
                required: true,
            },
            signature: {
                type: String, // from Cloudinary
                required: true,
            },
            hscMarksheet: {
                type: String, // from Cloudinary
                required: true,
            },
        },
        fees: {
            type: Schema.Types.ObjectId,
            ref: "Fee",
        },
        status: {
            type: String,
            enum: ["pending", "completed"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    },
);

const Form = mongoose.models?.forms || mongoose.model("forms", formSchema);

export default Form;
