function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.sivci.logger/" + s : s.substring(0, index) + "/com.sivci.logger/" + s.substring(index + 1);
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
    function init() {
        var colors = {
            E: "#EE0000",
            W: "#E48743",
            I: "#EEEEEE",
            D: "#00DD00"
        };
        $.viewLogType.backgroundColor = colors[currentLog.level] || "#FFF";
        $.labelLogType.text = currentLog.level;
        $.labelDescription.text = currentLog.message;
        $.labelDate.text = moment(currentLog.time).format("MMMM Do YYYY, h:mm:ss a");
        $.labelDetail.text = JSON.stringify(currentLog.data, null, 4);
    }
    function addEventListeners() {}
    new (require("alloy/widget"))("com.sivci.logger");
    this.__widgetId = "com.sivci.logger";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "LogDetail";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.viewMain = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#f2eee9",
        id: "viewMain",
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    $.__views.viewMain && $.addTopLevelView($.__views.viewMain);
    $.__views.viewLogSummary = Ti.UI.createView({
        color: "#ffffff",
        id: "viewLogSummary",
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "50"
    });
    $.__views.viewMain.add($.__views.viewLogSummary);
    $.__views.viewLogType = Ti.UI.createView({
        color: "#ffffff",
        id: "viewLogType",
        width: "50",
        height: Ti.UI.FILL,
        left: "0"
    });
    $.__views.viewLogSummary.add($.__views.viewLogType);
    $.__views.labelLogType = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        id: "labelLogType",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.viewLogType.add($.__views.labelLogType);
    $.__views.__alloyId0 = Ti.UI.createView({
        color: "#ffffff",
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "20",
        right: "20",
        id: "__alloyId0"
    });
    $.__views.viewLogSummary.add($.__views.__alloyId0);
    $.__views.labelDescription = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        id: "labelDescription",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId0.add($.__views.labelDescription);
    $.__views.labelDate = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        id: "labelDate",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId0.add($.__views.labelDate);
    $.__views.__alloyId1 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10",
        id: "__alloyId1"
    });
    $.__views.viewMain.add($.__views.__alloyId1);
    $.__views.viewDetailInfo = Ti.UI.createScrollView({
        layout: "vertical",
        color: "#ffffff",
        id: "viewDetailInfo",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        left: "10",
        right: "10"
    });
    $.__views.viewMain.add($.__views.viewDetailInfo);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        text: "MESSAGE DETAILS",
        top: "30",
        id: "__alloyId2"
    });
    $.__views.viewDetailInfo.add($.__views.__alloyId2);
    $.__views.labelDetail = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        id: "labelDetail"
    });
    $.__views.viewDetailInfo.add($.__views.labelDetail);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _ = require("alloy/underscore")._;
    var moment = require("moment");
    var log = Alloy.Globals.log;
    var args = arguments[0] || {};
    var message = args.message;
    var logs = log.getLogs();
    var currentLog = logs.findWhere({
        message: message
    }).toJSON();
    init();
    addEventListeners();
    $.viewMain.cleanup = function() {
        log.info("[LogDetail] : Cleanup");
        $.destroy();
        $.off();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;