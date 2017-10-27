// var mongoose = require('mongoose'),
//   CityWeather = mongoose.model('CityWeather');
//
//
// exports.get_weather = function(req, res) {
//   Task.find({}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

const https = require ('https');
const apiKey = 'AIzaSyDkICVcDUQ0eYkYQ7QDRzGC8PIIUg3SYro';
const googleTranslate = require('google-translate')(apiKey);
const uri = 'mongodb://favri:fabric10@ds115045.mlab.com:15045/heroku_xzvnnj4p';
const apixuUrl = 'https://api.apixu.com/v1/current.json?key=';
const apixuToken = '409167ff741942d9a59201326170304';
const q = '&q=';
const city = 'Buenos+Aires';
let weatherNow = {};

exports.get_weather = function (req,res) {

  https.get(apixuUrl + apixuToken + q + city, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });


    // The whole response has been received. Print out the result.
    resp.on('end', () => {

      weatherNow = JSON.parse(data);
    });

    // Request failed
    resp.on("error", (err) => {
      console.log("Error: " + err.message);
    });
  });

  let temperature = weatherNow.current.temp_c;
  let humidity = weatherNow.current.humidity;
  let dayCondition = '';

  googleTranslate.translate(weatherNow.current.condition.text, 'es', function(err, translation) {
    dayCondition = translation.translatedText;

    let weatherObj = {
      temperature : temperature ,
      humidity : humidity ,
      dayCondition : dayCondition
    };

    res.send(weatherObj);
  });




};