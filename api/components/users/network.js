const express = require('express');
const router = express.Router();
const Controller = require('./controller');
const response = require('../../../network/response');

router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.delete('/:id', remove);

// Functions

function list(req, res, next) {
    Controller.list()
        .then( users => {
            response.success(req, res, users, 200);
        })
        .catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then( user => {
            response.success(req, res, user, 200);
        })
        .catch(next);
}

function upsert(req, res, next) {
    Controller.upsert(req.body)
        .then( user => {
            response.success(req, res, user, 201);
        })
        .catch(next);
}

function remove(req, res, next) {
    Controller.remove(req.params.id)
        .then( deletedId => {
            response.success(req, res, deletedId, 204);
        })
        .catch(next);
}


module.exports = router;