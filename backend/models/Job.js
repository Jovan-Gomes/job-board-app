const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    description: String,
    type: String, // remote / full-time / part-time
});

module.exports = mongoose.model('Job', jobSchema);
