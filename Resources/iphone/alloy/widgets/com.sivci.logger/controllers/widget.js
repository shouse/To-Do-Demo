function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.sivci.logger/" + s : s.substring(0, index) + "/com.sivci.logger/" + s.substring(index + 1);
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
    function addEventListeners() {
        $.buttonFilterAll.addEventListener("click", function() {
            updateListView();
        });
        $.buttonFilterDebug.addEventListener("click", function() {
            updateListView("D");
        });
        $.buttonFilterInfo.addEventListener("click", function() {
            updateListView("I");
        });
        $.buttonFilterWarn.addEventListener("click", function() {
            updateListView("W");
        });
        $.buttonFilterError.addEventListener("click", function() {
            updateListView("E");
        });
    }
    function listViewItemClick(e) {
        var detail = Widget.createController("LogDetail", {
            message: e.itemId
        }).getView();
        if (Alloy.isTablet) {
            $.viewContainerMain.width = "50%";
            $.viewDetailTablet.add(detail);
        } else {
            $.viewDetail.add(detail);
            $.viewDetail.height = Ti.UI.FILL;
        }
    }
    function updateListView(level) {
        level = _.isUndefined(level) ? "all" : level;
        levels = [ "D", "I", "W", "E" ];
        var logs = log.getLogs();
        logs = logs.toJSON();
        var logsToDisplay = _.filter(logs, function(log) {
            return "all" == level || levels.indexOf(log.level) >= levels.indexOf(level);
        });
        logsToDisplay = _(logsToDisplay).sortBy(function(log) {
            return log.time;
        }).reverse();
        var colors = {
            E: "#EE0000",
            W: "#E48743",
            I: "#EEEEEE",
            D: "#00DD00"
        };
        var data = _.map(logsToDisplay, function(log) {
            return {
                template: "templateMain",
                labelLogType: {
                    text: log.level,
                    backgroundColor: colors[log.level] || "#FFF"
                },
                labelDescription: {
                    text: log.message
                },
                labelDate: {
                    text: moment(log.time).fromNow()
                },
                properties: {
                    searchableText: log.message,
                    itemId: log.message
                }
            };
        });
        var listSection = Titanium.UI.createListSection({
            items: data
        });
        $.listView.sections = [ listSection ];
    }
    function updateListViewRemote(logs) {
        var level = "E";
        levels = [ "D", "I", "W", "E" ];
        var logsToDisplay = _.filter(logs, function(log) {
            return "all" == level || levels.indexOf(log.level) >= levels.indexOf(level);
        });
        logsToDisplay = _(logsToDisplay).sortBy(function(log) {
            return log.created_at;
        }).reverse();
        var colors = {
            E: "#EE0000",
            W: "#E48743",
            I: "#EEEEEE",
            D: "#00DD00"
        };
        var data = _.map(logsToDisplay, function(log) {
            return {
                template: "templateRemote",
                labelLogType: {
                    text: log.level,
                    backgroundColor: colors[log.level] || "#FFF"
                },
                labelDescription: {
                    text: log.message
                },
                labelDate: {
                    text: moment(log.created_at).fromNow()
                },
                labelExtra: {
                    text: log.appName + " ver: " + log.appVer + ", ADID: " + log.adid
                },
                properties: {
                    searchableText: log.message,
                    itemId: log.message
                }
            };
        });
        var listSection = Titanium.UI.createListSection({
            items: data
        });
        $.listView.sections = [ listSection ];
    }
    function deleteLogs() {
        log.reset();
        updateListView();
        $.labelTitle.text = "Local Device Log";
    }
    function toggleLocalRemote() {
        switch ($.labelTitle.text) {
          case "Local Device Log":
            log.queryRemote({
                success: function(resp) {
                    updateListViewRemote(resp.cloudLog);
                },
                error: function(resp) {
                    log.error("logging.js: queryRemote error resp: " + JSON.stringify(resp, null, 4));
                }
            });
            $.labelTitle.text = "Remote Device Log";
            break;

          case "Remote Device Log":
            updateListView();
            $.labelTitle.text = "Local Device Log";
        }
    }
    function dismiss() {
        $.win.close({
            animated: true
        });
    }
    var Widget = new (require("alloy/widget"))("com.sivci.logger");
    this.__widgetId = "com.sivci.logger";
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
    $.__views.winNavBar = Ti.UI.createWindow({
        layout: "vertical",
        backgroundColor: "#efefef",
        barColor: "#ffe100",
        id: "winNavBar",
        title: "Local Device Log"
    });
    $.__views.labelTitle = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "17sp",
            fontWeight: "bold"
        },
        color: "#333333",
        text: "Local Device Log",
        id: "labelTitle"
    });
    toggleLocalRemote ? $.__views.labelTitle.addEventListener("click", toggleLocalRemote) : __defers["$.__views.labelTitle!click!toggleLocalRemote"] = true;
    $.__views.winNavBar.titleControl = $.__views.labelTitle;
    $.__views.__alloyId5 = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: "44dp",
        width: "100%",
        title: "Cancel",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE,
        id: "__alloyId5"
    });
    dismiss ? $.__views.__alloyId5.addEventListener("click", dismiss) : __defers["$.__views.__alloyId5!click!dismiss"] = true;
    $.__views.winNavBar.leftNavButton = $.__views.__alloyId5;
    $.__views.buttonDeleteLogs = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: "44dp",
        width: "100%",
        id: "buttonDeleteLogs",
        systemButton: Ti.UI.iPhone.SystemButton.TRASH
    });
    deleteLogs ? $.__views.buttonDeleteLogs.addEventListener("click", deleteLogs) : __defers["$.__views.buttonDeleteLogs!click!deleteLogs"] = true;
    $.__views.winNavBar.rightNavButton = $.__views.buttonDeleteLogs;
    $.__views.viewDetail = Ti.UI.createView({
        color: "#ffffff",
        id: "viewDetail",
        height: "0"
    });
    $.__views.winNavBar.add($.__views.viewDetail);
    $.__views.viewContainer = Ti.UI.createView({
        color: "#ffffff",
        id: "viewContainer",
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: "0"
    });
    $.__views.winNavBar.add($.__views.viewContainer);
    $.__views.viewContainerMain = Ti.UI.createView({
        color: "#ffffff",
        id: "viewContainerMain",
        layout: "vertical",
        width: Ti.UI.FILL
    });
    $.__views.viewContainer.add($.__views.viewContainerMain);
    $.__views.__alloyId7 = Ti.UI.createView({
        color: "#ffffff",
        layout: "horizontal",
        height: "44",
        id: "__alloyId7"
    });
    $.__views.viewContainerMain.add($.__views.__alloyId7);
    $.__views.buttonFilterAll = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: Ti.UI.FILL,
        width: "19%",
        id: "buttonFilterAll",
        title: "ALL"
    });
    $.__views.__alloyId7.add($.__views.buttonFilterAll);
    $.__views.buttonFilterDebug = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: Ti.UI.FILL,
        width: "19%",
        id: "buttonFilterDebug",
        title: "DEBUG"
    });
    $.__views.__alloyId7.add($.__views.buttonFilterDebug);
    $.__views.buttonFilterInfo = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: Ti.UI.FILL,
        width: "19%",
        id: "buttonFilterInfo",
        title: "INFO"
    });
    $.__views.__alloyId7.add($.__views.buttonFilterInfo);
    $.__views.buttonFilterWarn = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: Ti.UI.FILL,
        width: "19%",
        id: "buttonFilterWarn",
        title: "WARN"
    });
    $.__views.__alloyId7.add($.__views.buttonFilterWarn);
    $.__views.buttonFilterError = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: Ti.UI.FILL,
        width: "19%",
        id: "buttonFilterError",
        title: "ERROR"
    });
    $.__views.__alloyId7.add($.__views.buttonFilterError);
    $.__views.__alloyId8 = Ti.UI.createSearchBar({
        barColor: "#666",
        id: "__alloyId8"
    });
    $.__views.__alloyId10 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#bbbbbb",
        width: Ti.UI.FILL,
        height: "1px",
        id: "__alloyId10"
    });
    var __alloyId11 = {};
    var __alloyId13 = [];
    var __alloyId14 = {
        type: "Ti.UI.View",
        bindId: "viewMain",
        childTemplates: function() {
            var __alloyId15 = [];
            var __alloyId17 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId18 = [];
                    var __alloyId19 = {
                        type: "Ti.UI.Label",
                        bindId: "labelLogType",
                        properties: {
                            font: {
                                fontFamily: "HelveticaNeue-Light",
                                fontSize: "18sp",
                                fontWeight: "bold"
                            },
                            color: "#000",
                            borderColor: "#000",
                            borderWidth: "1dp",
                            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                            bindId: "labelLogType",
                            width: "30",
                            height: "30"
                        }
                    };
                    __alloyId18.push(__alloyId19);
                    return __alloyId18;
                }(),
                properties: {
                    color: "#ffffff",
                    width: "50",
                    height: Ti.UI.FILL
                }
            };
            __alloyId15.push(__alloyId17);
            var __alloyId21 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId22 = [];
                    var __alloyId24 = {
                        type: "Ti.UI.View",
                        childTemplates: function() {
                            var __alloyId25 = [];
                            var __alloyId26 = {
                                type: "Ti.UI.Label",
                                bindId: "labelDescription",
                                properties: {
                                    font: {
                                        fontFamily: "HelveticaNeue-Light",
                                        fontSize: "16sp",
                                        fontWeight: "normal"
                                    },
                                    color: "#000",
                                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                                    bindId: "labelDescription",
                                    width: Ti.UI.FILL,
                                    height: Ti.UI.FILL,
                                    top: "0"
                                }
                            };
                            __alloyId25.push(__alloyId26);
                            return __alloyId25;
                        }(),
                        properties: {
                            color: "#ffffff",
                            width: Ti.UI.FILL,
                            height: "40"
                        }
                    };
                    __alloyId22.push(__alloyId24);
                    var __alloyId27 = {
                        type: "Ti.UI.Label",
                        bindId: "labelDate",
                        properties: {
                            font: {
                                fontFamily: "HelveticaNeue-Light",
                                fontSize: "14sp",
                                fontWeight: "normal"
                            },
                            color: "#666",
                            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                            bindId: "labelDate",
                            width: Ti.UI.FILL,
                            height: Ti.UI.SIZE,
                            top: "0"
                        }
                    };
                    __alloyId22.push(__alloyId27);
                    return __alloyId22;
                }(),
                properties: {
                    color: "#ffffff",
                    layout: "vertical",
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    right: "20"
                }
            };
            __alloyId15.push(__alloyId21);
            return __alloyId15;
        }(),
        properties: {
            color: "#ffffff",
            backgroundColor: "#f2eee9",
            bindId: "viewMain",
            layout: "horizontal",
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        }
    };
    __alloyId13.push(__alloyId14);
    var __alloyId12 = {
        properties: {
            name: "templateMain",
            width: Ti.UI.FILL,
            height: "80"
        },
        childTemplates: __alloyId13
    };
    __alloyId11["templateMain"] = __alloyId12;
    var __alloyId29 = [];
    var __alloyId30 = {
        type: "Ti.UI.View",
        bindId: "viewMain",
        childTemplates: function() {
            var __alloyId31 = [];
            var __alloyId33 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId34 = [];
                    var __alloyId35 = {
                        type: "Ti.UI.Label",
                        bindId: "labelLogType",
                        properties: {
                            font: {
                                fontFamily: "HelveticaNeue-Light",
                                fontSize: "18sp",
                                fontWeight: "bold"
                            },
                            color: "#000",
                            borderColor: "#000",
                            borderWidth: "1dp",
                            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                            bindId: "labelLogType",
                            width: "30",
                            height: "30"
                        }
                    };
                    __alloyId34.push(__alloyId35);
                    return __alloyId34;
                }(),
                properties: {
                    color: "#ffffff",
                    width: "50",
                    height: Ti.UI.FILL
                }
            };
            __alloyId31.push(__alloyId33);
            var __alloyId37 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId38 = [];
                    var __alloyId40 = {
                        type: "Ti.UI.View",
                        childTemplates: function() {
                            var __alloyId41 = [];
                            var __alloyId42 = {
                                type: "Ti.UI.Label",
                                bindId: "labelDescription",
                                properties: {
                                    font: {
                                        fontFamily: "HelveticaNeue-Light",
                                        fontSize: "16sp",
                                        fontWeight: "normal"
                                    },
                                    color: "#000",
                                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                                    bindId: "labelDescription",
                                    width: Ti.UI.FILL,
                                    height: Ti.UI.FILL,
                                    top: "0"
                                }
                            };
                            __alloyId41.push(__alloyId42);
                            return __alloyId41;
                        }(),
                        properties: {
                            color: "#ffffff",
                            width: Ti.UI.FILL,
                            height: "40"
                        }
                    };
                    __alloyId38.push(__alloyId40);
                    var __alloyId44 = {
                        type: "Ti.UI.View",
                        childTemplates: function() {
                            var __alloyId45 = [];
                            var __alloyId46 = {
                                type: "Ti.UI.Label",
                                bindId: "labelExtra",
                                properties: {
                                    font: {
                                        fontFamily: "HelveticaNeue-Light",
                                        fontSize: "14dp"
                                    },
                                    color: "#333333",
                                    bindId: "labelExtra",
                                    width: "50%",
                                    height: Ti.UI.SIZE,
                                    top: "0"
                                }
                            };
                            __alloyId45.push(__alloyId46);
                            var __alloyId47 = {
                                type: "Ti.UI.Label",
                                bindId: "labelDate",
                                properties: {
                                    font: {
                                        fontFamily: "HelveticaNeue-Light",
                                        fontSize: "14sp",
                                        fontWeight: "normal"
                                    },
                                    color: "#666",
                                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                                    bindId: "labelDate",
                                    width: "45%",
                                    height: Ti.UI.SIZE,
                                    top: "0",
                                    right: "0"
                                }
                            };
                            __alloyId45.push(__alloyId47);
                            return __alloyId45;
                        }(),
                        properties: {
                            color: "#ffffff",
                            width: Ti.UI.FILL,
                            height: Ti.UI.SIZE,
                            layout: "horizontal"
                        }
                    };
                    __alloyId38.push(__alloyId44);
                    return __alloyId38;
                }(),
                properties: {
                    color: "#ffffff",
                    layout: "vertical",
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    right: "20"
                }
            };
            __alloyId31.push(__alloyId37);
            return __alloyId31;
        }(),
        properties: {
            color: "#ffffff",
            backgroundColor: "#f2eee9",
            bindId: "viewMain",
            layout: "horizontal",
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        }
    };
    __alloyId29.push(__alloyId30);
    var __alloyId28 = {
        properties: {
            name: "templateRemote",
            width: Ti.UI.FILL,
            height: "80"
        },
        childTemplates: __alloyId29
    };
    __alloyId11["templateRemote"] = __alloyId28;
    $.__views.listView = Ti.UI.createListView({
        templates: __alloyId11,
        searchView: $.__views.__alloyId8,
        footerView: $.__views.__alloyId10,
        id: "listView",
        defaultItemTemplate: "templateMain",
        top: "0"
    });
    $.__views.viewContainerMain.add($.__views.listView);
    listViewItemClick ? $.__views.listView.addEventListener("itemclick", listViewItemClick) : __defers["$.__views.listView!itemclick!listViewItemClick"] = true;
    $.__views.viewDetailTablet = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "viewDetailTablet",
        top: "0",
        right: "5"
    });
    $.__views.viewContainer.add($.__views.viewDetailTablet);
    $.__views.win = Ti.UI.iOS.createNavigationWindow({
        backgroundColor: "#efefef",
        barColor: "#ffe100",
        window: $.__views.winNavBar,
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _ = require("alloy/underscore")._;
    var moment = require("moment");
    var log = Alloy.Globals.log;
    addEventListeners();
    updateListView();
    exports.show = function(args) {
        args = args || {};
        var title = "Local Device Log";
        $.win.title = title;
        $.win.open({
            modal: true,
            navBarHidden: false,
            animated: true,
            modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN,
            modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL
        });
        updateListView("I");
    };
    __defers["$.__views.labelTitle!click!toggleLocalRemote"] && $.__views.labelTitle.addEventListener("click", toggleLocalRemote);
    __defers["$.__views.__alloyId5!click!dismiss"] && $.__views.__alloyId5.addEventListener("click", dismiss);
    __defers["$.__views.buttonDeleteLogs!click!deleteLogs"] && $.__views.buttonDeleteLogs.addEventListener("click", deleteLogs);
    __defers["$.__views.listView!itemclick!listViewItemClick"] && $.__views.listView.addEventListener("itemclick", listViewItemClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;