function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.form/" + s : s.substring(0, index) + "/nl.fokkezb.form/" + s.substring(index + 1);
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
    function onChange() {
        $.change();
    }
    new (require("alloy/widget"))("nl.fokkezb.form");
    this.__widgetId = "nl.fokkezb.form";
    require("alloy/controllers/../widgets/nl.fokkezb.form/controllers/field").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "textarea";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.input = Ti.UI.createTextArea({
        height: 132,
        backgroundColor: "#ffffff",
        color: "#999",
        paddingLeft: 0,
        paddingRight: 0,
        width: Ti.UI.FILL,
        font: {
            fontSize: 17
        },
        left: -6,
        id: "input"
    });
    $.__views.input && $.addTopLevelView($.__views.input);
    onChange ? $.__views.input.addEventListener("change", onChange) : __defers["$.__views.input!change!onChange"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.baseController = "../widgets/nl.fokkezb.form/controllers/field";
    !function(args) {
        var inputProp;
        inputProp = args.input || {};
        delete args.input;
        false !== args.next && (inputProp.returnKeyType = Ti.UI.RETURNKEY_NEXT);
        if (_.size(inputProp) > 0) {
            inputProp.returnKeyType && inputProp.returnKeyType === Ti.UI.RETURNKEY_NEXT && $.input.addEventListener("return", function() {
                $.next();
            });
            $.input.applyProperties(inputProp);
        }
        $.setInput($.input);
    }(arguments[0]);
    __defers["$.__views.input!change!onChange"] && $.__views.input.addEventListener("change", onChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;