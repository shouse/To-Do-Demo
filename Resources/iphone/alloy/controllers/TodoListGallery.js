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
        log.info("[Gallery] Initializing ");
        setupNav();
        if (todoItem.get("photoCount")) {
            createGallery();
            galleryExists = true;
        }
    }
    function setupNav() {
        Alloy.Globals.Menu.setTitle("Task Gallery");
        Alloy.Globals.Menu.setColor("#aaa");
        Alloy.Globals.Menu.setButton({
            button: "l1",
            image: "/images/navigation/ic_chevron_left_white_48dp.png",
            success: function() {
                log.debug("[Gallery] : Redirecting to Detail Page");
                Alloy.Globals.Menu.setMainContent("TodoListDetail", {
                    todo_id: todoItem.get("todo_id")
                });
            }
        });
        Alloy.Globals.Menu.setButton({
            button: "r2",
            image: "/images/action/ic_search_white_48dp.png",
            success: function() {
                $.search.height = 0 == $.search.height ? 44 : 0;
            }
        });
        Alloy.Globals.Menu.setButton({
            button: "r1",
            image: "/images/action/ic_add_white_48dp.png",
            success: function() {
                require("Camera").promptGalleryOrCamera();
            }
        });
        Alloy.Globals.Menu.showButton("r1");
        Alloy.Globals.Menu.hideButton("r2");
        Alloy.Globals.Menu.showButton("l1");
    }
    function getPictureView(photoCount, width, height) {
        log.debug("[Gallery] : getPictureView : photoCount = ", photoCount + ", width = " + width + ", height = " + height);
        var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "todo");
        var file = Ti.Filesystem.getFile(imageDir.resolve(), todo_id + photoCount + ".png");
        if (file.exists()) {
            log.info("[TodoListGallery] : Retrieved saved picture : ", file);
            var imageView = Ti.UI.createImageView({
                image: file,
                width: width,
                height: height,
                borderColor: "white"
            });
            return {
                view: imageView,
                file: file
            };
        }
        log.warn("[TodoListGallery] : No saved pictures found.  Should not see this");
        return false;
    }
    function createGallery() {
        log.debug("[Gallery] : createGallery() : number of images = ", todoItem.get("photoCount"));
        galleryExists = true;
        var photoCount = todoItem.get("photoCount");
        var columns = 0;
        if (1 > photoCount) {
            Alloy.Globals.Menu.showInfoBar({
                title: "No Photos To Display"
            });
            log.debug("[Gallery] : createGallery : photoCount === 0");
            return false;
        }
        columns = 1 == photoCount ? 1 : 2 == photoCount ? 2 : 3;
        if (0 == columns) return;
        $.tdg.init({
            columns: columns,
            space: 10,
            delayTime: 500,
            itemBorderColor: "#eb5d36",
            itemBorderWidth: 3,
            itemBorderRadius: 5,
            onItemClick: openLargeImage
        });
        displayAllPhotos(photoCount);
    }
    function openLargeImage(image) {
        Alloy.Globals.Menu.setMainContent("TodoListGalleryItem", {
            image: image,
            todo_id: todoItem.get("todo_id")
        });
    }
    function displayAllPhotos(photoCount) {
        var images = [];
        _(photoCount).times(function(n) {
            var imageViewAndFile = getPictureView(n + 1, 150, 150);
            var itemData = {
                caption: "Test",
                file: imageViewAndFile.file
            };
            images.push({
                view: imageViewAndFile.view,
                data: itemData
            });
        });
        $.tdg.addGridItems(images);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "TodoListGallery";
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
    $.__views.viewRow = Ti.UI.createScrollView({
        layout: "vertical",
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "viewRow",
        horizontalBounce: "false",
        backgroundColor: "#efefef"
    });
    $.__views.viewMain.add($.__views.viewRow);
    $.__views.__alloyId99 = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: "10dp",
        backgroundColor: "#eb5d36",
        id: "__alloyId99"
    });
    $.__views.viewRow.add($.__views.__alloyId99);
    $.__views.tdg = Alloy.createWidget("com.prodz.tidynamicgrid", "widget", {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "tdg",
        __parentSymbol: $.__views.viewRow
    });
    $.__views.tdg.setParent($.__views.viewRow);
    $.__views.label = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        height: "0dp",
        top: "0dp",
        text: "There are no photos to show",
        id: "label"
    });
    $.__views.viewRow.add($.__views.label);
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
    var galleryExists = false;
    init();
    $.viewMain.cleanup = function() {
        $.destroy();
        $.off();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;