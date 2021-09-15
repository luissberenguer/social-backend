const express = require('express');
const router = express.Router();
const Controller = require('./controller');
const response = require('../../../network/response');

router.get('/:id', get);
router.get('/', list);
router.post('/', login);
router.put('/', updatePassword); // validate user


// functions

function list(req, res, next) {
    Controller.list()
        .then( usersAuth => {
            response.success(req, res, usersAuth, 200);
        })
        .catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then(userAuth => {
            response.success(req, res, userAuth, 200);
        })
        .catch(next)
}


function login(req, res, next) {
    Controller.update(req.body)
        .then( jwt => {
            response.success(req, res, jwt, 200);
        })
        .catch(next);
}

function updatePassword(req, res, next) {
    Controller.update(req.body)
        .then( result => {
            response.success(req, res, result, 200);
        })
        .catch(next);
}



module.exports = router;