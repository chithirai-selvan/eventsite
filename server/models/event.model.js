const mongoose = require('mongoose');

    const eventSchema = new mongoose.Schema({
        title: String,
        date: Date,
        location: String,
        description: String,
    });

    module.exports = mongoose.model('Event', eventSchema);