'use strict';
module.exports = function(app) {
  let weatherCard = require('../controllers/weatherController');

  // todoList Routes
  app.route('/weathercard')
    .get(weatherCard.get_weather);

  // app.route('/weatherCard/last24')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
