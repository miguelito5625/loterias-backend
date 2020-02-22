const usuarioRoute = require('express').Router();
const { pagoController } = require('../controllers/index');

usuarioRoute.get('/prueba', pagoController.test);
usuarioRoute.post('/realizarpago', pagoController.pagoDeNumeros);


module.exports = usuarioRoute;