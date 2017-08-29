const expect = require('chai').expect;
const request = require('superagent');

describe('MEAN Template Project', function() {
//  const serverApp = require('./../../app.js');
  const port = 3000;
  const baseUrl = 'http://localhost:' + port;

//  before(function(done) {
//    serverApp.start(port, done);
//  });

//  after(function(done) {
//    serverApp.stop(done);
//  });

  describe('when requested at /', function() {
    it('should load', function(done) {
      request.get(baseUrl + '/').end(function assert(err, res) {
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        expect(res.text).to.contain(`Welcome to Express`);
        done();
      });
    });
  });
});

