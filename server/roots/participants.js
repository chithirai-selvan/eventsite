const express = require('express');
    const router = express.Router();
    const Participant = require('../models/participant.model');

    router.post('/', async (req, res) => {
        const participant = new Participant(req.body);
        try {
            const newParticipant = await participant.save();
            res.status(201).json(newParticipant);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });

    module.exports = router;