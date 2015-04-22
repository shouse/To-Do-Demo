/**
 * @class Util.map
 *
 * @author Steven House
 * @email steven.m.house@gmail.com
 *
 * Map utility functions
 */

// Include logging utility
var log = Alloy.Globals.log;
log.warn('[mapUtils] : Opened Library');

var xhr = require('httpClient');
var key = "AIzaSyCgBVzz7tXycmVYq4d-X0vax3MkkOSi5cs";

/**
 * Get a local place
 * @method getLocalPlace
 * @param {Object} args
 * @return
 */
exports.getLocalPlace = function(args) {
    var lat = args.lat;
    var lng = args.lng;
    var success = args.success || function(resp) {};
    var error = args.error || function(resp) {};
    var placeType = args.placeType || false;
    var radius = args.radius || 2500;

    var xhrSetup = {};
    xhrSetup.requestType = "GET";
    xhrSetup.parseJSON = true;
    xhrSetup.url =
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        lat + "," + lng +
        "&radius=" + radius + "&types=" + placeType + "&sensor=false&key=" + key;

    xhrSetup.success = success;
    xhrSetup.error = function(err, context) {
        error(err, context);
    };

    xhr.request(xhrSetup);
};

/**
 * Get a local place
 * @method getLocalPlace
 * @param {Object} args
 * @return
 */
exports.getPlaceAnnotiations = function(args) {
    /*
    var latLngData = [];
    var points = [];

    var places = args.places.results;

    _.each(places.results, function(place, index) {
        log.warn(JSON.stringify(place, null, 4));

        var lat = place.geometry.location.lat;
        var lng = place.geometry.location.lng;

        var annotation = {
            latitude: place.geometry.location.lat,
            longitude: place.geometry.location.lng,
            title: place.name,
            subtitle: place.vicinity,
            pincolor: Alloy.Globals.Map.ANNOTATION_RED,
            leftButton: '/images/navigation/ic_arrow_back_black_18dp.png',
            rightButton: '/images/navigation/ic_arrow_forward_black_18dp.png',
            myid: place.place_id// Custom property to uniquely identify this annotation.
        };

        // API calls to the map module need to use the Alloy.Globals.Map reference
        var mechanicAnnotation = Alloy.Globals.Map.createAnnotation(annotation);
        $.mapview.addAnnotation(mechanicAnnotation);
        $.mapview.userLocation = true;

        points.push({
            latitude: place.geometry.location.lat,
            longitude: place.geometry.location.lng
        });
    });

    return points;
    */
};

/**
 * @method getGMapsPlace
 * @param args
 */
exports.getGMapsPlace = function(args) {
    //https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJMUTban-AhYARVhdUFD811Vo&key=AIzaSyCgBVzz7tXycmVYq4d-X0vax3MkkOSi5cs
    var placeId = args.placeId || "ChIJMUTban-AhYARVhdUFD811Vo";
    var success = args.success || function(resp) {};
    var error = args.error || function(resp) {};

    var xhrSetup = {};
    xhrSetup.requestType = "GET";
    xhrSetup.parseJSON = true;
    xhrSetup.url =
        "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId +
        "&key=" + key;

    xhrSetup.success = success;

    /**
     * Description
     * @method error
     * @param {} err
     * @param {} context
     * @return
     */
    xhrSetup.error = function(err, context) {
        error(err, context);
    };

    xhr.request(xhrSetup);
}


/**
 * @method getGMapsPhoto
 * @param {String} photoReference
 */
exports.getGMapsPhoto = function(args) {
    //https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference;=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key;=AddYourOwnKeyHere
    var photoReference = args.photoReference || false;
    var success = args.success || function(resp) {};
    var error = args.error || function(resp) {};

    var xhrSetup = {};
    xhrSetup.requestType = "GET";
    xhrSetup.parseJSON = false;
    xhrSetup.url = "https://maps.googleapis.com/maps/api/place/photo?photoreference=" + photoReference + "&key=" + key;
    xhrSetup.success = success;

    /**
     * Description
     * @method error
     * @param {} err
     * @param {} context
     * @return
     */
    xhrSetup.error = function(err, context) {
        error(err, context);
    };

    xhr.request(xhrSetup);
}


