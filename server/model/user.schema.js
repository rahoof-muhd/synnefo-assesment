import mongoose from "mongoose";


const schema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    pass: {
        type: String,
        required: true,
        unique: false
    },
    cpass: {
        type: String,
        required: true,
        unique: false
    }
});

export default mongoose.model.User || mongoose.model("Users", schema);