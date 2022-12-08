const express = require('express');
const apiRouter = express.Router();

const { createMinion, addToDatabase, getFromDatabaseById, 
    updateInstanceInDatabase, deleteFromDatabasebyId, 
    getAllFromDatabase, deleteAllFromDatabase, createIdea,
    createMeeting, isValidIdea, isValidMinion } = require('./db');

const { checkMillionDollarIdea } = require('./checkMillionDollarIdea');

// let minions = [];
// seedElements(minions, 'minions');


// Minions API Section 

apiRouter.get('/minions', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

apiRouter.post('/minions', (req, res, next) => {
    const newMinion = createMinion();
    if (isValidMinion(newMinion)) {
        addToDatabase('minions', newMinion);
        res.status(201).send(newMinion);
    } else {
        res.status(400).send();
    }
});

apiRouter.get('/minions/:minionId', (req, res, next) => {
    id = req.params.minionId;
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send();
    }
});

apiRouter.put('/minions/:minionId', (req, res, next) => {
    id = req.params.minionId;
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        updateInstanceInDatabase('minions', minion);
        res.send(getFromDatabaseById('minions', id))
    } else {
        res.status(404).send();
    }
});

apiRouter.delete('/minions/:minionsId', (req, res, next) => {
    id = req.params.minionId;
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        deleteFromDatabasebyId('minions', id);
    } else {
        res.status(404).send();
    }
});


// Ideas API Section 

apiRouter.get('/ideas', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

apiRouter.post('/ideas', (req, res, next) => {
    const newIdea = createIdea();
    if (isValidIdea(newIdea)) {
        addToDatabase('ideas', newIdea);
        res.status(201).send(newIdea);
        checkMillionDollarIdea();
    } else {
        res.status(400).send();
    }
});

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
    id = req.params.ideaId;
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        res.send(idea);
    } else {
        res.status(404).send();
    }
});

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
    id = req.params.ideaId;
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        updateInstanceInDatabase('ideas', idea);
        res.send(getFromDatabaseById('ideas', id));
        checkMillionDollarIdea();
    } else {
        res.status(404).send();
    }
});

apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
    id = req.params.ideaId;
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        deleteFromDatabasebyId('ideas', id);
    } else {
        res.status(404).send();
    }
});


// meetings API Section 

apiRouter.get('/meetings', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

apiRouter.post('/meetings', (req, res, next) => {
    const newMeeting = createMeeting();
    if (newMeeting) {
        addToDatabase('meetings', newMeeting);
        res.status(201).send(newMeeting);
    } else {
        res.status(400).send();
    }
});

apiRouter.delete('/meetings', (req, res, next) => {
    deleteAllFromDatabase('meetings')
});



module.exports = apiRouter;
