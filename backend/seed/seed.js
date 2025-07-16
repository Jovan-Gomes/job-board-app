const mongoose = require('mongoose');
const Job = require('../models/Job');

mongoose.connect('mongodb://localhost:27017/jobboard');

const jobs = [
    {
        title: "Frontend Developer",
        company: "TechNova",
        location: "Remote",
        description: "Build UI for our SaaS dashboard.",
        type: "Remote",
    },
    {
        title: "Backend Engineer",
        company: "DataForge",
        location: "Bangalore",
        description: "Develop scalable APIs for big data apps.",
        type: "Full-time",
    },
    {
        title: "UX Designer",
        company: "Creative Minds",
        location: "Chennai",
        description: "Design intuitive user flows and visuals.",
        type: "Part-time",
    }
];

async function seedJobs() {
    await Job.deleteMany({});
    await Job.insertMany(jobs);
    console.log("Seeded job data");
    mongoose.disconnect();
}

seedJobs();
