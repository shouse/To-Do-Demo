function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.orthlieb.navigationgroup/" + s : s.substring(0, index) + "/com.orthlieb.navigationgroup/" + s.substring(index + 1);
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
    new (require("alloy/widget"))("com.orthlieb.navigationgroup");
    this.__widgetId = "com.orthlieb.navigationgroup";
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
    $.windowStack = [];
    exports.open = function(windowToOpen, options) {
        $.windowStack.push(windowToOpen);
        windowToOpen.addEventListener("close", function() {});
        windowToOpen.addEventListener("open", function(e) {
            $.trigger("open", e);
        });
        windowToOpen.navBarHidden = windowToOpen.navBarHidden || false;
        if (1 === $.windowStack.length) {
            $.navWindow = Ti.UI.iOS.createNavigationWindow({
                window: windowToOpen
            });
            $.navWindow.open();
        } else $.navWindow.open(windowToOpen, options);
    };
    exports.back = function(options) {
        if ($.windowStack.length > 1) {
            $.navWindow.close($.top, options);
            return true;
        }
        return false;
    };
    exports.home = function(options) {
        if ($.windowStack.length > 1) {
            var stack = _.clone($.windowStack);
            for (var i = stack.length - 1; i > 0; i--) $.navWindow.close(stack[i], options);
        }
    };
    Object.defineProperty($, "top", {
        get: function() {
            return _.last($.windowStack);
        }
    });
    Object.defineProperty($, "length", {
        get: function() {
            return $.windowStack.length;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;