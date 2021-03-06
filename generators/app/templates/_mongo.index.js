const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const approutes = require('./routes/approutes');
const logger = require('./logger');
const cors = require('cors');
const config = require('config');
var mongoose = require('mongoose');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000;

function onUnhandledError(err) {
  try {
    logger.error(err);
  } catch (e) {
    console.log('LOGGER ERROR:', e); //eslint-disable-line no-console
    console.log('APPLICATION ERROR:', err); //eslint-disable-line no-console
  }
  process.exit(1);
}

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException', onUnhandledError);

const setupAppRoutes =
  process.env.NODE_ENV === 'development' ? require('./middlewares/development') : require('./middlewares/production');

const app = express();

app.set('env', process.env.NODE_ENV);
logger.info(`Application env: ${process.env.NODE_ENV}`);

app.use(logger.expressMiddleware);
const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200
}
app.use(cors(corsOptions))

app.disable('x-powered-by');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

/**
 * For MongoDB Connection
 */
mongoose.Promise = global.Promise;
mongoose
  .connect(config.get('mongo_db_url'))
  .then(() => console.log('MongoDB Connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));


// application routes
app.use(approutes);

app.use((err, req, res, next) => {
  return res.status(200).json({
    "status":false,
    "payload":err
  });
})
setupAppRoutes(app);

http.createServer(app).listen(process.env.HTTP_PORT, () => {
  logger.info(`HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`);
});
