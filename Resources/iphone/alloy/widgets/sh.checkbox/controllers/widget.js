function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "sh.checkbox/" + s : s.substring(0, index) + "/sh.checkbox/" + s.substring(index + 1);
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
    function checkboxClick() {
        $.value = !$.value;
        $.trigger("change", {
            value: $.value
        });
    }
    new (require("alloy/widget"))("sh.checkbox");
    this.__widgetId = "sh.checkbox";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "horizontal",
        id: "container",
        borderColor: "black",
        borderWidth: "3"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.checkbox = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        image: WPATH("checkmark-on.png"),
        id: "checkbox"
    });
    $.__views.container.add($.__views.checkbox);
    checkboxClick ? $.__views.checkbox.addEventListener("click", checkboxClick) : __defers["$.__views.checkbox!click!checkboxClick"] = true;
    $.__views.label = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        color: "#000",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: "0dp",
        id: "label"
    });
    $.__views.container.add($.__views.label);
    checkboxClick ? $.__views.label.addEventListener("click", checkboxClick) : __defers["$.__views.label!click!checkboxClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dimensions = [ "left", "top", "right", "bottom", "center", "width", "height" ];
    var args = arguments[0] || {};
    _.extend($.label, _.chain(args).omit("value").omit(dimensions).value());
    _.extend($.container, _.pick(args, dimensions));
    Object.defineProperty($, "enabled", {
        get: function() {
            return $._enabled;
        },
        set: function(enabled) {
            $._enabled = enabled;
            $.checkbox.touchEnabled = $.label.touchEnabled = enabled;
        }
    });
    Object.defineProperty($, "visible", {
        get: function() {
            return $.container.visible;
        },
        set: function(visible) {
            $.container.visible = visible;
        }
    });
    Object.defineProperty($, "value", {
        get: function() {
            return $._value;
        },
        set: function(value) {
            $._value = value;
            $.checkbox.image = value ? WPATH("ic_done_black_48dp.png") : "";
        }
    });
    Object.defineProperty($, "text", {
        get: function() {
            return $.label.text;
        },
        set: function(text) {
            $.label.text = text;
        }
    });
    $.value = _.isUndefined(args.value) ? false : args.value;
    __defers["$.__views.checkbox!click!checkboxClick"] && $.__views.checkbox.addEventListener("click", checkboxClick);
    __defers["$.__views.label!click!checkboxClick"] && $.__views.label.addEventListener("click", checkboxClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;