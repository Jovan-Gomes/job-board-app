const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    job_id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    resume_link: String,
    cover_letter: String,
});

module.exports = mongoose.model('Application', applicationSchema);