/**
 * This returns a region object that can be used to set the map region
 * @example $.mapview.region = findZoomRegion(points);
 * @method findZoomRegion
 * @param {Object} points
 * @return region
 */
exports.findZoomRegion = function(points) {
    var nbPtToShow = points.length - 1;
    var tmpDeltatLat = 0,
        tmpDeltatLong = 0,
        maxDeltatLat = 0,
        maxDeltatLong = 0,
        centerLat = 0,
        centerLong = 0;

    for (var i = 0; i <= Math.floor(points.length / 2); i++) {
        for (var j = nbPtToShow; j >= Math.floor(points.length / 2); j--) {
            if (j != i) {
                tmpDeltatLat = Math.abs(Math.abs(points[i].latitude) - Math
                    .abs(points[j].latitude));
                if (tmpDeltatLat > maxDeltatLat) {
                    maxDeltatLat = tmpDeltatLat;
                    centerLat = Math.min(points[i].latitude, points[j].latitude) +
                    maxDeltatLat / 2;
                }
                tmpDeltatLong = Math.abs(Math.abs(points[i].longitude) -
                Math.abs(points[j].longitude));
                if (tmpDeltatLong > maxDeltatLong) {
                    maxDeltatLong = tmpDeltatLong;
                    centerLong = Math.min(points[i].longitude, points[j].longitude) +
                    maxDeltatLong / 2;
                }
            }
        }
    }
    var region = {
        latitude: centerLat,
        longitude: centerLong,
        latitudeDelta: maxDeltatLat,
        longitudeDelta: maxDeltatLong
    };
    return region;
}

/**
 * @method getLocation
 */
exports.getLocation = function() {
    if (Ti.Geolocation.locationServicesEnabled) {
        Titanium.Geolocation.purpose = 'Get Current Location';
        Titanium.Geolocation.getCurrentPosition(function(loc) {
            if (loc.error) {
                Ti.API.error('Error: ' + loc.error);
            } else {
                currentLoc = loc;
                getLocalMechanics();
            }
        });
    } else {
        alert('Please enable location services');
    }
}

/**
 * @method forwardGeocode
 */
exports.forwardGeocode = function() {
    //Add the core module into your project
    var geocoder = require('ti.geocoder');

    function forwardGeoCallback(e){
        Ti.API.info("Did it work? " + e.success);
        if(e.success){
            Ti.API.info("This is the number of places found, it can return many depending on your search");
            Ti.API.info("Places found = " + e.placeCount);
        }

        var test = JSON.stringify(e);
        Ti.API.info("Forward Results stringified" + test);
    };

    Ti.API.info("Now let's do some forward Geo and lookup the address for Appcelerator HQ");
    var address="440 N. Bernardo Avenue Mountain View, CA";

    Ti.API.info("We call the forward Geocoder providing an address and callback");
    Ti.API.info("Now we wait for the lookup");
    geocoder.forwardGeocoder(address,forwardGeoCallback);
}

/**
 * @method reverseGeocode
 */
exports.reverseGeocode = function() {
    //Add the core module into your project
    var geocoder = require('ti.geocoder');

    function reverseGeoCallback(e){
        Ti.API.info("Did it work? " + e.success);
        if(e.success){
            Ti.API.info("This is the number of places found, it can return many depending on your search");
            Ti.API.info("Places found = " + e.placeCount);
        }

        var test = JSON.stringify(e);
        Ti.API.info("Forward Results stringified" + test);
    };

    Ti.API.info("Let's now try to do a reverse Geo lookup using the Time Square coordinates");
    Ti.API.info("Pass in our coordinates and callback then wait...");
    geocoder.reverseGeocoder(40.75773,-73.985708,reverseGeoCallback);
}

/**
 * Retrieves the last known place information (address) from the device.
 * @method getCurrentPlace
 */
exports.getCurrentPlace = function() {
    var geocoder = require('ti.geocoder');

    function resultsCallback(e){
        if (!e.success){
            log.warn("[Todo List] Location Failure ", e);
            return;
        }
        log.info("[Todo List] Address Found", e);
    }

    log.debug("[Todo List Detail] Getting address for our current location");
    geocoder.getCurrentPlace(resultsCallback);
}
