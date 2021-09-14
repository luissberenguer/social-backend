const express = require('express');

function success(req, res, data, status) {
    let statusCode = status || 200;
    let message = data || '';
    res.status(statusCode).send(message);
}

function error(req, res, data, status, err) {
    let statusCode = status || 500;
    let message = data || 'Internal server error';
    console.log('[error] ', err);
    res.status(statusCode).send(message);
}

module.exports = {
    success,
    error,
}