import express from 'express';
import bodyParser from 'body-parser';
////const morgan = require('morgan');
import config from '../../infrastructure/config';
//var logger = require('../../infrastructure/logging/winston');
import { v1Router } from './api/v1';

var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const path = require('path');


const app = express();
////app.use(require('express-status-monitor')());
////app.use(require("morgan")("combined", { "stream": logger.stream }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(app.router); 
////app.use(cors(origin))
////app.use(compression())
////app.use(helmet())
////app.use(morgan('combined'))
//app.use('/api/v1', v1Router)
app.use('/api/v1', v1Router)

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.set("view engine", "pug");


const port = config.port;
app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`)
  //logger.info("Listening on " + port);
})

/*app.get('/sample', function(req, res) {
  //res.send('this is a sample!'); 
  res.json({ message: "..." });
 
});*/
/*import usersRoutes from '../../interfaces/routes/users';
v1Router.use('/users', usersRoutes);*/










//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;*/
