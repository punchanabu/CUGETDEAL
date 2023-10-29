import Profile from "../models/profile.js";

export const initProfile = async (req, res) => {
  try {
    const requestingUserId = req.params.id;
    const profile = await Profile.findOne({
      userId: requestingUserId,
    }).populate("userId", "-password");
    if (profile) return res.status(404).send("profile already created");
    const newProfile = new Profile({
      userId: requestingUserId,
    });
    // console.log(newProfile);
    await newProfile.save();
    res.status(201).json("create profile success");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const updateProfile = async (req, res) => {
  try {
    const requestingUserId = req.authData.id;
    const {
      name,
      surname,
      location,
      country,
      email,
      tel,
      faculty,
      univer,
      description,
      interest,
    } = req.body;
    //   check all is not undefined
    if (
      name === undefined ||
      surname === undefined ||
      location === undefined ||
      country === undefined ||
      email === undefined ||
      tel === undefined ||
      faculty === undefined ||
      univer === undefined ||
      description === undefined ||
      interest === undefined
    ) {
      res
        .status(400)
        .json({ error: "One or more required fields are missing." });
    }
    let profile = await Profile.findOne({ userId: requestingUserId }).populate("userId", "-password");
    if (!profile) return res.status(404).send("Profile not found");

    profile.userId.name = name;
    profile.userId.surname = surname;
    await profile.userId.save();

    profile.location = location;
    profile.country = country;
    profile.email = email;
    profile.tel = tel;
    profile.faculty = faculty;
    profile.univer = univer;
    profile.description = description;
    profile.interest = interest;
    await profile.save();

    res.status(200).json("updated profile success");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const getProfile = async (req, res) => {
  try {
    // console.log(req.authData.id, req.params.id);
    const requestingUserId = req.authData.id;
    const profile = await Profile.findOne({ userId: requestingUserId }).populate("userId", "-password");
    if (!profile) return res.status(404).send("Profile not found");

    res.status(200).json({
        name: profile.userId.name,
        surname: profile.userId.surname,
        location: profile.location,
        country: profile.country,
        email: profile.email,
        tel: profile.tel,
        faculty: profile.faculty,
        univer: profile.univer,
        description: profile.description,
        interest: profile.interest,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const getProfilebyID = async (req, res) => {
  try {
    // console.log(req.authData.id, req.params.id);

    const profile = await Profile.findOne({ userId: req.params.id });
    if (!profile) return res.status(404).send("Profile not found");
    res.status(200).json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
