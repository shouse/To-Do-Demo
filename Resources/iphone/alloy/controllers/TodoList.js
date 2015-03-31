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
        log.debug("[TodoList] : Initializing");
        todo.length > 0 ? todoSuccess() : getTasks();
        Alloy.isTablet;
    }
    function setupNav() {
        Alloy.Globals.Menu.setTitle("ToDo List");
        Alloy.Globals.Menu.setColor("#aaa");
        Alloy.Globals.Menu.setButton({
            button: "l1",
            image: "/images/Propelics.Logo.100x100.png",
            success: function() {
                log.debug("[TodoList] : Redirecting to HomePage");
                Alloy.Globals.Menu.showInfoBar({
                    title: "Check out this drawer with nothing in it"
                });
                Alloy.Globals.Menu.toggleLeftSlider();
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
                Alloy.Globals.Menu.setMainContent("TodoListNewEdit");
            }
        });
        Alloy.Globals.Menu.showButton("r1");
        Alloy.Globals.Menu.showButton("r2");
        Alloy.Globals.Menu.showButton("l1");
    }
    function addEventListeners() {
        $.labelFilterAll.addEventListener("click", function(e) {
            filter(e.source.id);
        });
        $.labelFilterDone.addEventListener("click", function(e) {
            filter(e.source.id);
        });
        $.listViewTodo.addEventListener("itemclick", function(e) {
            log.warn(e.sectionIndex);
            log.warn(e.itemId);
            log.warn(e.itemIndex);
            Alloy.isTablet ? Alloy.Globals.Menu.setSideContent("TodoListDetail", {
                todo_id: e.itemId
            }) : Alloy.Globals.Menu.setMainContent("TodoListDetail", {
                todo_id: e.itemId
            });
        });
    }
    function filter(item) {
        switch (item) {
          case "viewFilterAll":
          case "labelFilterAll":
            var sections = $.listViewTodo.getSections();
            _.each(sections, function() {
                $.listViewTodo.deleteSectionAt(0);
            });
            todoSuccess();
            break;

          case "viewFilterDone":
          case "labelFilterDone":
            var sections = $.listViewTodo.getSections();
            _.each(sections, function() {
                $.listViewTodo.deleteSectionAt(0);
            });
            var doneCollection = _.where(todo.toJSON(), {
                status: 1
            });
            todoSuccess(doneCollection);
        }
    }
    function getTasks() {
        if (0 === todo.length) {
            var todoJSON = require("data/ToDo").getTasks();
            log.debug("[TodoList] : getTasks() : todo = ", todoJSON);
            _.each(todoJSON, function(item) {
                var todoModel = Alloy.createModel("ToDo", item);
                todoModel.save();
            });
            todo.fetch();
        }
        todoSuccess();
    }
    function todoSuccess(recordsToShow) {
        var sortedCollection;
        sortedCollection = recordsToShow ? recordsToShow : _.sortBy(todo.toJSON(), function() {});
        log.debug("[TodoList] : todoSuccess() : sortedCollection", sortedCollection);
        var data = [];
        _.each(sortedCollection, function(item) {
            var date = "";
            item.dueDateDateTime && (date = moment(item.dueDateDateTime).format("MM DD"));
            data.push({
                viewStatusColor: {
                    backgroundColor: item.status ? "green" : "white"
                },
                imageViewCheckmark: {
                    image: item.status ? "/images/navigation/ic_check_black_48dp.png" : "",
                    left: 10,
                    right: 10
                },
                itemTitle: {
                    text: item.name,
                    font: {
                        fontSize: "18sp"
                    },
                    left: 5
                },
                itemContent: {
                    text: item.content
                },
                labelDueDate: {
                    text: date
                },
                properties: {
                    itemId: item.todo_id,
                    searchableText: item.name,
                    backgroundColor: "#fff",
                    height: 90
                }
            });
        });
        var listSection = Titanium.UI.createListSection({
            items: data,
            headerTitle: "To-do List"
        });
        $.listViewTodo.appendSection(listSection);
    }
    function deleteItem(e) {
        var section = e.section;
        var todo_id = parseInt(e.itemId);
        var itemIndex = e.itemIndex;
        log.warn("deleteItem: " + JSON.stringify(e, null, 4));
        var opts = {
            options: [ "Yep!", "Changed my mind" ],
            selectedIndex: 0,
            destructive: 0,
            title: "Do You Want to DELETE This Item?"
        };
        var dialog = Ti.UI.createOptionDialog(opts);
        dialog.show();
        dialog.addEventListener("click", function(e) {
            if (0 == e.index) {
                var todoItem = _.first(todo.where({
                    todo_id: todo_id
                }));
                todo.remove(todoItem);
                todoItem.destroy();
                todo.fetch();
                section.deleteItemsAt(itemIndex, 1);
                Alloy.Globals.Menu.showInfoBar({
                    title: "Deleted Task!"
                });
                return;
            }
            Alloy.Globals.Menu.showInfoBar({
                title: "Not Deleted!"
            });
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "TodoList";
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
        layout: "vertical",
        backgroundColor: "#f2eee9",
        id: "viewMain"
    });
    $.__views.viewMain && $.addTopLevelView($.__views.viewMain);
    $.__views.viewListFilters = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: "44dp",
        top: "0dp",
        layout: "horizontal",
        id: "viewListFilters",
        backgroundColor: "#eb5d36"
    });
    $.__views.viewMain.add($.__views.viewListFilters);
    $.__views.labelFilterAll = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "18dp",
            fontWeight: "semibold"
        },
        color: "#333333",
        width: "50%",
        height: Ti.UI.FILL,
        text: "ALL",
        id: "labelFilterAll",
        textAlign: "center"
    });
    $.__views.viewListFilters.add($.__views.labelFilterAll);
    $.__views.labelFilterDone = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "18dp",
            fontWeight: "semibold"
        },
        color: "#333333",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        text: "DONE",
        id: "labelFilterDone",
        textAlign: "center"
    });
    $.__views.viewListFilters.add($.__views.labelFilterDone);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#eb5d36",
        showCancel: "true",
        height: "0"
    });
    var __alloyId80 = {};
    var __alloyId82 = [];
    var __alloyId83 = {
        type: "Ti.UI.View",
        bindId: "viewRow",
        childTemplates: function() {
            var __alloyId84 = [];
            var __alloyId85 = {
                type: "Ti.UI.View",
                bindId: "viewStatusColor",
                properties: {
                    color: "#ffffff",
                    width: "10dp",
                    height: Ti.UI.FILL,
                    bindId: "viewStatusColor"
                }
            };
            __alloyId84.push(__alloyId85);
            var __alloyId86 = {
                type: "Ti.UI.ImageView",
                bindId: "imageViewCheckmark",
                properties: {
                    width: "25dp",
                    height: "25dp",
                    bindId: "imageViewCheckmark"
                }
            };
            __alloyId84.push(__alloyId86);
            var __alloyId88 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId89 = [];
                    var __alloyId90 = {
                        type: "Ti.UI.Label",
                        bindId: "itemTitle",
                        properties: {
                            font: {
                                fontFamily: "HelveticaNeue-Light",
                                fontSize: "14dp"
                            },
                            color: "#333333",
                            width: Ti.UI.FILL,
                            height: "45dp",
                            bindId: "itemTitle"
                        }
                    };
                    __alloyId89.push(__alloyId90);
                    var __alloyId91 = {
                        type: "Ti.UI.Label",
                        bindId: "itemContent",
                        properties: {
                            font: {
                                fontFamily: "HelveticaNeue-Light",
                                fontSize: "14dp"
                            },
                            color: "#333333",
                            width: Ti.UI.FILL,
                            height: "45dp",
                            bindId: "itemContent"
                        }
                    };
                    __alloyId89.push(__alloyId91);
                    return __alloyId89;
                }(),
                properties: {
                    color: "#ffffff",
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    right: "30dp",
                    layout: "vertical"
                }
            };
            __alloyId84.push(__alloyId88);
            var __alloyId92 = {
                type: "Ti.UI.Label",
                bindId: "labelDueDate",
                properties: {
                    font: {
                        fontFamily: "HelveticaNeue-Light",
                        fontSize: "14dp"
                    },
                    color: "#333333",
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    bindId: "labelDueDate",
                    borderColor: "red",
                    borderWidth: "4"
                }
            };
            __alloyId84.push(__alloyId92);
            return __alloyId84;
        }(),
        properties: {
            color: "#ffffff",
            width: Ti.UI.FILL,
            layout: "horizontal",
            bindId: "viewRow"
        }
    };
    __alloyId82.push(__alloyId83);
    var __alloyId81 = {
        properties: {
            name: "templateTodo"
        },
        events: {
            longpress: deleteItem
        },
        childTemplates: __alloyId82
    };
    __alloyId80["templateTodo"] = __alloyId81;
    $.__views.listViewTodo = Ti.UI.createListView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        top: "0dp",
        templates: __alloyId80,
        searchView: $.__views.search,
        id: "listViewTodo",
        defaultItemTemplate: "templateTodo",
        search: "search"
    });
    $.__views.viewMain.add($.__views.listViewTodo);
    $.__views.form = Alloy.createWidget("nl.fokkezb.form", "widget", {
        id: "form",
        __parentSymbol: $.__views.viewMain
    });
    $.__views.form.setParent($.__views.viewMain);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var log = Alloy.Globals.log;
    log.info("[TodoList] : Opened Page");
    var todo = Alloy.Collections.instance("ToDo");
    todo.fetch();
    var moment = require("moment");
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