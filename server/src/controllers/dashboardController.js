import Dashboard from "../models/dashboard.js";
import User from "../models/user.js";
import Home1 from "../models/home1.js";
export const getbyID = async (req, res) => {
    console.log(req.params)
    try {
        const dashboard = await Dashboard.findOne({ userId: req.params.userId })
        .populate('userId', '-password');
        // remove userID and password from the response
        if (!dashboard) {
            return res.status(404).send('Dashboard not found');
        }
        const responseObject = {
            user: {
                id: dashboard.userId._id,
                name: dashboard.userId.name,
                surname: dashboard.userId.surname,
                email: dashboard.userId.email,
            },
            dashboard: {
                JobAssign: dashboard.JobAssign,
                UserJob: dashboard.UserJob,
            }
        };
        res.json(responseObject);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

export const create = async (req, res) => {
    try {
        const { userId, JobAssign, UserJob } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        const newDashboard = new Dashboard({
            userId,
            JobAssign,
            UserJob
        });
        await newDashboard.save();
        
        res.status(201).json(newDashboard);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

export const update = async (req, res) => {
    try {
        const { userId, creatorId, jobTitle } = req.body;

        // Find the job by title
        const job = await Home1.findOne({ title: jobTitle });
        if (!job) {
            return res.status(404).send('Job not found');
        }

        // Convert to plain JavaScript object and add status
        const jobObj = job.toObject();
        jobObj.status = 'doing';  // Add status here
        jobObj.creator = creatorId;  // Add creator here
        // Find and update user's dashboard
        const userDashboard = await Dashboard.findOne({ userId });
        if (!userDashboard) {
            return res.status(404).send('User Dashboard not found');
        }
        userDashboard.UserJob.push(jobObj);  // UserJob schema doesn't include status
        await userDashboard.save();

        // Find and update creator's dashboard
        const creatorDashboard = await Dashboard.findOne({ userId: creatorId });
        if (!creatorDashboard) {
            return res.status(404).send('Creator Dashboard not found');
        }
        creatorDashboard.JobAssign.push(jobObj);  // JobAssign schema includes status
        await creatorDashboard.save();

        // Delete the job from the Home1 collection
        await Home1.deleteOne({ title: jobTitle });

        res.status(200).send('Job added to both dashboards and deleted from the database successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}


export const remove = async (req, res) => {
    try {
        const { userId, jobTitle, creatorId } = req.body; // Including creatorId in request body

        // Find user's dashboard
        const userDashboard = await Dashboard.findOne({ userId });
        if (!userDashboard) {
            return res.status(404).send('User Dashboard not found');
        }

        // Remove the job from UserJob
        userDashboard.UserJob = userDashboard.UserJob.filter(job => job.title !== jobTitle);

        // Save the updated user's dashboard
        await userDashboard.save();

        // Now, let's find the creator's dashboard and update the job status
        const creatorDashboard = await Dashboard.findOne({ userId: creatorId });
        if (!creatorDashboard) {
            return res.status(404).send('Creator Dashboard not found');
        }

        // Find the job and update its status
        const jobToUpdate = creatorDashboard.JobAssign.find(job => job.title == jobTitle);
        if(jobToUpdate) {
            console.log('Updating status for:', jobToUpdate);
            jobToUpdate.status = 'checking';
            creatorDashboard.markModified('JobAssign');
        } else {
            console.log('Job not found in creator dashboard');
            return res.status(404).send('Job not found in creator dashboard');
        }
        
        // Save the updated creator's dashboard
        await creatorDashboard.save();

        // Send a successful response
        res.status(200).send('Job removed from user dashboard and updated in creator dashboard successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const deleteTask = async (req, res) => {
    try {
        console.log("Hello I am here")
        const { creator, title } = req.body;
        // Find the creator's dashboard
        const creatorDashboard = await Dashboard.findOne({ userId: creator });
        if (!creatorDashboard) {
            return res.status(404).send('Creator Dashboard not found');
        }

        // Remove the job from JobAssign in creator's dashboard
        creatorDashboard.JobAssign = creatorDashboard.JobAssign.filter(job => job.title !== title);

        // Save the updated creator's dashboard
        await creatorDashboard.save();

        res.status(200).send('Job deleted from creator dashboard successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
