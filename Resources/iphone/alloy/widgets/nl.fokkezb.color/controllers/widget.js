function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.color/" + s : s.substring(0, index) + "/nl.fokkezb.color/" + s.substring(index + 1);
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
    function applyProperties(prop) {
        if (prop.spectrum) {
            spectrum = _.isObject(prop.spectrum) ? prop.spectrum : require(WPATH(prop.spectrum));
            var image = spectrum.image;
            "/" !== image.substr(0, 1) && (image = WPATH(image));
            prop.backgroundImage = image;
        }
        var apply = _.omit(prop, "id", "__parentSymbol", "__itemTemplate", "$model", "children", "color", "spectrum");
        _.size(apply) > 0 && $.image.applyProperties(apply);
        prop.color ? setColor(prop.color) : prop.spectrum && setCircle();
    }
    function setColor(clr) {
        parseColor(clr);
        setCircle();
    }
    function getColor() {
        return color;
    }
    function onPostlayout() {
        $.image.removeEventListener("postlayout", onPostlayout);
        rect = $.image.rect;
        setCircle();
    }
    function onColorChange(e) {
        var x = e.x, y = e.y;
        x = Math.max(0, Math.min(rect.width, x));
        y = Math.max(0, Math.min(rect.height, y));
        var pc = {
            x: x / rect.width * 100,
            y: y / rect.height * 100
        };
        var hsv = spectrum.pc2hsv(pc);
        var rgb = $.convert.hsv2rgb(hsv);
        var hex = $.convert.rgb2hex(rgb);
        var bw = $.convert.hsv2bw(hsv);
        color = {
            hsv: hsv,
            rgb: rgb,
            hex: hex,
            bw: bw
        };
        $.circle.applyProperties({
            center: {
                x: x,
                y: y
            },
            borderColor: bw
        });
        $.circle.show();
        $.trigger("change", color);
    }
    function parseColor(clr) {
        var hsv, rgb, hex, bw;
        if (_.isObject(clr)) if (clr.h) {
            hsv = clr;
            rgb = $.convert.hsv2rgb(hsv);
            hex = $.convert.rgb2hex(rgb);
        } else {
            if (!clr.r) {
                color = clr;
                return;
            }
            rgb = clr;
            hex = $.convert.rgb2hex(rgb);
            hsv = $.convert.rgb2hsv(rgb);
        } else {
            if (!_.isString(clr)) return;
            hex = clr;
            rgb = $.convert.hex2rgb(hex);
            if (!rgb) return;
            hsv = $.convert.rgb2hsv(rgb);
        }
        bw = $.convert.hsv2bw(hsv);
        color = {
            hsv: hsv,
            rgb: rgb,
            hex: hex,
            bw: bw
        };
    }
    function setCircle() {
        if (rect && color) {
            var pc = spectrum.hsv2pc(color.hsv);
            var px = {
                x: rect.width * (pc.x / 100),
                y: rect.height * (pc.y / 100)
            };
            $.circle.applyProperties({
                center: px,
                borderColor: color.bw
            });
            $.circle.show();
        } else $.circle.hide();
    }
    new (require("alloy/widget"))("nl.fokkezb.color");
    this.__widgetId = "nl.fokkezb.color";
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
    $.__views.image = Ti.UI.createView({
        color: "#ffffff",
        backgroundImage: WPATH("images/ghsv.png"),
        id: "image"
    });
    $.__views.image && $.addTopLevelView($.__views.image);
    onColorChange ? $.__views.image.addEventListener("touchmove", onColorChange) : __defers["$.__views.image!touchmove!onColorChange"] = true;
    onColorChange ? $.__views.image.addEventListener("click", onColorChange) : __defers["$.__views.image!click!onColorChange"] = true;
    onPostlayout ? $.__views.image.addEventListener("postlayout", onPostlayout) : __defers["$.__views.image!postlayout!onPostlayout"] = true;
    $.__views.circle = Ti.UI.createView({
        color: "#ffffff",
        width: 20,
        height: 20,
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 10,
        touchEnabled: false,
        visible: false,
        id: "circle"
    });
    $.__views.image.add($.__views.circle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.convert = require(WPATH("convert"));
    Object.defineProperty($, "color", {
        get: getColor,
        set: setColor
    });
    $.setColor = setColor;
    $.getColor = getColor;
    $.applyProperties = applyProperties;
    var spectrum, rect, color;
    !function(args) {
        args.children && _.each(args.children, function(child) {
            $.image.add(child);
        });
        args.spectrum = args.spectrum || "ghsv";
        applyProperties(args);
    }(arguments[0] || {});
    __defers["$.__views.image!touchmove!onColorChange"] && $.__views.image.addEventListener("touchmove", onColorChange);
    __defers["$.__views.image!click!onColorChange"] && $.__views.image.addEventListener("click", onColorChange);
    __defers["$.__views.image!postlayout!onPostlayout"] && $.__views.image.addEventListener("postlayout", onPostlayout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;