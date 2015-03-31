var log = Alloy.Globals.log;

log.warn("[mapUtils] : Opened Library");

var xhr = require("network/httpClient");

var key = "AIzaSyCgBVzz7tXycmVYq4d-X0vax3MkkOSi5cs";

exports.getLocalMechanics = function(args) {
    var lat = args.lat;
    var lng = args.lng;
    var success = args.success || function() {};
    var error = args.error || function() {};
    var xhrSetup = {};
    xhrSetup.requestType = "GET";
    xhrSetup.parseJSON = true;
    xhrSetup.url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=2500&types=car_repair&sensor=false&key=" + key;
    xhrSetup.success = success;
    xhrSetup.error = function(err, context) {
        error(err, context);
    };
    xhr.request(xhrSetup);
};

exports.getGMapsPlace = function(args) {
    var placeId = args.placeId || "ChIJMUTban-AhYARVhdUFD811Vo";
    var success = args.success || function() {};
    var error = args.error || function() {};
    var xhrSetup = {};
    xhrSetup.requestType = "GET";
    xhrSetup.parseJSON = true;
    xhrSetup.url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId + "&key=" + key;
    xhrSetup.success = success;
    xhrSetup.error = function(err, context) {
        error(err, context);
    };
    xhr.request(xhrSetup);
};

exports.getGMapsPhoto = function(args) {
    var photoReference = args.photoReference || false;
    var success = args.success || function() {};
    var error = args.error || function() {};
    var xhrSetup = {};
    xhrSetup.requestType = "GET";
    xhrSetup.parseJSON = false;
    xhrSetup.url = "https://maps.googleapis.com/maps/api/place/photo?photoreference=" + photoReference + "&key=" + key;
    xhrSetup.success = success;
    xhrSetup.error = function(err, context) {
        error(err, context);
    };
    xhr.request(xhrSetup);
};