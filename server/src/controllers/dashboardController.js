import Dashboard from "../models/dashboard.js";
import User from "../models/user.js";

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
