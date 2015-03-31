function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "sh.slideMenuAndNavbar/" + s : s.substring(0, index) + "/sh.slideMenuAndNavbar/" + s.substring(index + 1);
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
    function init() {
        log.debug("[FOUNDATION] : init");
        addEventListeners();
        setAnimations();
    }
    function configureSideBar(args) {
        log.debug("[FOUNDATION] : configureSideBar");
        args = args ? args : {};
    }
    function configureNavBar() {}
    function addEventListeners() {
        log.debug("[FOUNDATION] : Adding Menu Event Listeners");
        Ti.Gesture.addEventListener("orientationchange", function() {
            exports.handleRotation();
        });
        $.viewNav.addEventListener("longpress", function() {
            displayLogs();
        });
        $.viewNav.addEventListener("longpress", function() {
            displayLogs();
        });
        $.leftMenu.addEventListener("click", function() {
            _.delay($.toggleLeftSlider, 250);
        });
        Ti.App.addEventListener("sliderToggled", function(e) {
            alert("Does this code ever get hit???");
            if ("right" == e.direction) {
                $.leftMenu.zIndex = 2;
                $.rightMenu.zIndex = 100;
                $.topNavigationDrawer.zIndex = 0;
            } else if ("left" == e.direction) {
                $.leftMenu.zIndex = 1;
                $.rightMenu.zIndex = 200;
                $.topNavigationDrawer.zIndex = 0;
            }
        });
    }
    function setAnimations() {
        animateRight = Ti.UI.createAnimation({
            left: Alloy.isTablet ? 350 : 250,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
            duration: 150
        });
        animateLeft = Ti.UI.createAnimation({
            left: Alloy.isTablet ? -350 : -250,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
            duration: 150
        });
        animateReset = Ti.UI.createAnimation({
            left: 0,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
            duration: 150
        });
        animateSideContent = Ti.UI.createAnimation({
            width: "50%",
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
            duration: 500
        });
    }
    function displayLogs() {
        log.debug("[ROOT] :: Opening Logs");
        var widgetLogger = Alloy.createWidget("com.sivci.logger");
        widgetLogger.show({
            title: "Logs"
        });
    }
    new (require("alloy/widget"))("sh.slideMenuAndNavbar");
    this.__widgetId = "sh.slideMenuAndNavbar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.viewContainer = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        top: "0dp",
        layout: "composite",
        id: "viewContainer"
    });
    $.__views.viewContainer && $.addTopLevelView($.__views.viewContainer);
    $.__views.leftMenu = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            color: "#ffffff",
            height: Ti.UI.FILL,
            layout: "vertical"
        });
        Alloy.isHandheld && _.extend(o, {
            top: 0,
            left: 0,
            width: 250,
            zIndex: "1"
        });
        Alloy.isTablet && _.extend(o, {
            top: 0,
            left: 0,
            width: 350,
            zIndex: "1"
        });
        _.extend(o, {
            id: "leftMenu"
        });
        return o;
    }());
    $.__views.viewContainer.add($.__views.leftMenu);
    $.__views.scrollViewMenu = Ti.UI.createScrollView({
        layout: "vertical",
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        top: "20dp",
        id: "scrollViewMenu"
    });
    $.__views.leftMenu.add($.__views.scrollViewMenu);
    $.__views.rightMenu = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            color: "#ffffff",
            height: Ti.UI.FILL,
            layout: "vertical"
        });
        Alloy.isHandheld && _.extend(o, {
            top: 0,
            right: 0,
            width: 250,
            height: Ti.UI.FILL,
            zIndex: "1"
        });
        Alloy.isTablet && _.extend(o, {
            top: 0,
            right: 0,
            width: 350,
            height: Ti.UI.FILL,
            zIndex: "1"
        });
        _.extend(o, {
            id: "rightMenu"
        });
        return o;
    }());
    $.__views.viewContainer.add($.__views.rightMenu);
    $.__views.topNavigationDrawer = Ti.UI.createView({
        color: "#ffffff",
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        zIndex: 3,
        id: "topNavigationDrawer"
    });
    $.__views.viewContainer.add($.__views.topNavigationDrawer);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        id: "__alloyId65"
    });
    $.__views.topNavigationDrawer.add($.__views.__alloyId65);
    $.__views.viewMovable = Ti.UI.createView({
        color: "#ffffff",
        width: "100%",
        layout: "vertical",
        left: 0,
        zIndex: 3,
        id: "viewMovable"
    });
    $.__views.viewContainer.add($.__views.viewMovable);
    $.__views.shadowview = Ti.UI.createView({
        color: "#ffffff",
        layout: "composite",
        shadowColor: "black",
        shadowOffset: {
            x: "0",
            y: "0"
        },
        shadowRadius: "2.5",
        id: "shadowview"
    });
    $.__views.viewMovable.add($.__views.shadowview);
    $.__views.viewNav = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            color: "#ffffff",
            width: Ti.UI.FILL,
            height: "65dp",
            layout: "composite"
        });
        Alloy.isHandheld && _.extend(o, {
            top: 0,
            left: 0,
            width: Ti.UI.FILL,
            height: 66
        });
        Alloy.isTablet && _.extend(o, {
            top: 0,
            left: 0,
            width: Ti.UI.FILL,
            height: 88
        });
        _.extend(o, {
            id: "viewNav"
        });
        return o;
    }());
    $.__views.shadowview.add($.__views.viewNav);
    $.__views.__alloyId66 = Ti.UI.createView({
        color: "#ffffff",
        width: "15%",
        height: Ti.UI.FILL,
        top: "10dp",
        bottom: "10dp",
        left: "0dp",
        id: "__alloyId66"
    });
    $.__views.viewNav.add($.__views.__alloyId66);
    if (!Alloy.isTablet) {
        $.__views.buttonLeft = Ti.UI.createImageView(function() {
            var o = {};
            _.extend(o, {
                height: "40dp"
            });
            Alloy.isHandheld && _.extend(o, {
                image: "/images/navigation/ic_menu_white_48dp.png",
                left: 0,
                top: 10,
                bottom: 10,
                style: "none"
            });
            Alloy.isTablet && _.extend(o, {
                left: 0,
                top: 10,
                bottom: 10,
                style: "none"
            });
            _.extend(o, {
                id: "buttonLeft"
            });
            return o;
        }());
        $.__views.__alloyId66.add($.__views.buttonLeft);
    }
    if (Alloy.isTablet) {
        $.__views.buttonLeft = Ti.UI.createImageView(function() {
            var o = {};
            _.extend(o, {
                height: "60dp"
            });
            Alloy.isHandheld && _.extend(o, {
                image: "/images/navigation/ic_menu_white_48dp.png",
                left: 0,
                top: 10,
                bottom: 10,
                style: "none"
            });
            Alloy.isTablet && _.extend(o, {
                left: 0,
                top: 10,
                bottom: 10,
                style: "none"
            });
            _.extend(o, {
                id: "buttonLeft"
            });
            return o;
        }());
        $.__views.__alloyId66.add($.__views.buttonLeft);
    }
    $.__views.__alloyId67 = Ti.UI.createView({
        color: "#ffffff",
        width: "0dp",
        height: Ti.UI.FILL,
        top: "10dp",
        bottom: "10dp",
        left: "60dp",
        id: "__alloyId67"
    });
    $.__views.viewNav.add($.__views.__alloyId67);
    if (!Alloy.isTablet) {
        $.__views.buttonLeft2 = Ti.UI.createImageView(function() {
            var o = {};
            _.extend(o, {
                height: "40dp"
            });
            Alloy.isHandheld && _.extend(o, {
                left: 60,
                top: 10,
                bottom: 10,
                style: "none"
            });
            Alloy.isTablet && _.extend(o, {
                left: 90,
                top: 10,
                bottom: 10,
                style: "none"
            });
            _.extend(o, {
                id: "buttonLeft2",
                borderWidth: "3"
            });
            return o;
        }());
        $.__views.__alloyId67.add($.__views.buttonLeft2);
    }
    if (Alloy.isTablet) {
        $.__views.buttonLeft2 = Ti.UI.createImageView(function() {
            var o = {};
            _.extend(o, {
                height: "60dp"
            });
            Alloy.isHandheld && _.extend(o, {
                left: 60,
                top: 10,
                bottom: 10,
                style: "none"
            });
            Alloy.isTablet && _.extend(o, {
                left: 90,
                top: 10,
                bottom: 10,
                style: "none"
            });
            _.extend(o, {
                id: "buttonLeft2"
            });
            return o;
        }());
        $.__views.__alloyId67.add($.__views.buttonLeft2);
    }
    $.__views.viewTitleHolder = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        id: "viewTitleHolder"
    });
    $.__views.viewNav.add($.__views.viewTitleHolder);
    $.__views.labelTitle = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontFamily: "HelveticaNeue-Light",
                fontSize: "14dp"
            },
            color: "white",
            width: Ti.UI.SIZE
        });
        Alloy.isHandheld && _.extend(o, {
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            font: {
                fontFamily: "RobotoCondensed-Regular",
                fontSize: "20sp"
            },
            color: "#FFF"
        });
        Alloy.isTablet && _.extend(o, {
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            font: {
                fontFamily: "RobotoCondensed-Regular",
                fontSize: "22sp"
            },
            color: "#FFF"
        });
        _.extend(o, {
            text: "DOES THIS SAY ANYTHING",
            id: "labelTitle"
        });
        return o;
    }());
    $.__views.viewTitleHolder.add($.__views.labelTitle);
    $.__views.__alloyId68 = Ti.UI.createView({
        color: "#ffffff",
        width: "15%",
        height: Ti.UI.FILL,
        top: "10dp",
        bottom: "10dp",
        right: "50",
        id: "__alloyId68"
    });
    $.__views.viewNav.add($.__views.__alloyId68);
    if (!Alloy.isTablet) {
        $.__views.buttonRight2 = Ti.UI.createImageView(function() {
            var o = {};
            _.extend(o, {
                height: "40dp"
            });
            Alloy.isHandheld && _.extend(o, {
                top: 10,
                bottom: 10,
                tintColor: "#fff"
            });
            Alloy.isTablet && _.extend(o, {
                top: 10,
                bottom: 10,
                tintColor: "#fff"
            });
            _.extend(o, {
                id: "buttonRight2",
                visible: "false"
            });
            return o;
        }());
        $.__views.__alloyId68.add($.__views.buttonRight2);
    }
    if (Alloy.isTablet) {
        $.__views.buttonRight2 = Ti.UI.createImageView(function() {
            var o = {};
            _.extend(o, {
                height: "60dp"
            });
            Alloy.isHandheld && _.extend(o, {
                top: 10,
                bottom: 10,
                tintColor: "#fff"
            });
            Alloy.isTablet && _.extend(o, {
                top: 10,
                bottom: 10,
                tintColor: "#fff"
            });
            _.extend(o, {
                id: "buttonRight2",
                visible: "false"
            });
            return o;
        }());
        $.__views.__alloyId68.add($.__views.buttonRight2);
    }
    $.__views.__alloyId69 = Ti.UI.createView({
        color: "#ffffff",
        width: "15%",
        height: Ti.UI.FILL,
        top: "10dp",
        bottom: "10dp",
        right: "0dp",
        id: "__alloyId69"
    });
    $.__views.viewNav.add($.__views.__alloyId69);
    if (!Alloy.isTablet) {
        $.__views.buttonRight = Ti.UI.createImageView(function() {
            var o = {};
            _.extend(o, {
                height: "40dp"
            });
            Alloy.isHandheld && _.extend(o, {
                right: 0,
                top: 10,
                bottom: 10,
                tintColor: "#fff"
            });
            Alloy.isTablet && _.extend(o, {
                right: 0,
                top: 10,
                bottom: 10,
                tintColor: "#fff"
            });
            _.extend(o, {
                id: "buttonRight",
                visible: "false"
            });
            return o;
        }());
        $.__views.__alloyId69.add($.__views.buttonRight);
    }
    if (Alloy.isTablet) {
        $.__views.buttonRight = Ti.UI.createImageView(function() {
            var o = {};
            _.extend(o, {
                height: "60dp"
            });
            Alloy.isHandheld && _.extend(o, {
                right: 0,
                top: 10,
                bottom: 10,
                tintColor: "#fff"
            });
            Alloy.isTablet && _.extend(o, {
                right: 0,
                top: 10,
                bottom: 10,
                tintColor: "#fff"
            });
            _.extend(o, {
                id: "buttonRight",
                visible: "false"
            });
            return o;
        }());
        $.__views.__alloyId69.add($.__views.buttonRight);
    }
    if (!Alloy.isTablet) {
        $.__views.viewInfoBar = Ti.UI.createView({
            color: "#ffffff",
            width: Ti.UI.FILL,
            height: "1dp",
            top: "65dp",
            layout: "composite",
            id: "viewInfoBar",
            zIndex: "100",
            opacity: "0.0"
        });
        $.__views.shadowview.add($.__views.viewInfoBar);
        $.__views.imageViewInfoBarIcon = Ti.UI.createImageView({
            width: "35dp",
            height: "35dp",
            top: "5dp",
            bottom: "5dp",
            left: "5dp",
            id: "imageViewInfoBarIcon"
        });
        $.__views.viewInfoBar.add($.__views.imageViewInfoBarIcon);
        $.__views.labelInfoBarTitle = Ti.UI.createLabel({
            font: {
                fontFamily: "HelveticaNeue-Light",
                fontSize: "18dp",
                fontWeight: "semibold"
            },
            color: "white",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            left: "65dp",
            right: "65dp",
            id: "labelInfoBarTitle"
        });
        $.__views.viewInfoBar.add($.__views.labelInfoBarTitle);
        $.__views.imageViewInfoBarIcon2 = Ti.UI.createImageView({
            width: "35dp",
            height: "35dp",
            top: "5dp",
            bottom: "5dp",
            right: "5dp",
            id: "imageViewInfoBarIcon2"
        });
        $.__views.viewInfoBar.add($.__views.imageViewInfoBarIcon2);
    }
    if (Alloy.isTablet) {
        $.__views.viewInfoBar = Ti.UI.createView({
            color: "#ffffff",
            width: Ti.UI.FILL,
            height: "45dp",
            top: "90dp",
            id: "viewInfoBar",
            zIndex: "100"
        });
        $.__views.shadowview.add($.__views.viewInfoBar);
    }
    $.__views.viewContentArea = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            color: "#ffffff",
            layout: "horizontal"
        });
        Alloy.isHandheld && _.extend(o, {
            top: 64
        });
        Alloy.isTablet && _.extend(o, {
            top: 88
        });
        _.extend(o, {
            id: "viewContentArea",
            backgroundColor: "f2eee9"
        });
        return o;
    }());
    $.__views.shadowview.add($.__views.viewContentArea);
    $.__views.viewMainContent = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        top: "0dp",
        left: "0dp",
        layout: "composite",
        id: "viewMainContent"
    });
    $.__views.viewContentArea.add($.__views.viewMainContent);
    if (Alloy.isTablet) {
        $.__views.viewSideContent = Ti.UI.createView(function() {
            var o = {};
            _.extend(o, {
                color: "#ffffff",
                top: "0dp"
            });
            Alloy.isTablet && _.extend(o, {
                width: "50%",
                height: Ti.UI.FILL,
                backgroundColor: "#f2eee9"
            });
            _.extend(o, {
                id: "viewSideContent"
            });
            return o;
        }());
        $.__views.viewContentArea.add($.__views.viewSideContent);
    }
    $.__views.viewBottomBar = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: "0dp",
        bottom: "0dp",
        layout: "horizontal",
        id: "viewBottomBar",
        zIndex: "100"
    });
    $.__views.shadowview.add($.__views.viewBottomBar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var log = Alloy.Globals.log;
    log.debug("[ROOT] Vroom!  Starting up!");
    var animateRight, animateLeft, animateReset, animateSideContent;
    var hasSlided = false;
    var direction = "reset";
    var sidebarActive = false;
    var currentCallbackL1 = [];
    var currentCallbackL2 = [];
    var currentCallbackR1 = [];
    var currentCallbackR2 = [];
    var breadcrumbs = [];
    init();
    Alloy.Globals.Menu = this;
    exports.setColor = function(color) {
        var animation = Titanium.UI.createAnimation();
        animation.backgroundColor = color;
        animation.duration = 250;
        $.viewNav.animate(animation);
        $.buttonLeft.animate(animation);
        $.buttonRight.animate(animation);
        $.viewTitleHolder.animate(animation);
        $.viewMainContent.animate(animation);
    };
    var mainContentTitle = "";
    exports.setMainContent = function(viewTitle, args) {
        args = args ? args : {};
        log.info("[FOUNDATION] : Opening " + viewTitle, args);
        breadcrumbs.push({
            controller: viewTitle,
            args: args
        });
        exports.hideButton("r2");
        exports.hideButton("l2");
        args = args || {};
        if (sidebarActive) {
            $.viewSideContent.width = 0;
            $.viewMainContent.width = "100%";
            sidebarActive = false;
        }
        if (mainContentTitle !== viewTitle) {
            mainContentTitle = viewTitle;
            if ($.viewMainContent.children.length > 0) {
                null !== $.viewMainContent.children[0].cleanup && $.viewMainContent.children[0].cleanup();
                $.viewMainContent.removeAllChildren();
            }
            var mainContentView = Alloy.createController(viewTitle, args);
            $.viewMainContent.add(mainContentView.getView());
            configureNavBar(viewTitle);
            args.title ? exports.setTitle(args.title) : function() {};
        }
    };
    exports.setSideContent = function(controller, args) {
        args = args || {};
        var title = args.title || "";
        log.info("[ROOT] :: Set Side to " + controller, args);
        sidebarActive = true;
        $.viewSideContent.width = "50%";
        $.viewMainContent.width = "50%";
        $.viewSideContent.children.length > 0 && $.viewSideContent.removeAllChildren();
        var sideContentView = Alloy.createController(controller, args);
        $.viewSideContent.add(sideContentView.getView());
        configureSideBar(title);
    };
    exports.hideSideContent = function() {
        log.debug("[FOUNDATION] : hideSideContent");
        $.viewSideContent.width = 0;
    };
    exports.setTitle = function(title) {
        log.debug("[FOUNDATION] : setTitle : title = " + title);
        _.isUndefined(title) || ($.labelTitle.text = title);
    };
    exports.setButton = function(args) {
        log.debug("[ROOT] Setting Button " + args.button, args);
        var image = args.image ? args.image : "";
        var button = args.button ? args.button : false;
        if (!button) return false;
        switch (button) {
          case "r1":
            currentCallbackR1.length > 0 && $.buttonRight.removeEventListener("click", currentCallbackR1.pop());
            currentCallbackR1.push(args.success ? args.success : function() {
                log.warn("No Success callback provided");
            });
            $.buttonRight.image = image;
            $.buttonRight.addEventListener("click", _.first(currentCallbackR1));
            break;

          case "r2":
            currentCallbackR2.length > 0 && $.buttonRight2.removeEventListener("click", currentCallbackR2.pop());
            currentCallbackR2.push(args.success ? args.success : function() {
                log.warn("No Success callback provided");
            });
            $.buttonRight2.image = image;
            $.buttonRight2.addEventListener("click", _.first(currentCallbackR2));
            break;

          case "l1":
            currentCallbackL1.length > 0 && $.buttonLeft.removeEventListener("click", currentCallbackL1.pop());
            currentCallbackL1.push(args.success ? args.success : function() {
                log.warn("No Success callback provided");
            });
            $.buttonLeft.image = image;
            $.buttonLeft.addEventListener("click", _.first(currentCallbackL1));
            break;

          case "l2":
            currentCallbackL2.length > 0 && $.buttonLeft2.removeEventListener("click", currentCallbackL2.pop());
            currentCallbackL2.push(args.success ? args.success : function() {
                log.warn("No Success callback provided");
            });
            $.buttonLeft2.image = image;
            $.buttonLeft2.addEventListener("click", _.first(currentCallbackL2));
        }
    };
    exports.hideButton = function(selectedButton) {
        log.debug("[FOUNDATION] : hideButton : selectedButton = " + selectedButton);
        if (!selectedButton) return false;
        switch (selectedButton) {
          case "r1":
            $.buttonRight.visible = false;
            break;

          case "r2":
            $.buttonRight2.visible = false;
            break;

          case "l1":
            $.buttonLeft.visible = false;
            break;

          case "l2":
            $.buttonLeft2.visible = false;
        }
    };
    exports.showButton = function(selectedButton) {
        log.debug("[ROOT] Show Button " + selectedButton);
        if (!selectedButton) {
            alert("Attempted to show navigation button but did not provide the button to show");
            return false;
        }
        switch (selectedButton) {
          case "r1":
            $.buttonRight.visible = true;
            break;

          case "r2":
            $.buttonRight2.visible = true;
            break;

          case "l1":
            $.buttonLeft.visible = true;
            break;

          case "l2":
            $.buttonLeft2.visible = true;
            break;

          default:
            alert("Default.  Shouldn't see this");
        }
    };
    exports.hideNavBar = function() {
        $.viewNav.height = 0;
        $.viewContentArea.top = 0;
        $.viewShadow.visible = 0;
    };
    exports.showNavBar = function() {
        if (Alloy.isTablet) {
            $.viewNav.height = 90;
            $.viewContentArea.top = 90;
        } else {
            $.viewNav.height = 65;
            $.viewContentArea.top = 65;
        }
        $.viewShadow.visible = 1;
    };
    exports.hideBottomBar = function() {
        $.viewBottomBar.height = 0;
    };
    exports.showBottomBar = function() {
        $.viewBottomBar.height = 65;
    };
    exports.setBottomBar = function() {
        $.viewBottomBar.removeAllChildren();
    };
    exports.hideInfoBar = function() {
        var animation = Ti.UI.createAnimation({
            height: 1,
            opacity: 0,
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
        });
        $.viewInfoBar.animate(animation);
    };
    exports.showInfoBar = function(args) {
        if (args.yes || args.cancel) {
            $.imageViewInfoBarIcon.width = 35;
            $.imageViewInfoBarIcon2.width = 35;
            $.labelInfoBarTitle.left = 65;
            $.labelInfoBarTitle.right = 65;
        } else {
            $.imageViewInfoBarIcon.width = 0;
            $.imageViewInfoBarIcon2.width = 0;
            $.labelInfoBarTitle.left = 0;
            $.labelInfoBarTitle.right = 0;
        }
        args = args || {};
        var duration = args.duration ? args.duration : 3500;
        $.labelInfoBarTitle.text = args.title ? args.title : "Use args.title";
        $.viewInfoBar.backgroundColor = args.color ? args.color : "#333";
        $.imageViewInfoBarIcon.image = args.icon ? args.icon : "/images/navigation/ic_cancel_white_48dp.png";
        $.imageViewInfoBarIcon2.image = args.icon ? args.icon : "/images/navigation/ic_check_white_48dp.png";
        var cancel;
        if (null !== args.cancel && void 0 !== args.cancel) {
            var cancel = function() {
                args.cancel();
                exports.hideInfoBar();
            };
            var yes = function() {
                exports.hideInfoBar();
                alert("here");
            };
            $.imageViewInfoBarIcon.removeEventListener(cancel);
            $.imageViewInfoBarIcon2.removeEventListener(yes);
            $.imageViewInfoBarIcon.addEventListener("click", cancel);
            $.imageViewInfoBarIcon2.addEventListener("click", yes);
        }
        _.delay(function() {
            var animation = Ti.UI.createAnimation({
                height: 45,
                opacity: .85,
                duration: 500,
                curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
            });
            $.viewInfoBar.animate(animation);
        }, 500);
        duration && _.delay(function() {
            exports.hideInfoBar();
        }, duration);
    };
    exports.getBreadcrumbs = function(numCrumbs) {
        numCrumbs = numCrumbs ? numCrumbs : 5;
        return _.last(breadcrumbs, numCrumbs);
    };
    exports.goBack = function() {
        var lastController = _.first(exports.getBreadcrumbs(2));
        _.isUndefined(lastController.viewTitle) || _.isUndefined(lastController.args) ? exports.setMainContent(_.isUndefined(lastController.viewTitle) ? "HomePage" : lastController.viewTitle) : exports.setMainContent(lastController.viewTitle, lastController.args);
    };
    exports.toggleLeftSlider = function() {
        if (hasSlided) {
            direction = "reset";
            $.viewMovable.animate(animateReset);
            hasSlided = false;
            $.leftMenu.zIndex = 1;
            $.topNavigationDrawer.zIndex = 0;
            $.buttonLeft.touchEnabled = true;
            $.buttonRight.touchEnabled = true;
        } else {
            direction = "right";
            $.viewMovable.animate(animateRight);
            hasSlided = true;
            $.leftMenu.zIndex = 4;
            $.topNavigationDrawer.zIndex = 0;
        }
        log.debug("[FOUNDATION] : Left Menu Has Slided: " + hasSlided + " in direction: " + direction);
    };
    exports.toggleRightSlider = function() {
        if (hasSlided) {
            direction = "reset";
            $.viewMovable.animate(animateReset);
            hasSlided = false;
            $.rightMenu.zIndex = 1;
            $.topNavigationDrawer.zIndex = 0;
            $.buttonLeft.touchEnabled = true;
            $.buttonRight.touchEnabled = true;
        } else {
            direction = "left";
            $.viewMovable.animate(animateLeft);
            hasSlided = true;
            $.rightMenu.zIndex = 4;
            $.topNavigationDrawer.zIndex = 0;
        }
        log.debug("[FOUNDATION] : Left Menu Has Slided: " + hasSlided + " in direction: " + direction);
    };
    exports.toggleTopSlider = function() {};
    exports.handleRotation = function() {
        log.debug("[FOUNDATION] : handleRotation()");
    };
    exports.addMenuView = function(view) {
        log.info("Menu Widget :: Adding a view to the menu");
        $.leftMenu.add(view);
    };
    exports.changeMenu = function(args) {
        args = args ? args : {};
        var menuSide = args.side;
        var image = args.image;
        var onclick = args.onclick;
        if ("right" === menuSide) {
            image && $.buttonRight.image;
            if (onclick) {
                $.buttonRight.removeEventListener("touchend");
                $.buttonRight.addEventListener("click", onclick);
            }
        } else {
            image && $.buttonLeft.image;
            if (onclick) {
                $.buttonLeft.removeEventListener("touchend");
                $.buttonLeft.addEventListener("click", onclick);
            }
        }
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;