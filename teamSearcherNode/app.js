const express = require('express');
const app = express();
import equipo from "../modelos/equipo"

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/login', function (req, res) {
    res.json({username: 'Flavio'})
});

app.get('/home', function (req, res) {
    res.send('WELCOME HOME!!!');
});

app.get('/:teamId', function (req, res){
    res.json(equipo)
})

app.listen(3000, function () {
    console.log('Connected to port 3000');
});