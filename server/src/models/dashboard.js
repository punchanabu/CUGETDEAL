import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobAssignSchema = new Schema({
    title: String,
    description: String,
    star: Number,
    status: String,
    creator: Object
});

const contactSchema = new Schema({
    phone: String,
    email: String,
    instagram: String
});

const userJobSchema = new Schema({
    title: String,
    description: String,
    star: Number,
    creator: Object,
    contact: contactSchema
});

const dashboardSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // This should reference the User model
        required: true 
    },
    JobAssign: [jobAssignSchema],
    UserJob: [userJobSchema]
}, { timestamps: true });

const Dashboard = mongoose.model('Dashboard', dashboardSchema);
export default Dashboard;