function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "sh.slideMenuAndNavbar/" + s : s.substring(0, index) + "/sh.slideMenuAndNavbar/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    new (require("alloy/widget"))("sh.slideMenuAndNavbar");
    this.__widgetId = "sh.slideMenuAndNavbar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NavBar";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.NavBar = Ti.UI.createView({
        color: "#ffffff",
        width: "15%",
        height: Ti.UI.FILL,
        top: "10dp",
        bottom: "10dp",
        left: "0dp",
        id: "NavBar"
    });
    $.__views.NavBar && $.addTopLevelView($.__views.NavBar);
    if (!Alloy.isTablet) {
        $.__views.buttonLeft = Ti.UI.createImageView({
            height: "40dp",
            id: "buttonLeft"
        });
        $.__views.NavBar.add($.__views.buttonLeft);
    }
    if (Alloy.isTablet) {
        $.__views.buttonLeft = Ti.UI.createImageView({
            height: "60dp",
            id: "buttonLeft"
        });
        $.__views.NavBar.add($.__views.buttonLeft);
    }
    $.__views.__alloyId62 = Ti.UI.createView({
        color: "#ffffff",
        width: "0dp",
        height: Ti.UI.FILL,
        top: "10dp",
        bottom: "10dp",
        left: "60dp",
        id: "__alloyId62"
    });
    $.__views.__alloyId62 && $.addTopLevelView($.__views.__alloyId62);
    if (!Alloy.isTablet) {
        $.__views.buttonLeft2 = Ti.UI.createImageView({
            height: "40dp",
            id: "buttonLeft2",
            borderWidth: "3"
        });
        $.__views.__alloyId62.add($.__views.buttonLeft2);
    }
    if (Alloy.isTablet) {
        $.__views.buttonLeft2 = Ti.UI.createImageView({
            height: "60dp",
            id: "buttonLeft2"
        });
        $.__views.__alloyId62.add($.__views.buttonLeft2);
    }
    $.__views.viewTitleHolder = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        id: "viewTitleHolder"
    });
    $.__views.viewTitleHolder && $.addTopLevelView($.__views.viewTitleHolder);
    $.__views.labelTitle = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        id: "labelTitle"
    });
    $.__views.viewTitleHolder.add($.__views.labelTitle);
    $.__views.__alloyId63 = Ti.UI.createView({
        color: "#ffffff",
        width: "15%",
        height: Ti.UI.FILL,
        top: "10dp",
        bottom: "10dp",
        right: "50",
        id: "__alloyId63"
    });
    $.__views.__alloyId63 && $.addTopLevelView($.__views.__alloyId63);
    if (!Alloy.isTablet) {
        $.__views.buttonRight2 = Ti.UI.createImageView({
            height: "40dp",
            id: "buttonRight2",
            visible: "false"
        });
        $.__views.__alloyId63.add($.__views.buttonRight2);
    }
    if (Alloy.isTablet) {
        $.__views.buttonRight2 = Ti.UI.createImageView({
            height: "60dp",
            id: "buttonRight2",
            visible: "false"
        });
        $.__views.__alloyId63.add($.__views.buttonRight2);
    }
    $.__views.__alloyId64 = Ti.UI.createView({
        color: "#ffffff",
        width: "15%",
        height: Ti.UI.FILL,
        top: "10dp",
        bottom: "10dp",
        right: "0dp",
        id: "__alloyId64"
    });
    $.__views.__alloyId64 && $.addTopLevelView($.__views.__alloyId64);
    if (!Alloy.isTablet) {
        $.__views.buttonRight = Ti.UI.createImageView({
            height: "40dp",
            id: "buttonRight",
            visible: "false"
        });
        $.__views.__alloyId64.add($.__views.buttonRight);
    }
    if (Alloy.isTablet) {
        $.__views.buttonRight = Ti.UI.createImageView({
            height: "60dp",
            id: "buttonRight",
            visible: "false"
        });
        $.__views.__alloyId64.add($.__views.buttonRight);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;