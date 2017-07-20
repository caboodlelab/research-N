const request = require('request');

const email = {

  test: function (req, res) {
    res.status(200);
    res.jsonp({ message: 'API REACHED' });
  },

  setLocation: function (req, res) {
    console.log('req', req.body);
    request({
      method: 'POST',
      uri: 'https://1bea6fa8.ngrok.io/api/v1/test',
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
    console.log('req.body', req.body);
    res.status(200);
    res.jsonp({ message: 'API REACHED' });
  },
}

module.exports = email;
