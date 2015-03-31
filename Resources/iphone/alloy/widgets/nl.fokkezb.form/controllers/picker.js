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
    function focus(e) {
        var date;
        m && (date = 0 === m.year() ? moment(m).year(2e3).toDate() : m.toDate());
        $.picker.value = date;
        if ("ipad" === Ti.Platform.osname) $.popover.show({
            view: $.input
        }); else {
            $.pickerRow.add($.picker);
            $.picker.addEventListener("change", function() {
                onDialogClose({
                    value: $.picker.value
                });
            });
            if (false === pickerShowing) {
                table.insertRowAfter(e.index, $.pickerRow, {
                    animationStyle: Titanium.UI.iPhone.RowAnimationStyle.DOWN
                });
                pickerShowing = true;
            } else if (true === pickerShowing) {
                table.deleteRow(e.index + 1, {
                    animationStyle: Titanium.UI.iPhone.RowAnimationStyle.UP
                });
                pickerShowing = false;
                onDialogClose({
                    value: $.picker.value
                });
            }
        }
    }
    function setValue(value) {
        var mom = moment(value, "string" == typeof value ? picker.valueFormat : void 0);
        if (!mom) {
            console.error("Invalid value: " + JSON.stringify(value));
            return;
        }
        m = mom;
        $.input.text = m.format(picker.textFormat || picker.valueFormat);
    }
    function getValue() {
        return m ? m.format(picker.valueFormat) : null;
    }
    function onDialogClose(e) {
        if (!e.cancel) {
            $.setValue(e.value);
            $.change();
        }
    }
    new (require("alloy/widget"))("nl.fokkezb.form");
    this.__widgetId = "nl.fokkezb.form";
    require("alloy/controllers/../widgets/nl.fokkezb.form/controllers/field").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "picker";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
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
    if (true && Alloy.isTablet) {
        $.__views.popover = Ti.UI.iPad.createPopover({
            id: "popover"
        });
        $.__views.popover && $.addTopLevelView($.__views.popover);
        $.__views.win = Ti.UI.createWindow({
            layout: "vertical",
            backgroundColor: "#ffffff",
            id: "win"
        });
        $.__views.__alloyId77 = Ti.UI.createButton({
            font: {
                fontFamily: "HelveticaNeue-Light",
                fontSize: "14dp"
            },
            height: "44dp",
            width: "100%",
            systemButton: Ti.UI.iPhone.SystemButton.SAVE,
            id: "__alloyId77"
        });
        $.__views.win.rightNavButton = $.__views.__alloyId77;
        onSetClick ? $.__views.__alloyId77.addEventListener("click", onSetClick) : __defers["$.__views.__alloyId77!click!onSetClick"] = true;
        $.__views.__alloyId76 = Ti.UI.iOS.createNavigationWindow({
            width: 300,
            height: 250,
            window: $.__views.win,
            id: "__alloyId76"
        });
        $.__views.popover.contentView = $.__views.__alloyId76;
    }
    $.__views.picker = Ti.UI.createPicker({
        id: "picker"
    });
    $.__views.picker && $.addTopLevelView($.__views.picker);
    $.__views.unset = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: "44dp",
        width: "100%",
        id: "unset",
        systemButton: Ti.UI.iPhone.SystemButton.TRASH
    });
    $.__views.unset && $.addTopLevelView($.__views.unset);
    onUnsetClick ? $.__views.unset.addEventListener("click", onUnsetClick) : __defers["$.__views.unset!click!onUnsetClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    exports.baseController = "../widgets/nl.fokkezb.form/controllers/field";
    $.focus = focus;
    $.setValue = setValue;
    $.getValue = getValue;
    var m;
    var table;
    var pickerShowing = false;
    var picker = {
        type: Ti.UI.PICKER_TYPE_DATE,
        valueFormat: "YYYY-MM-DD"
    };
    !function(args) {
        table = args.form.table;
        picker = _.extend(picker, args.picker || {});
        $.picker.applyProperties(picker);
        $.row.applyProperties($.createStyle({
            classes: [ "row" ]
        }));
        args.input && $.input.applyProperties(args.input);
        $.setInput($.input);
        if ("ipad" === Ti.Platform.osname) {
            $.popover.title = $.label.text;
            $.popover.add($.picker);
        }
    }(arguments[0]);
    __defers["$.__views.__alloyId77!click!onSetClick"] && $.__views.__alloyId77.addEventListener("click", onSetClick);
    __defers["$.__views.unset!click!onUnsetClick"] && $.__views.unset.addEventListener("click", onUnsetClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;