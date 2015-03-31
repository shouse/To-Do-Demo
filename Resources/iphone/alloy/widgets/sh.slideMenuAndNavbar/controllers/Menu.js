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
    new (require("alloy/widget"))("sh.slideMenuAndNavbar");
    this.__widgetId = "sh.slideMenuAndNavbar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Menu";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.Menu = Ti.UI.createScrollView({
        layout: "vertical",
        color: "#ffffff",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        top: "20dp",
        id: "Menu"
    });
    $.__views.Menu && $.addTopLevelView($.__views.Menu);
    $.__views.userDisplay = Alloy.createWidget("userDisplay", "widget", {
        width: Ti.UI.FILL,
        height: "45dp",
        left: "10dp",
        id: "userDisplay",
        borderWidth: "3",
        borderColor: "",
        __parentSymbol: $.__views.Menu
    });
    $.__views.userDisplay.setParent($.__views.Menu);
    $.__views.__alloyId48 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId48"
    });
    $.__views.Menu.add($.__views.__alloyId48);
    $.__views.viewHome = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewHome"
    });
    $.__views.Menu.add($.__views.viewHome);
    $.__views.imageViewHome = Ti.UI.createImageView({
        width: "60dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewHome",
        image: "/images/navigation/ic_home_white_48dp.png"
    });
    $.__views.viewHome.add($.__views.imageViewHome);
    $.__views.labelHome = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "HOME",
        id: "labelHome"
    });
    $.__views.viewHome.add($.__views.labelHome);
    $.__views.__alloyId49 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId49"
    });
    $.__views.Menu.add($.__views.__alloyId49);
    $.__views.viewInbox = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewInbox"
    });
    $.__views.Menu.add($.__views.viewInbox);
    $.__views.imageViewEmail = Ti.UI.createImageView({
        width: "45dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewEmail",
        image: "/images/communication/ic_email_white_48dp.png"
    });
    $.__views.viewInbox.add($.__views.imageViewEmail);
    $.__views.labelEmail = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "INBOX",
        id: "labelEmail"
    });
    $.__views.viewInbox.add($.__views.labelEmail);
    $.__views.__alloyId50 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId50"
    });
    $.__views.Menu.add($.__views.__alloyId50);
    $.__views.viewMyGarage = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewMyGarage"
    });
    $.__views.Menu.add($.__views.viewMyGarage);
    $.__views.imageViewMyGarage = Ti.UI.createImageView({
        width: "65dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewMyGarage",
        image: "/images/menu/left_icon.png"
    });
    $.__views.viewMyGarage.add($.__views.imageViewMyGarage);
    $.__views.labelMyGarage = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "GARAGE",
        id: "labelMyGarage"
    });
    $.__views.viewMyGarage.add($.__views.labelMyGarage);
    $.__views.__alloyId51 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId51"
    });
    $.__views.Menu.add($.__views.__alloyId51);
    $.__views.viewGas = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewGas"
    });
    $.__views.Menu.add($.__views.viewGas);
    $.__views.imageViewGas = Ti.UI.createImageView({
        width: "45dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewGas",
        image: "/images/attach/ic_attach_money_white_48dp.png"
    });
    $.__views.viewGas.add($.__views.imageViewGas);
    $.__views.labelGas = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "GAS PRICES",
        id: "labelGas"
    });
    $.__views.viewGas.add($.__views.labelGas);
    $.__views.__alloyId52 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId52"
    });
    $.__views.Menu.add($.__views.__alloyId52);
    $.__views.viewGroups = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewGroups"
    });
    $.__views.Menu.add($.__views.viewGroups);
    $.__views.imageViewGroups = Ti.UI.createImageView({
        width: "45dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewGroups",
        image: "/images/social/ic_group_white_48dp.png"
    });
    $.__views.viewGroups.add($.__views.imageViewGroups);
    $.__views.labelGroups = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "GROUPS",
        id: "labelGroups"
    });
    $.__views.viewGroups.add($.__views.labelGroups);
    $.__views.__alloyId53 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId53"
    });
    $.__views.Menu.add($.__views.__alloyId53);
    $.__views.viewGloveBox = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewGloveBox"
    });
    $.__views.Menu.add($.__views.viewGloveBox);
    $.__views.imageViewGloveBox = Ti.UI.createImageView({
        width: "45dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewGloveBox",
        image: "/images/file/ic_folder_open_white_48dp.png"
    });
    $.__views.viewGloveBox.add($.__views.imageViewGloveBox);
    $.__views.labelGloveBox = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "GLOVE BOX",
        id: "labelGloveBox"
    });
    $.__views.viewGloveBox.add($.__views.labelGloveBox);
    $.__views.__alloyId54 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId54"
    });
    $.__views.Menu.add($.__views.__alloyId54);
    $.__views.viewAdapterStatus = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewAdapterStatus"
    });
    $.__views.Menu.add($.__views.viewAdapterStatus);
    $.__views.imageViewStatus = Ti.UI.createImageView({
        width: "45dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewStatus",
        image: "/images/action/ic_settings_bluetooth_white_48dp.png"
    });
    $.__views.viewAdapterStatus.add($.__views.imageViewStatus);
    $.__views.labelSettings = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "STATUS",
        id: "labelSettings"
    });
    $.__views.viewAdapterStatus.add($.__views.labelSettings);
    $.__views.__alloyId55 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId55"
    });
    $.__views.Menu.add($.__views.__alloyId55);
    $.__views.viewSettings = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewSettings"
    });
    $.__views.Menu.add($.__views.viewSettings);
    $.__views.imageViewSettings = Ti.UI.createImageView({
        width: "45dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewSettings",
        image: "/images/action/ic_settings_applications_white_48dp.png"
    });
    $.__views.viewSettings.add($.__views.imageViewSettings);
    $.__views.labelSettings = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "SETTINGS",
        id: "labelSettings"
    });
    $.__views.viewSettings.add($.__views.labelSettings);
    $.__views.__alloyId56 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId56"
    });
    $.__views.Menu.add($.__views.__alloyId56);
    $.__views.viewFeedback = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewFeedback"
    });
    $.__views.Menu.add($.__views.viewFeedback);
    $.__views.imageViewFeedback = Ti.UI.createImageView({
        width: "45dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewFeedback",
        image: "/images/action/ic_question_answer_white_48dp.png"
    });
    $.__views.viewFeedback.add($.__views.imageViewFeedback);
    $.__views.labelFeedback = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "FEEDBACK",
        id: "labelFeedback"
    });
    $.__views.viewFeedback.add($.__views.labelFeedback);
    $.__views.__alloyId57 = Ti.UI.createView({
        color: "#ffffff",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2,
        top: "10dp",
        id: "__alloyId57"
    });
    $.__views.Menu.add($.__views.__alloyId57);
    $.__views.viewLogger = Ti.UI.createView({
        color: "#ffffff",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "viewLogger"
    });
    $.__views.Menu.add($.__views.viewLogger);
    $.__views.imageViewLogger = Ti.UI.createImageView({
        width: "45dp",
        height: "45dp",
        left: "10dp",
        id: "imageViewLogger",
        image: "/icons/light/ic_action_chat.png"
    });
    $.__views.viewLogger.add($.__views.imageViewLogger);
    $.__views.labelLogger = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        right: "10dp",
        text: "VIEW LOGS",
        id: "labelLogger"
    });
    $.__views.viewLogger.add($.__views.labelLogger);
    $.__views.leftBottomMenu = Ti.UI.createView({
        color: "#ffffff",
        height: "35dp",
        bottom: "0dp",
        layout: "horizontal",
        id: "leftBottomMenu"
    });
    $.__views.leftBottomMenu && $.addTopLevelView($.__views.leftBottomMenu);
    $.__views.__alloyId58 = Ti.UI.createView({
        color: "#ffffff",
        id: "__alloyId58"
    });
    $.__views.leftBottomMenu.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        text: "Logout",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        color: "#ffffff",
        id: "__alloyId60"
    });
    $.__views.leftBottomMenu.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333",
        text: "Settings",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;