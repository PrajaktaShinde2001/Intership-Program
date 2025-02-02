const Job = require("../models/Job");

exports.createJob = async (req, res) => {
    try {
        const job = await Job.create({ ...req.body, postedBy: req.user.id });
        res.status(201).json({ message: "Job posted successfully", job });
    } catch (error) {
        res.status(400).json({ message: "Error posting job", error });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({ jobs });
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs", error });
    }
};
