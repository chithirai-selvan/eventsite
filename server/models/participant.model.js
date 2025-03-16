const mongoose = require('mongoose');

    const participantSchema = new mongoose.Schema({
        name: String,
        email: String,
        organization: String,
        type: String,
        eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    });

    module.exports = mongoose.model('Participant', participantSchema);