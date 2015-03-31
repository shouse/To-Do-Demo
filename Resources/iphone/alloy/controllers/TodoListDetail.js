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
        addEventListeners();
        addCheckbox();
        $.labelTitle.text = todoItem.get("name").toUpperCase();
        if (todoItem.get("content") && todoItem.get("content").length > 0) {
            $.labelContent.text = todoItem.get("content");
            $.viewContentContainer.height = Ti.UI.SIZE;
        } else $.viewContentContainer.height = 0;
        hasDueDate() && ($.labelDueDate.text = "Due " + moment(todoItem.get("dueDateDateTime")).fromNow());
    }
    function setupNav() {
        Alloy.Globals.Menu.setTitle("Detail View");
        Alloy.Globals.Menu.setButton({
            button: "l1",
            image: "/images/navigation/ic_chevron_left_white_48dp.png",
            success: function() {
                log.debug("[Maintain] : Redirecting to HomePage");
                Alloy.Globals.Menu.setMainContent("TodoList");
            }
        });
        Alloy.Globals.Menu.setButton({
            button: "r1",
            image: "/images/action/ic_mode_edit_white_48dp.png",
            success: function() {
                log.debug("[Maintain] : Redirecting to Edit Page");
                Alloy.Globals.Menu.setMainContent("TodoListNewEdit", {
                    todo_id: todoItem.get("todo_id")
                });
            }
        });
        Alloy.Globals.Menu.showButton("l1");
        Alloy.Globals.Menu.showButton("r1");
        Alloy.Globals.Menu.hideButton("r2");
    }
    function addEventListeners() {
        $.viewDueDate.addEventListener("click", setDueDate);
        $.viewPhoto.addEventListener("click", captureImage);
        $.viewShare.addEventListener("click", shareTask);
        $.viewGallery.addEventListener("click", function() {
            Alloy.Globals.Menu.setMainContent("TodoListGallery", {
                todo_id: todoItem.get("todo_id")
            });
        });
    }
    function addCheckbox() {
        checkbox = Alloy.createWidget("sh.checkbox", {
            height: 35,
            width: 35,
            value: todoItem.get("status")
        });
        checkbox.on("change", function() {
            toggleStatus();
        });
        $.viewCheckboxContainer.add(checkbox.getView());
    }
    function toggleStatus() {
        log.warn("[Task Details] toggling status to " + !todoItem.get("status"));
        if (0 == todoItem.get("status")) {
            todoItem.set({
                status: 1,
                completedDateTime: new Date().toISOString(),
                lastModifiedDateTime: new Date().toISOString()
            });
            Alloy.Globals.Menu.showInfoBar({
                title: "Keep Up The Good Work!"
            });
        } else todoItem.set({
            status: 0,
            completedDateTime: void 0,
            lastModifiedDateTime: new Date().toISOString()
        });
        todoItem.save();
        todo.fetch();
        log.warn("TODO: ", todo);
    }
    function hasDueDate() {
        return todoItem.get("dueDateDateTime");
    }
    function setDueDate() {
        log.debug("[TodoDetail] : setDueDate");
        if ("android" === Ti.Platform.osname) {
            var now = new Date();
            var month = now.getUTCMonth() + 1;
            var day = now.getUTCDate();
            var year = now.getUTCFullYear();
            var Dialogs = require("yy.tidialogs");
            var picker = Dialogs.createDatePicker({
                okButtonTitle: "Set",
                cancelButtonTitle: "Cancel",
                value: new Date(),
                day: day,
                month: month,
                year: year
            });
            picker.addEventListener("click", function(e) {
                e.cancel || saveDate(e.value, "Due Date");
            });
            picker.addEventListener("cancel", function() {
                Ti.API.info("dialog was cancelled");
            });
            picker.show();
        } else {
            $.viewRow.height = 0;
            var calendar = require("ti.sq");
            var now = new Date();
            var month = now.getUTCMonth() + 1;
            var day = now.getUTCDate();
            var year = now.getUTCFullYear();
            var maxYear = year + 1;
            var calendarView = calendar.createView({
                height: Ti.UI.FILL,
                width: Ti.UI.FILL,
                top: 0,
                left: 10,
                right: 10,
                pagingEnabled: true,
                value: {
                    month: month,
                    day: day,
                    year: year
                },
                min: {
                    month: month,
                    day: 1,
                    year: year
                },
                max: {
                    month: month,
                    day: day,
                    year: maxYear
                }
            });
            $.viewMain.add(calendarView);
            calendarView.addEventListener("dateChanged", function(d) {
                var opts = {
                    options: [ "Yep!", "Changed my mind" ],
                    selectedIndex: 0,
                    destructive: 0,
                    title: "Set Due Date for " + calendarView.value.month + "/" + calendarView.value.day + "/" + calendarView.value.year + " ?"
                };
                var dialog = Ti.UI.createOptionDialog(opts);
                dialog.show();
                dialog.addEventListener("click", function(e) {
                    0 == e.index ? saveDate(d.dateValue, "Due Date") : Alloy.Globals.Menu.showInfoBar("Due Date NOT Set");
                    $.viewMain.remove(calendarView);
                });
                $.viewRow.height = Ti.UI.FILL;
            });
        }
    }
    function saveDate(d, type) {
        log.debug("[TodoDetail] Set a " + type + " for  : dateChanged = ", d);
        log.event({
            type: "todo",
            action: "set a " + type + " for",
            description: todoItem.get("name") + " " + moment(d).fromNow(),
            eventId: todoItem.get("name")
        });
        todoItem.set({
            dueDateDateTime: d
        });
        todoItem.save();
        todo.fetch();
        $.labelDueDate.text = "Due " + moment(d).fromNow();
        Alloy.Globals.Menu.showInfoBar({
            title: type + " set " + moment(d).fromNow() + " from now"
        });
    }
    function captureImage() {
        var opts = {
            options: [ "Take a Photo", "Gallery" ],
            selectedIndex: 0,
            destructive: 0,
            title: "Where do you want to find picture?"
        };
        var dialog = Ti.UI.createOptionDialog(opts);
        dialog.show();
        dialog.addEventListener("click", function(e) {
            if (0 == e.index) {
                log.debug("[TodoDetail] : captureImage");
                var camera = require("Camera");
                camera.captureImage({
                    success: savePhoto
                });
            } else {
                log.debug("[TodoDetail] : captureImage");
                require("getUserGallery").fromGallery({
                    success: savePhoto
                });
            }
        });
    }
    function shareTask() {
        var shareObj = {
            status: "I'd like to share my To-Do task with you!\n\n" + todoItem.get("name") + "\n" + todoItem.get("content")
        };
        hasDueDate() && (shareObj.status += "\n\nDue " + moment(todoItem.get("dueDateDateTime")).fromNow());
        todoItem.get("photoCount");
        require("com.alcoapps.socialshare").share(shareObj);
    }
    function savePhoto(image) {
        if (image.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
            log.event({
                type: "todo",
                action: "captured",
                description: "an image for" + todoItem.get("name"),
                eventId: todoItem.get("name")
            });
            log.debug("[TodoDetail] : captureImage : Camera Success, image = ", JSON.stringify(image, null, 4));
            var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "todo");
            imageDir.exists() || imageDir.createDirectory();
            var photoCount = todoItem.get("photoCount") + 1;
            var file = Ti.Filesystem.getFile(imageDir.resolve(), todo_id + photoCount + ".png");
            log.debug("[TodoDetail] : Saving image to = ", imageDir.resolve() + todo_id + photoCount + ".png");
            file.write(image.media);
            todoItem.set({
                hasPhoto: true,
                photoCount: photoCount
            });
            todoItem.save();
            log.debug("[TodoDetail] : Saved image to this location : ", file.nativePath);
        } else {
            alert("We are only supporting images at the moment.");
            todoItem.set({
                hasVideo: true
            });
            todoItem.save();
        }
        todo.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "TodoListDetail";
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
    $.__views.__alloyId95 = Ti.UI.createView({
        color: "#ffffff",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        backgroundColor: "#eb5d36",
        id: "__alloyId95"
    });
    $.__views.viewMain.add($.__views.__alloyId95);
    $.__views.viewCheckboxContainer = Ti.UI.createView({
        color: "#ffffff",
        width: "35dp",
        height: "35dp",
        left: "20dp",
        id: "viewCheckboxContainer"
    });
    $.__views.__alloyId95.add($.__views.viewCheckboxContainer);
    $.__views.labelTitle = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "18dp",
            fontWeight: "semibold"
        },
        color: "#333333",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20dp",
        bottom: "20dp",
        left: "20dp",
        right: "20dp",
        id: "labelTitle"
    });
    $.__views.__alloyId95.add($.__views.labelTitle);
    $.__views.viewContentContainer = Ti.UI.createView({
        color: "#ffffff",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "viewContentContainer",
        backgroundColor: "#ccc"
    });
    $.__views.viewMain.add($.__views.viewContentContainer);
    $.__views.labelContent = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "semibold"
        },
        color: "#333333",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "10dp",
        bottom: "10dp",
        left: "20dp",
        right: "20dp",
        id: "labelContent"
    });
    $.__views.viewContentContainer.add($.__views.labelContent);
    $.__views.viewRow = Ti.UI.createScrollView({
        layout: "vertical",
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "viewRow",
        horizontalBounce: "false"
    });
    $.__views.viewMain.add($.__views.viewRow);
    $.__views.viewActionItems = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "viewActionItems"
    });
    $.__views.viewRow.add($.__views.viewActionItems);
    $.__views.viewPhoto = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: "45dp",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        id: "viewPhoto"
    });
    $.__views.viewActionItems.add($.__views.viewPhoto);
    $.__views.imageViewCapturePhoto = Ti.UI.createImageView({
        width: "35dp",
        height: "35dp",
        top: "5dp",
        left: "10dp",
        id: "imageViewCapturePhoto",
        image: "/images/action/ic_camera_alt_black_48dp.png"
    });
    $.__views.viewPhoto.add($.__views.imageViewCapturePhoto);
    $.__views.__alloyId96 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        text: "ADD A PHOTO",
        id: "__alloyId96"
    });
    $.__views.viewPhoto.add($.__views.__alloyId96);
    $.__views.viewDueDate = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: "45dp",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        id: "viewDueDate"
    });
    $.__views.viewActionItems.add($.__views.viewDueDate);
    $.__views.imageViewSetReminder = Ti.UI.createImageView({
        width: "35dp",
        height: "35dp",
        top: "5dp",
        left: "10dp",
        id: "imageViewSetReminder",
        image: "/images/action/ic_event_black_48dp.png"
    });
    $.__views.viewDueDate.add($.__views.imageViewSetReminder);
    $.__views.labelDueDate = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        text: "SET DUE DATE",
        id: "labelDueDate"
    });
    $.__views.viewDueDate.add($.__views.labelDueDate);
    $.__views.viewShare = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: "45dp",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        id: "viewShare"
    });
    $.__views.viewActionItems.add($.__views.viewShare);
    $.__views.imageViewShare = Ti.UI.createImageView({
        width: "35dp",
        height: "35dp",
        top: "5dp",
        left: "10dp",
        id: "imageViewShare",
        image: "/images/action/ic_share_black_48dp.png"
    });
    $.__views.viewShare.add($.__views.imageViewShare);
    $.__views.labelShare = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        text: "SHARE",
        id: "labelShare"
    });
    $.__views.viewShare.add($.__views.labelShare);
    $.__views.viewGallery = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: "45dp",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        id: "viewGallery"
    });
    $.__views.viewActionItems.add($.__views.viewGallery);
    $.__views.imageGallery = Ti.UI.createImageView({
        width: "35dp",
        height: "35dp",
        top: "5dp",
        left: "10dp",
        id: "imageGallery",
        image: "/images/images/ic_collections_black_48dp.png"
    });
    $.__views.viewGallery.add($.__views.imageGallery);
    $.__views.labelGallery = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        text: "SHOW GALLERY",
        id: "labelGallery"
    });
    $.__views.viewGallery.add($.__views.labelGallery);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var log = Alloy.Globals.log;
    log.info("Opened TodoListDetails");
    var args = arguments[0] || {};
    var todo_id = args.todo_id || "";
    var todo = Alloy.Collections.instance("ToDo");
    var todoItem = _.first(todo.where({
        todo_id: parseInt(todo_id)
    }));
    var moment = require("moment");
    init();
    $.viewMain.cleanup = function() {
        $.destroy();
        $.off();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;