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
    function focus() {
        var val = !$.input.value;
        $.input.value = val;
    }
    function getValue() {
        return $.input.value;
    }
    function setValue(val) {
        $.input.value = !!val;
    }
    function isValid() {
        return true;
    }
    function onChange() {
        $.change();
    }
    new (require("alloy/widget"))("nl.fokkezb.form");
    this.__widgetId = "nl.fokkezb.form";
    require("alloy/controllers/../widgets/nl.fokkezb.form/controllers/field").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "switch";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.input = Ti.UI.createSwitch({
        right: 0,
        height: 40,
        value: false,
        id: "input"
    });
    $.__views.input && $.addTopLevelView($.__views.input);
    onChange ? $.__views.input.addEventListener("change", onChange) : __defers["$.__views.input!change!onChange"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.baseController = "../widgets/nl.fokkezb.form/controllers/field";
    $.focus = focus;
    $.getValue = getValue;
    $.setValue = setValue;
    $.isValid = isValid;
    !function(args) {
        args.input && $.input.applyProperties(args.input);
        $.setInput($.input);
    }(arguments[0]);
    __defers["$.__views.input!change!onChange"] && $.__views.input.addEventListener("change", onChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;