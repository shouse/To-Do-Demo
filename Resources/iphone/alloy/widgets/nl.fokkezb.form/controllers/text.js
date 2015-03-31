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
    this.__controllerPath = "text";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.input = Ti.UI.createTextField({
        height: "44dp",
        backgroundColor: "#ffffff",
        color: "#999",
        paddingLeft: "10%",
        paddingRight: "10%",
        width: Ti.UI.FILL,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        borderWidth: 0,
        font: {
            fontSize: 17
        },
        id: "input"
    });
    $.__views.input && $.addTopLevelView($.__views.input);
    onChange ? $.__views.input.addEventListener("change", onChange) : __defers["$.__views.input!change!onChange"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.baseController = "../widgets/nl.fokkezb.form/controllers/field";
    var format;
    !function(args) {
        var inputProp;
        inputProp = args.input || {};
        delete args.input;
        _.each([ "hinttext" ], function(property) {
            if (_.has(args, property)) {
                inputProp[property] = args[property];
                delete args[property];
            }
        });
        if (args.format) {
            format = args.format;
            delete args.format;
            switch (format) {
              case "email":
                inputProp.keyboardType = inputProp.keyboardType || Ti.UI.KEYBOARD_EMAIL;
                inputProp.autocapitalization = inputProp.autocapitalization || Ti.UI.TEXT_AUTOCAPITALIZATION_NONE;
                inputProp.autocorrect = true === inputProp.autocorrect;
                break;

              case "float":
                inputProp.keyboardType = inputProp.keyboardType || Ti.UI.KEYBOARD_DECIMAL_PAD;
                inputProp.autocapitalization = inputProp.autocapitalization || Ti.UI.TEXT_AUTOCAPITALIZATION_NONE;
                inputProp.autocorrect = true === inputProp.autocorrect;
            }
        }
        _.size(inputProp) > 0 && $.input.applyProperties(inputProp);
        $.setInput($.input);
    }(arguments[0]);
    __defers["$.__views.input!change!onChange"] && $.__views.input.addEventListener("change", onChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;