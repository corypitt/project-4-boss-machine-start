
const meetingsRouter = require('express').Router();
const {
    createMeeting,
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase
} = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});


meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    const updated = addToDatabase('meetings', newMeeting);
    res.status(201).send(updated);
});


meetingsRouter.delete('/', (req, res, next) => {
    const deletedMeeting = deleteAllFromDatabase('meetings');
    if (deletedMeeting) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});

module.exports = meetingsRouter;