module.exports = function(app) {
  var index = require('../controllers/index.server.controller');
  app.get('/', index.render);
};

module.exports = function(app) {
  var about = require('../controllers/about.server.controller');
  app.get('/about', about.render);
};

module.exports = function(app) {
  var contact = require('../controllers/contact.server.controller');
  app.get('/contact', contact.render);
};
