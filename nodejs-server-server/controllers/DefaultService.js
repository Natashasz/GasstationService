'use strict';

var request = require('request');

var apiKey = 'e2be84a8-d1d1-3e1d-7619-0c354b0b267c';

exports.stationStation_idGET = function(args, res, next) {
  /**
   * Get price trend for a given gas station.
   *
   * stationId String 
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "date" : "aeiou",
  "prices" : [ {
    "gastype" : "aeiou",
    "price" : 1.3579000000000001069366817318950779736042022705078125
  } ]
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.stationsGET = function(args, res, next) {
  /**
   * Fetch gas station data (prices, names, address, brand, Opening hours) of a given geographical position and radius.
   *
   * longitude BigDecimal  (optional)
   * latitude BigDecimal  (optional)
   * radius BigDecimal  (optional)
   * returns List
   **/

  // (1) Parse Parameters
  var latitude = args.latitude.originalValue
  var longitude = args.longitude.originalValue;
  var radius = args.radius.originalValue;

  // (2) Build URL for TanskerkoenigAPI request
  var query = 'https://creativecommons.tankerkoenig.de/json/list.php?'
              + 'lat=' + latitude
              + '&lng=' + longitude
              + '&rad=' + radius
              + '&sort=dist'
              + '&type=all'
              + '&apikey=' + apiKey;
  console.log("Query: " + query);

  request(query, function (error, response, body) {
      var bodyParsed = JSON.parse(body);

      var gasStationsReturn = [];
      for(var gasStationIdx in bodyParsed.stations) {
        var gasStation = bodyParsed.stations[gasStationIdx];

        var g = {};

        // Address
        g.address = gasStation.street;

        // Name
        g.name = gasStation.name;

        // Opening Hours
        var detailQuery = 'https://creativecommons.tankerkoenig.de/json/detail.php?'
                          + 'id=' + gasStation.id
                          + '&apikey=' + apiKey;
        request(detailQuery, function (detailError, detailResponse, detailBody) {
          console.log(detailBody);
        });

        // Prices
        g.prices = [];
        g.prices.push({
            'gastype':'diesel',
            'price':gasStation.diesel
        });
        g.prices.push({
            'gastype':'e5',
            'price':gasStation.e5
        });
        g.prices.push({
            'gastype':'e10',
            'price':gasStation.e10
        });

        // Brand
        g.brand = gasStation.brand;

        gasStationsReturn.push(g);
      }

      var examples = {};
      examples['application/json'] = gasStationsReturn;
      if (Object.keys(examples).length > 0) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
      } else {
          res.end();
      }
  });
}

exports.stationsSnapshotPOST = function(args, res, next) {
  /**
   * Make a snaphot of gas station prices of all gas station in a given geographical position.
   *
   * longitude BigDecimal  (optional)
   * latitude BigDecimal  (optional)
   * radius BigDecimal  (optional)
   * returns Object
   **/
  var examples = {};
  examples['application/json'] = "{}";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

