import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // This should reference the User model
        required: true 
    },
    education: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required: true
    },
});

const Profile = mongoose.model('profile', profileSchema);
export default Profile;