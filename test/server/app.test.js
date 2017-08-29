const express = require('express');

var routes = require('./../../server/routes/pages');

var app = express();

app.use('/', routes);

const start = function start(port, callback) {
  server = app.listen(port, callback);
}

const stop = function stop(callback) {
  server.close(callback);
}

module.exports = {
  start,
  stop
}

