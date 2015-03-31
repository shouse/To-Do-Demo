function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.alcoapps.socialshare/" + s : s.substring(0, index) + "/com.alcoapps.socialshare/" + s.substring(index + 1);
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
    function share(args) {
        require(WPATH("com.alcoapps.socialshare")).share(args);
    }
    new (require("alloy/widget"))("com.alcoapps.socialshare");
    this.__widgetId = "com.alcoapps.socialshare";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.share = share;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;