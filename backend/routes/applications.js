const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// POST /applications
router.post('/', async (req, res) => {
    const application = new Application(req.body);
    await application.save();
    res.json({ message: "Application submitted successfully!" });
});

module.exports = router;

// GET /applications – list all applications (admin view)
router.get('/', async (req, res) => {
    const Application = require('../models/Application');
    const apps = await Application.find();
    res.json(apps);
});
