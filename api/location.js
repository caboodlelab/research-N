
const email = {

  test: function (req, res) {
    res.status(200);
    res.jsonp({ message: 'API REACHED' });
  },

  setLocation: function (req, res) {
    res.status(200);
    res.jsonp(req.body);
  }
}

module.exports = email;
