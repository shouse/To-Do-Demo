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
        $.picker.color = $.getValue();
        $.popover.show({
            view: $.input
        });
    }
    function blur() {
        $.popover.hide();
    }
    function setValue(val) {
        value = val;
        var prop = {
            backgroundColor: "white",
            color: "black"
        };
        if (value) {
            prop.backgroundColor = value;
            if (showHex) {
                prop.text = "  " + value + "  ";
                var rgb = $.picker.convert.hex2rgb(value);
                rgb && (prop.color = $.picker.convert.hsv2bw($.picker.convert.rgb2hsv(rgb)));
            }
        }
        $.input.applyProperties(prop);
    }
    function getValue() {
        return value;
    }
    function onColorChange(e) {
        var val = e.hex;
        $.setValue(val);
        $.change();
    }
    function onToggleClick() {
        var i = _.indexOf(spectrums, spectrum) + 1;
        i === spectrums.length && (i = 0);
        spectrum = spectrums[i];
        $.picker.applyProperties({
            spectrum: spectrum
        });
    }
    new (require("alloy/widget"))("nl.fokkezb.form");
    this.__widgetId = "nl.fokkezb.form";
    require("alloy/controllers/../widgets/nl.fokkezb.form/controllers/field").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "color";
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
        color: "white",
        left: 0,
        width: 100,
        height: 40,
        borderWidth: 1,
        borderColor: "#E3E3E5",
        borderRadius: 5,
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
            width: 320,
            height: 320,
            id: "win"
        });
        var __alloyId72 = [];
        $.__views.__alloyId73 = Ti.UI.createButton({
            font: {
                fontFamily: "HelveticaNeue-Light",
                fontSize: "14dp"
            },
            height: "44dp",
            width: "100%",
            title: L("nlFokkezbForm_toggleBtn", "Change palette"),
            id: "__alloyId73"
        });
        __alloyId72.push($.__views.__alloyId73);
        onToggleClick ? $.__views.__alloyId73.addEventListener("click", onToggleClick) : __defers["$.__views.__alloyId73!click!onToggleClick"] = true;
        $.__views.__alloyId74 = Ti.UI.createButton({
            systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
        });
        __alloyId72.push($.__views.__alloyId74);
        $.__views.toolbar = Ti.UI.iOS.createToolbar({
            items: __alloyId72,
            id: "toolbar"
        });
        $.__views.win.add($.__views.toolbar);
        $.__views.picker = Alloy.createWidget("nl.fokkezb.color", "widget", {
            id: "picker",
            __parentSymbol: $.__views.win
        });
        $.__views.picker.setParent($.__views.win);
        onColorChange ? $.__views.picker.on("change", onColorChange) : __defers["$.__views.picker!change!onColorChange"] = true;
        $.__views.popover.contentView = $.__views.win;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.baseController = "../widgets/nl.fokkezb.form/controllers/field";
    $.focus = focus;
    $.blur = blur;
    $.setValue = setValue;
    $.getValue = getValue;
    var value;
    var showHex = true;
    var spectrums;
    var spectrum;
    !function(args) {
        if ("ipad" !== Ti.Platform.osname) throw "The color-field type only supports iPad for now.";
        $.row.applyProperties($.createStyle({
            classes: [ "row" ]
        }));
        if (args.input) {
            _.has(args.input, "text") && (showHex = false);
            $.input.applyProperties(args.input);
        }
        if (args.color) {
            if (args.color.spectrums) {
                spectrums = args.color.spectrums;
                spectrum = args.color.spectrum = args.color.spectrum || spectrums[0];
                $.toolbar.show();
                $.win.layout = "vertical";
            } else {
                $.toolbar.hide();
                $.win.layout = "composite";
            }
            $.picker.applyProperties(args.color);
        }
        $.setInput($.input);
    }(arguments[0]);
    true && Alloy.isTablet && __defers["$.__views.__alloyId73!click!onToggleClick"] && $.__views.__alloyId73.addEventListener("click", onToggleClick);
    __defers["$.__views.picker!change!onColorChange"] && $.__views.picker.on("change", onColorChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;