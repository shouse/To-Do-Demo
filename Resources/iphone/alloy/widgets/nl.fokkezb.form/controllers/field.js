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
    function setInput(input) {
        $.input || ($.input = input);
        $.control.add($.input);
        void 0 !== value && $.setValue(value);
    }
    function showError(show) {
        if (show) {
            Alloy.addClass(controllerParam, $.row, "errorRow");
            Alloy.addClass(controllerParam, $.label, "errorLabel");
        } else {
            Alloy.removeClass(controllerParam, $.row, "errorRow");
            Alloy.removeClass(controllerParam, $.label, "errorLabel");
        }
    }
    function focus() {
        $.input.focus();
    }
    function blur() {
        $.input.blur();
    }
    function next() {
        var nextField = $.form.getNextField($.name);
        nextField && nextField.focus();
        $.blur();
    }
    function getValue() {
        return $.input.value;
    }
    function setValue(val) {
        $.input.value = "" + val;
    }
    function change() {
        $.trigger("change", {
            form: $.form,
            field: $.name,
            value: $.getValue()
        });
    }
    function isValid() {
        var value = $.getValue();
        var valid = true;
        $.required && !value ? valid = false : $.validator && (valid = $.validator(value));
        $.showError(!valid);
        return valid;
    }
    new (require("alloy/widget"))("nl.fokkezb.form");
    this.__widgetId = "nl.fokkezb.form";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "field";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "bold",
            fontStyle: "normal"
        },
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        layout: "horizontal",
        apiName: "Ti.UI.TableViewRow",
        id: "row",
        classes: [ "row" ]
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.label = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#000",
        width: 145,
        height: Ti.UI.SIZE,
        top: 19,
        left: 15,
        apiName: "Ti.UI.Label",
        id: "label",
        classes: [ "label" ]
    });
    $.__views.row.add($.__views.label);
    $.__views.control = Ti.UI.createView({
        color: "#ffffff",
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 10,
        right: 15,
        left: 15,
        apiName: "Ti.UI.View",
        id: "control",
        classes: [ "control" ]
    });
    $.__views.row.add($.__views.control);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var util = require(WPATH("util"));
    $.validator = null;
    $.required = false;
    $.form = null;
    $.name = null;
    $.setInput = setInput;
    $.focus = focus;
    $.blur = blur;
    $.next = next;
    $.setValue = setValue;
    $.getValue = getValue;
    $.change = change;
    $.isValid = isValid;
    $.showError = showError;
    var controllerParam = {
        widgetId: $.__widgetId,
        name: $.__controllerPath
    };
    var value;
    !function(args) {
        $.form = args.form;
        $.name = args.name;
        $.row.applyProperties(_.extend(args.row || {}, {
            _name: $.name
        }));
        args.validator && ($.validator = args.validator);
        $.required = true === args.required;
        var label = util.extractProperties(args, "label", "text");
        _.size(label) > 0 && $.label.applyProperties(label);
        void 0 !== args.value && (value = args.value);
        args.listener && $.on("change", args.listener);
    }(arguments[0]);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;