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
        var labels = _.values(config.options);
        labels.push(config.cancel);
        var cancelIndex = labels.length - 1;
        var selectedIndex = _.isArray(config.options) ? value : _.indexOf(_.keys(config.options), value);
        var dialog = Ti.UI.createOptionDialog({
            cancel: cancelIndex,
            options: labels,
            selectedIndex: selectedIndex,
            title: $.label.text
        });
        dialog.addEventListener("click", function(e) {
            if (e.index === e.cancel) return;
            var val = _.isArray(config.options) ? e.index : _.keys(config.options)[e.index];
            $.setValue(val);
            $.change();
        });
        dialog.show(config.iPadArrow ? {
            view: $.input
        } : {});
    }
    function getValue() {
        return value;
    }
    function setValue(val) {
        value = val;
        $.input.text = config.options[value];
    }
    new (require("alloy/widget"))("nl.fokkezb.form");
    this.__widgetId = "nl.fokkezb.form";
    require("alloy/controllers/../widgets/nl.fokkezb.form/controllers/field").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "select";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.input = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: 17
        },
        color: "#999",
        width: Ti.UI.FILL,
        height: 40,
        id: "input"
    });
    $.__views.input && $.addTopLevelView($.__views.input);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.baseController = "../widgets/nl.fokkezb.form/controllers/field";
    $.focus = focus;
    $.getValue = getValue;
    $.setValue = setValue;
    var value;
    var config = {
        options: [],
        iPadArrow: true,
        cancel: L("nlFokkezbForm_cancel", "Cancel")
    };
    !function(args) {
        args.select && _.extend(config, args.select);
        $.row.applyProperties($.createStyle({
            classes: [ "row" ]
        }));
        args.input && $.input.applyProperties(args.input);
        $.setInput($.input);
    }(arguments[0]);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;