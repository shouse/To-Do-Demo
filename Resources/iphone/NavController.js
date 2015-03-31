_ = require("alloy/underscore")._;

Alloy = require("alloy");

Backbone = require("alloy/backbone");

var log = Alloy.Globals.log;

log.info("[NavController] : Opened NavController");

exports.NavController = function(args) {
    function openFirstWinAndroid(win) {
        win.exitOnClose = true;
        win.orientationModes = [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ];
        win.open();
        win.addEventListener("close", function() {
            log.info("[NavController] : - Leaving application, close");
        });
        win.addEventListener("androidback", function() {
            log.debug("[NavController] : Android back hardware button pressed.");
            Alloy.Globals.Menu.goBack();
        });
        Alloy.Globals.mainWin = win;
    }
    function openFirstWinIOS(win) {
        log.info("[NavController] : Opening first window", win);
        win.open();
    }
    log.info("[NavController] : Initialized", args);
    _self = this;
    _self.version = .1;
    _self.navCollection;
    _self.navModel;
    var args = args || {};
    var splitWindow = false;
    require("deviceInfo").getDeviceInfo();
    var splitWindow;
    var windowStack = [];
    var navWin = null;
    var collection = Backbone.Collection.extend({});
    Backbone.Model.extend({
        adapter: {
            type: "properties"
        }
    });
    _self.init = function(args) {
        args = args || {};
        splitWindow = args.splitWindow ? args.splitWindow : false;
        _self.navCollection = new collection();
    };
    _self.open = function(win) {
        windowStack.push(win);
        var that = this;
        win.addEventListener("close", function() {
            log.info("[NavController] : Closed window");
            that.windowStack.pop();
        });
        if (1 === windowStack.length) if ("android" === Ti.Platform.osname) {
            log.info("[NavController] : Opening FIRST Android window");
            openFirstWinAndroid(win);
        } else openFirstWinIOS(win); else if ("android" === Ti.Platform.osname) {
            log.info("OPENING another Android Window");
            win.open();
        } else {
            var winTransition = Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT;
            navWin.openWindow(win, {
                animated: true,
                fullscreen: true,
                transition: winTransition
            });
        }
    };
    _self.home = function() {
        log.info("[NavController] : OPENING home window");
        var windows = windowStack.concat([]);
        _.each(windows, function(win) {
            navWindow ? navWin.close(win) : win.close();
        });
        windowStack = _.first(windowStack);
    };
    _self.close = function(win) {
        if ("android" === Ti.Platform.osname) win.close(); else {
            var win = Ti.UI.currentWindow;
            navWin.closeWindow(win);
        }
    };
};