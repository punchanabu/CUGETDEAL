import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // This should reference the User model
        required: true 
    },
    title: String,
    job_kind: String,
    hire_kind: String,
    job_period: Date,
    description: String,
    Star: Number
});

const Home1 = mongoose.model('Home1', jobSchema);
export default Home1;