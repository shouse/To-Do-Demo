// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.

// Logging utility and expose it to the global namespace
var LogObject = require('logging');
var log = new LogObject.Logger();
log.init();

Alloy.Globals.log = log;

// Cross-Platform Navigation Controller and expose it to the global namespace
var navArgs = { splitWindow: true };
var NavObject = require('NavController');
var nav = new NavObject.NavController();
nav.init(navArgs);
Alloy.Globals.nav = nav;

// Map
// Alloy.Globals.Map = require('ti.map');

// Facebook module, which can be referenced by Alloy.Globals.Facebook
// Alloy.Globals.Facebook = require('facebook');

// Global notification widget
//Alloy.Globals.toast = Alloy.createWidget('nl.fokkezb.toast', 'global', { // defaults });

// Logger Add exception handling - 'Red Screen of Death'
// var Logger = require("yy.logcatcher");
//var exceptions = require('logging/exceptions');
//Logger.addEventListener('error', function(e) {
    //exceptions.parseException(e);
//});

// Network status
Ti.Network.addEventListener('change', function(e) {
    Alloy.Globals.networkIsOnline = e.online;
    Alloy.Globals.networkType = e.networkType;
});

/**
 * Find out if Titanium device is online.  Doing it this way because of false positives using Ti.Network.online
 * @method isOnline
 */
Alloy.Globals.isOnline = function isOnline() {
    var onlineStatus = false;
    if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE) {
        onlineStatus = false;
        Ti.API.info("Network Status: online");
    } else {
        onlineStatus = true;
        Ti.API.info("Network Status: offline");
    }

    return onlineStatus;
};


// Let's create a random color scheme for the app based on Propellics base colors
// @link http://www.colorcombos.com/combotester.html?rnd=0&color0=172800&color1=1a1c20&color2=604800&color3=cccccc&color4=373c45&color5=eb5d36&color6=f0f0f0&color7=fb734e&color8=ffffff&color9=e1e1e1&color10=bfbfbf
Alloy.Globals.Colors = [
    { name: "orange", color: "#eb5d36" },
    { name: "green", color: "#172800" },
    { name: "darkBlue", color: "#1a1c20" },
    { name: "brown", color: "#604800" },
    { name: "gray", color: "#cccccc" },
    { name: "mediumBlue", color: "#373c45" }
];

