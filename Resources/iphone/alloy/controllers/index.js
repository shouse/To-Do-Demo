function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init() {
        $.index.open();
        Alloy.createController("TodoList").getView();
        Alloy.Globals.Menu.setMainContent("TodoList");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("ToDo");
    $.__views.index = Ti.UI.createWindow({
        layout: "vertical",
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: "0dp",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.menu = Alloy.createWidget("sh.slideMenuAndNavbar", "widget", {
        id: "menu",
        __parentSymbol: $.__views.index
    });
    $.__views.menu.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("chroma.min");
    init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;