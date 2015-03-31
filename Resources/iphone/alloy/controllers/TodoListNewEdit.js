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
        log.debug("[TodoListNewEdit] : Initializing");
        setupNav();
        todo_id && editItem();
        Alloy.isTablet;
    }
    function setupNav() {
        Alloy.Globals.Menu.setTitle("New Task");
        Alloy.Globals.Menu.setButton({
            button: "l1",
            image: "/images/navigation/ic_cancel_white_48dp.png",
            success: function() {
                log.debug("[Maintain] : User Selected Cancel");
                var opts = {
                    options: [ "Yes", "Oops!" ],
                    selectedIndex: 0,
                    destructive: 0,
                    title: "Do You Really Want to Cancel??"
                };
                var dialog = Ti.UI.createOptionDialog(opts);
                dialog.show();
                dialog.addEventListener("click", function(e) {
                    0 == e.index && Alloy.Globals.Menu.setMainContent("TodoList");
                });
            }
        });
        Alloy.Globals.Menu.setButton({
            button: "r1",
            image: "/images/navigation/ic_check_white_48dp.png",
            success: addNewItem
        });
        Alloy.Globals.Menu.showButton("r1");
        Alloy.Globals.Menu.hideButton("r2");
        Alloy.Globals.Menu.showButton("l1");
    }
    function addEventListeners() {}
    function addNewItem() {
        log.debug("[TodoList] : addNewItem");
        var formValues = getFormValues();
        var id;
        if (todo_id) {
            todoItem.set(formValues);
            todoItem.save();
            id = todo_id;
        } else {
            var newModel = Alloy.createModel("ToDo", formValues);
            newModel.save();
            id = newModel.get("todo_id");
        }
        todo.fetch();
        Alloy.Globals.Menu.setMainContent("TodoListDetail", {
            todo_id: id
        });
    }
    function editItem() {
        todoItem = _.first(todo.where({
            todo_id: todo_id
        }));
        log.debug("[TodoListNewEdit] : Editing todo Item", todoItem);
        Alloy.Globals.Menu.setTitle("Edit Task");
        $.textFieldName.value = todoItem.get("name");
        $.textFieldContent.value = todoItem.get("content");
    }
    function getFormValues() {
        if (0 == $.textFieldName.value.length) {
            alert("Name is required");
            return;
        }
        var formValues = {
            name: $.textFieldName.value,
            content: $.textFieldContent.value ? $.textFieldContent.value : ""
        };
        return formValues;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "TodoListNewEdit";
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
        horizontalBounce: "false"
    });
    $.__views.viewMain.add($.__views.viewRow);
    $.__views.__alloyId104 = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: "10dp",
        backgroundColor: "#eb5d36",
        id: "__alloyId104"
    });
    $.__views.viewRow.add($.__views.__alloyId104);
    $.__views.viewFormContainer = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "0dp",
        left: "20dp",
        right: "20dp",
        layout: "vertical",
        id: "viewFormContainer"
    });
    $.__views.viewRow.add($.__views.viewFormContainer);
    $.__views.labelName = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "24dp",
            fontWeight: "semibold"
        },
        color: "#333333",
        width: Ti.UI.FILL,
        height: "45dp",
        top: "10dp",
        bottom: "10dp",
        text: "Name",
        id: "labelName"
    });
    $.__views.viewFormContainer.add($.__views.labelName);
    $.__views.textFieldName = Ti.UI.createTextField({
        height: "45dp",
        backgroundColor: "#ffffff",
        color: "#000000",
        paddingLeft: "10%",
        paddingRight: "10%",
        width: Ti.UI.FILL,
        id: "textFieldName"
    });
    $.__views.viewFormContainer.add($.__views.textFieldName);
    $.__views.labelContent = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "24dp",
            fontWeight: "semibold"
        },
        color: "#333333",
        width: Ti.UI.FILL,
        height: "45dp",
        top: "10dp",
        bottom: "10dp",
        text: "Content",
        id: "labelContent"
    });
    $.__views.viewFormContainer.add($.__views.labelContent);
    $.__views.textFieldContent = Ti.UI.createTextArea({
        height: "45dp",
        backgroundColor: "#ffffff",
        color: "#000000",
        paddingLeft: "10%",
        paddingRight: "10%",
        width: Ti.UI.FILL,
        id: "textFieldContent"
    });
    $.__views.viewFormContainer.add($.__views.textFieldContent);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var log = Alloy.Globals.log;
    log.info("[TodoList] : Opened Page");
    var args = arguments[0] || {};
    var todo_id = args.todo_id || false;
    var todo = Alloy.Collections.instance("ToDo");
    var todoItem;
    init();
    addEventListeners();
    $.viewMain.cleanup = function() {
        $.destroy();
        $.off();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;