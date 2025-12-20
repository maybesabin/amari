import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    profilePicture: {
        type: String,
        default: "/assets/profile-picture.png"
    }
}, {
    timestamps: true
})

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User;