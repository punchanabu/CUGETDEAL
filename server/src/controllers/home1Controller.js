import Home1 from "../models/home1.js";
import User from "../models/user.js";

export const getAll = async (req, res) => {
  try {
    
    const home1s = await Home1.find().populate('userId', '-password');
    
    const responseObjects = home1s.map(home1 => {
      return {
        user: {
          id: home1.userId._id,
          name: home1.userId.name,
          surname: home1.userId.surname,
          email: home1.userId.email,
        },
        home1: {
          title: home1.title,
          job_kind: home1.job_kind,
          hire_kind: home1.hire_kind,
          job_period: home1.job_period,
          description: home1.description,
          Star: home1.Star,
        }
      };
    });

    res.status(200).json(responseObjects);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

export const getbyID = async (req, res) => {
    console.log(req.params)
    try {
        const home1 = await Home1.findOne({ userId: req.params.userId })
        .populate('userId', '-password');
        // remove userID and password from the response
        if (!home1) {
            return res.status(404).send('Home1 not found');
        }
        const responseObject = {
            user: {
                id: Home1.userId._id,
                name: Home1.userId.name,
                surname: Home1.userId.surname,
                email: Home1.userId.email,
            },
            home1: {
                title: String,
                job_kind: String,
                hire_kind: String,
                job_period: Date,
                description: String,
                Star: Number
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
        const { userId, title, job_kind, hire_kind, job_period, description, Star } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        const newHome1 = new Home1({
            userId,
            title,
            job_kind,
            hire_kind,
            job_period,
            description,
            Star
        });
        await newHome1.save();
        
        res.status(201).json(newHome1);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
