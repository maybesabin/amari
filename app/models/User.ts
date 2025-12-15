import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
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
        required: true,
        default: "/assets/profile-picture.png"
    }
}, {
    timestamps: true
})

if (mongoose.models.User) {
    delete mongoose.models.User
}

const User = mongoose.model("User", UserModel);

export default User;