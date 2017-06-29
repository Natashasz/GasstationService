'use strict';

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
  var examples = {};
  examples['application/json'] = [ {
  "address" : "aeiou",
  "name" : "aeiou",
  "opening hours" : [ {
    "start" : "aeiou",
    "end" : "aeiou",
    "text" : "aeiou"
  } ],
  "prices" : [ {
    "gastype" : "aeiou",
    "price" : 1.3579000000000001069366817318950779736042022705078125
  } ],
  "brand" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
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

