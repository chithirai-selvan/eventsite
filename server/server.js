const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const dotenv = require('dotenv');
    const eventsRouter = require('./routes/events');
    const participantsRouter = require('./routes/participants');
    const emailRouter = require('./routes/email');

    dotenv.config();

    const app = express();
    app.use(cors());
    app.use(express.json());

    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

    app.use('/events', eventsRouter);
    app.use('/participants', participantsRouter);
    app.use('/api', emailRouter);

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });