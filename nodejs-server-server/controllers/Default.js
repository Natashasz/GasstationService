'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.stationStation_idGET = function stationStation_idGET (req, res, next) {
  Default.stationStation_idGET(req.swagger.params, res, next);
};

module.exports.stationsGET = function stationsGET (req, res, next) {
  Default.stationsGET(req.swagger.params, res, next);
};

module.exports.stationsSnapshotPOST = function stationsSnapshotPOST (req, res, next) {
  Default.stationsSnapshotPOST(req.swagger.params, res, next);
};
