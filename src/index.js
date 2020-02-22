const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      listaRutas = require('express-list-endpoints');

      const app = express();

app.set('port', process.env.PORT ||3000);

app.use(express.json({extended: true}));


app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });


const routes = require('./routes/index');

app.use('/', routes);


app.listen(app.get('port'), () => {
    console.log(listaRutas(app));
    console.log('server on port', app.get('port'));
})