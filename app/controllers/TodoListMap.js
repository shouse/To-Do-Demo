/**
 * @description This is the controller file for Map and Location Based code
 *
 * @class Controller.Map
 * @author Steven House
 * @email steven.m.house@gmail.com
 */

// Include logging utility
var log = Alloy.Globals.log;
log.info('[Map]: Opened Page');

// Access the Global Navigation Controller
var nav = Alloy.Globals.nav;
log.info('[Map] : Loaded nav: ');

var currentLoc;

var xhr = require('httpClient');

init();
addEventListeners();

/**
 * Start the controller running
 * @method init
 * @return
 */
function init() {
    Alloy.Globals.Menu.setColor(Alloy.CFG.themeColors.lightMaintain);
    Alloy.Globals.Menu.hideBottomBar();
    log.info('[Map]: Initializing');
}

/**
 * Any cleanup the controller needs
 * @method cleanup
 * @return
 */
$.viewMain.cleanup = function() {

};

/**
 * Add event listeners for the ListView.
 * 'itemclick' - open detail window
 * 'swipe left' - Set Reminder
 * 'swipe right' - Mark as Done
 * @method addEventListeners
 * @return
 */
function addEventListeners() {
    // Add Annotation click handler
    $.mapview.addEventListener('click', function(e) {
        alert(JSON.stringify(e, null, 4));
        Alloy.Globals.Menu.setMainContent('MapDetail', {placeId: e.annotation.myid});
    });

    $.mapview.addEventListener('complete', function(e) {
        Ti.API.info('complete');
        Ti.API.info(e);
    });
    $.mapview.addEventListener('error', function(e) {
        Ti.API.info('error');
        Ti.API.info(e);
    });
    $.mapview.addEventListener('loading', function(e) {
        Ti.API.info('loading');
        Ti.API.info(e);
    });
    $.mapview.addEventListener('regionChanged', function(e) {
        Ti.API.info('regionChanged');
        Ti.API.info(e);
    });
}

/**
 * Add data to the Map's List View
 * @method addListView
 * @return
 */
function addListView(mechanics) {

    // Push data to the List View
    var data = [];
    _.each(mechanics, function(mechanic) {
        var subtitle2 = mechanic.openNow ? "OPEN" : "CLOSED";
        subtitle2 = subtitle2 + "  |  Rating: " + mechanic.rating;
        data.push({
            itemTitle: {
                text: mechanic.name,
                font: {
                    fontSize: 18
                },
                left: 10,
                top: 10,
                height: Ti.UI.SIZE
            },
            itemSubtitle: {
                text: mechanic.vicinity,
                color: "#666",
                font: {
                    fontSize: 14
                },
                left: 10,
                top: 5,
                height: Ti.UI.SIZE
            },
            itemSubtitle2: {
                text: subtitle2,
                color: mechanic.openNow ? "green" : "red",
                font: {
                    fontSize: 14
                },
                left: 10,
                top: 5,
                height: Ti.UI.SIZE
            },
            properties: {
                itemId: mechanic.name,
                searchableText: mechanic.name,
                backgroundColor: '#fff',
                height: 77
            }
        });
    });

    var headerTitle = "Test Header Title"

    var listSection = Titanium.UI.createListSection({
        // properties
        items: data,
        //headerView : listSectionHeaderView
        headerTitle: headerTitle
    });

    $.listViewMaintain.appendSection(listSection);

}

/**
 * Get Local Places
 * @method getLocalPlaces
 * @return
 */
function getLocalPlaces() {
    var placeArgs = {
        radius: 2500,
        placeType: "car_repair",
        lat: currentLoc.coords.latitude,
        lng: currentLoc.coords.longitude,
        success: displayPlaces,
        error: function(err) {
            alert(err);
        }
    };

    var mapUtils = require('mapUtils').getLocalPlace(placeArgs);
}

/**
 * This function adds annotations to the map, and then adds information to the ListView
 * @method displayMechanics
 * @param {} mechanics
 * @return
 */
function displayPlaces(places) {
    var points = require("mapUtils").getPlaceAnnotiations(places.results);
    // Set the region to be close the points
    $.mapview.region = require("mapUtils").findZoomRegion(points);
    addListView(points.results);
}
