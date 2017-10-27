'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var weatherSchema = new Schema({
  city: String,
  currentTime: {
    type: Date,
    default: Date.now
  },
  temperature: Number,
  humidity: Number,
  dayTime: String
});

module.exports = mongoose.model('CityWeather', weatherSchema);