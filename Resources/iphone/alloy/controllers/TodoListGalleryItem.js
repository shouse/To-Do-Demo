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
        setupNav();
        $.imageViewLarge.image = args.image;
    }
    function setupNav() {
        Alloy.Globals.Menu.setTitle("Task Image");
        Alloy.Globals.Menu.setButton({
            button: "l1",
            image: "/images/navigation/ic_chevron_left_white_48dp.png",
            success: function() {
                log.debug("[Maintain] : Redirecting to HomePage");
                Alloy.Globals.Menu.setMainContent("TodoListGallery", {
                    todo_id: todoItem.get("todo_id")
                });
            }
        });
        Alloy.Globals.Menu.showButton("l1");
        Alloy.Globals.Menu.hideButton("r1");
        Alloy.Globals.Menu.hideButton("r2");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "TodoListGalleryItem";
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
    $.__views.viewMain = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        top: "0dp",
        bottom: "0dp",
        layout: "vertical",
        backgroundColor: "#f2eee9",
        id: "viewMain"
    });
    $.__views.viewMain && $.addTopLevelView($.__views.viewMain);
    $.__views.imageViewLarge = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "imageViewLarge"
    });
    $.__views.viewMain.add($.__views.imageViewLarge);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var log = Alloy.Globals.log;
    log.info("Opened TodoListDetails");
    var args = arguments[0] || {};
    var todo_id = args.todo_id || "";
    var todo = Alloy.Collections.instance("ToDo");
    var todoItem = _.first(todo.where({
        todo_id: todo_id
    }));
    require("moment");
    init();
    $.viewMain.cleanup = function() {
        $.destroy();
        $.off();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;