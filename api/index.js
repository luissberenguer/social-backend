const express = require('express');
const app = express();
const users = require('./components/users/network');
const errorhandler = require('errorhandler');

app.use(express.json()); // This is the same as bodyParser.json()

// ROUTES
app.use('/api/users', users);


app.use(errorhandler());

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})
