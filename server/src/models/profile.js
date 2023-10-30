import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // This should reference the User model
        required: true 
    },
    location: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    tel: {
        type: String,
        default: ""
    },
    faculty: {
        type: String,
        default: ""
    },
    univer: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    interest: {
        type: String,
        default: ""
    },
});

const Profile = mongoose.model('profile', profileSchema);
export default Profile;