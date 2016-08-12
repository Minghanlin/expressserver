module.exports = function(app) {
  // MIDDLEWARE FOR ROUTING
  // var index = require('../controllers/index.server.controller');
  // var about = require('../controllers/about.server.controller');
  // var contact = require('../controllers/contact.server.controller');

  var staticPageController = require('../controllers/staticpages.server.controller');
  var usersController = require('../controllers/users.server.controller');

  // ACTUAL ROUTING

  app.get('/', staticPageController.renderHome);
  app.get('/about', staticPageController.renderAbout);
  app.get('/contact', staticPageController.renderContact);



   // restful routes
   app.get('/users', usersController.index);
 };
