const request = require('request');
const cfg = require('../config.js');

const email = {

  test: function (req, res) {
    res.status(200);
    res.jsonp({ message: 'API REACHED' });
  },

  setLocation: function (req, res) {
    request({
      method: 'POST',
      uri: cfg.apiUrl,
      body: req.body,
      json: true
    }, function (error, response, body) {
      if (error) {
        res.status(500);
        return res.jsonp(error);
      }

      res.status(200);
      return res.jsonp("Location Added");
    });
  },

  test_2: function (req, res) {
    res.status(200);
    res.jsonp({ message: 'API REACHED' });
  },
}

module.exports = email;
