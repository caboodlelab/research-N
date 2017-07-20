
const email = {

  test: function (req, res) {
    res.status(200);
    res.jsonp({ message: 'API REACHED' });
  }
}

module.exports = email;
