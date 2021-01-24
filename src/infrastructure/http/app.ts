import express from 'express';
import bodyParser from 'body-parser';
////const morgan = require('morgan');
import config from '../../infrastructure/config';
//var logger = require('../../infrastructure/logging/winston');
import { v1Router } from './api/v1';

const app = express();

////app.use(require('express-status-monitor')());
////app.use(require("morgan")("combined", { "stream": logger.stream }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(app.router); 

////app.use(cors(origin))
////app.use(compression())
////app.use(helmet())
////app.use(morgan('combined'))
//app.use('/api/v1', v1Router)

app.use('/api/v1', v1Router)

const path = require('path');
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


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


