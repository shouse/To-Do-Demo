var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var LogObject = require("logging/logging");

var log = new LogObject.Logger();

log.init();

Alloy.Globals.log = log;

var navArgs = {
    splitWindow: true
};

var NavObject = require("NavController");

var nav = new NavObject.NavController();

nav.init(navArgs);

Alloy.Globals.nav = nav;

Ti.Network.addEventListener("change", function(e) {
    Alloy.Globals.networkIsOnline = e.online;
    Alloy.Globals.networkType = e.networkType;
});

Alloy.Globals.isOnline = function() {
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

Alloy.Globals.Colors = [ {
    name: "orange",
    color: "#eb5d36"
}, {
    name: "green",
    color: "#172800"
}, {
    name: "darkBlue",
    color: "#1a1c20"
}, {
    name: "brown",
    color: "#604800"
}, {
    name: "gray",
    color: "#cccccc"
}, {
    name: "mediumBlue",
    color: "#373c45"
} ];

Alloy.createController("index");