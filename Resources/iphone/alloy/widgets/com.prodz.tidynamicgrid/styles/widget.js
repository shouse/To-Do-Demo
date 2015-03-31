function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.prodz.tidynamicgrid/" + s : s.substring(0, index) + "/com.prodz.tidynamicgrid/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0017,
    key: "Window",
    style: {
        layout: "vertical",
        backgroundColor: "#ffffff"
    }
}, {
    isApi: true,
    priority: 1000.0018,
    key: "View",
    style: {
        color: "#ffffff"
    }
}, {
    isApi: true,
    priority: 1000.0019,
    key: "ScrollView",
    style: {
        layout: "vertical",
        color: "#ffffff"
    }
}, {
    isApi: true,
    priority: 1000.002,
    key: "Label",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        color: "#333333"
    }
}, {
    isApi: true,
    priority: 1000.0021,
    key: "Button",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        },
        height: "44dp",
        width: "100%"
    }
}, {
    isApi: true,
    priority: 1000.0022,
    key: "TableView",
    style: {
        backgroundColor: "transparent",
        width: "100%",
        height: Ti.UI.FILL
    }
}, {
    isApi: true,
    priority: 1000.0023,
    key: "TableViewRow",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "bold",
            fontStyle: "normal"
        }
    }
}, {
    isApi: true,
    priority: 1000.0024,
    key: "TextField",
    style: {
        height: "44dp",
        backgroundColor: "#ffffff",
        color: "#000000",
        paddingLeft: "10%",
        paddingRight: "10%"
    }
}, {
    isApi: true,
    priority: 1000.0025,
    key: "TextArea",
    style: {
        height: "44dp",
        backgroundColor: "#ffffff",
        color: "#000000",
        paddingLeft: "10%",
        paddingRight: "10%"
    }
}, {
    isApi: true,
    priority: 1000.0095,
    key: "h-wrap",
    style: {
        horizontalWrap: true
    }
}, {
    isApi: true,
    priority: 1000.0096,
    key: "h-wrap-disable",
    style: {
        horizontalWrap: false
    }
}, {
    isClass: true,
    priority: 10000.0001,
    key: "green: ",
    style: {
        color: "#172800"
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "darkBlue: ",
    style: {
        color: "#1a1c20"
    }
}, {
    isClass: true,
    priority: 10000.0003,
    key: "brown: ",
    style: {
        color: "#604800"
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "gray: ",
    style: {
        color: "#cccccc"
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "mediumBlue: ",
    style: {
        color: "#373c45"
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "orange: ",
    style: {
        color: "#eb5d36"
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "sw-100%",
    style: {}
}, {
    isClass: true,
    priority: 10000.0008,
    key: "sh-100%",
    style: {}
}, {
    isClass: true,
    priority: 10000.001,
    key: "maintabbutton",
    style: {
        style: "none",
        width: "25%",
        height: Ti.UI.FILL,
        backgroundColor: "#D1D3D4",
        borderColor: "#fff",
        borderWidth: 2
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "vr",
    style: {
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: 2
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "hr",
    style: {
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 2
    }
}, {
    isClass: true,
    priority: 10000.0016,
    key: "button_medium",
    style: {
        paddingLeft: 10,
        borderWidth: 3,
        borderRadius: 3,
        borderColor: "#45c1bf",
        backgroundColor: "#fff",
        color: "#45c1bf",
        width: 300,
        height: 44,
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: "15sp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0031,
    key: "touch-disabled",
    style: {
        touchEnabled: false
    }
}, {
    isClass: true,
    priority: 10000.0032,
    key: "fullscreen",
    style: {
        fullscreen: true
    }
}, {
    isClass: true,
    priority: 10000.0033,
    key: "hideNav",
    style: {
        navBarHidden: true
    }
}, {
    isClass: true,
    priority: 10000.0034,
    key: "showNav",
    style: {
        navBarHidden: false
    }
}, {
    isClass: true,
    priority: 10000.0035,
    key: "modal",
    style: {
        modal: true
    }
}, {
    isClass: true,
    priority: 10000.0036,
    key: "hide",
    style: {
        visible: false
    }
}, {
    isClass: true,
    priority: 10000.0037,
    key: "show",
    style: {
        visible: true
    }
}, {
    isClass: true,
    priority: 10000.0038,
    key: "rounded-border-4",
    style: {
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "transparent"
    }
}, {
    isClass: true,
    priority: 10000.0039,
    key: "rounded-border-6",
    style: {
        borderRadius: "6dp",
        borderWidth: "1dp",
        borderColor: "transparent"
    }
}, {
    isClass: true,
    priority: 10000.004,
    key: "rounded-border-10",
    style: {
        borderRadius: "10dp",
        borderWidth: "1dp",
        borderColor: "transparent"
    }
}, {
    isClass: true,
    priority: 10000.0041,
    key: "footer",
    style: {
        bottom: 0,
        height: "44dp",
        width: "100%"
    }
}, {
    isClass: true,
    priority: 10000.0042,
    key: "n-container",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.0043,
    key: "n-col-1",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "8.25%"
    }
}, {
    isClass: true,
    priority: 10000.0044,
    key: "n-col-2",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "16.50%"
    }
}, {
    isClass: true,
    priority: 10000.0045,
    key: "n-col-3",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "24.75%"
    }
}, {
    isClass: true,
    priority: 10000.0046,
    key: "n-col-4",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "33%"
    }
}, {
    isClass: true,
    priority: 10000.0047,
    key: "n-col-5",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "41.25%"
    }
}, {
    isClass: true,
    priority: 10000.0048,
    key: "n-col-6",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "49.5%"
    }
}, {
    isClass: true,
    priority: 10000.0049,
    key: "n-col-7",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "57.75%"
    }
}, {
    isClass: true,
    priority: 10000.005,
    key: "n-col-8",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "66%"
    }
}, {
    isClass: true,
    priority: 10000.0051,
    key: "n-col-9",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "74.25%"
    }
}, {
    isClass: true,
    priority: 10000.0052,
    key: "n-col-10",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "82.50%"
    }
}, {
    isClass: true,
    priority: 10000.0053,
    key: "n-col-11",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "90.75%"
    }
}, {
    isClass: true,
    priority: 10000.0054,
    key: "n-col-12",
    style: {
        left: 0,
        height: Ti.UI.SIZE,
        width: "100%"
    }
}, {
    isClass: true,
    priority: 10000.0055,
    key: "n-col-push-1",
    style: {
        left: "8.25%"
    }
}, {
    isClass: true,
    priority: 10000.0056,
    key: "n-col-push-2",
    style: {
        left: "16.50%"
    }
}, {
    isClass: true,
    priority: 10000.0057,
    key: "n-col-push-3",
    style: {
        left: "24.75%"
    }
}, {
    isClass: true,
    priority: 10000.0058,
    key: "n-col-push-4",
    style: {
        left: "33%"
    }
}, {
    isClass: true,
    priority: 10000.0059,
    key: "n-col-push-5",
    style: {
        left: "41.25%"
    }
}, {
    isClass: true,
    priority: 10000.006,
    key: "n-col-push-6",
    style: {
        left: "49.5%"
    }
}, {
    isClass: true,
    priority: 10000.0061,
    key: "n-col-push-7",
    style: {
        left: "57.75%"
    }
}, {
    isClass: true,
    priority: 10000.0062,
    key: "n-col-push-8",
    style: {
        left: "66%"
    }
}, {
    isClass: true,
    priority: 10000.0063,
    key: "n-col-push-9",
    style: {
        left: "74.25%"
    }
}, {
    isClass: true,
    priority: 10000.0064,
    key: "n-col-push-10",
    style: {
        left: "82.50%"
    }
}, {
    isClass: true,
    priority: 10000.0065,
    key: "n-col-push-11",
    style: {
        left: "90.75%"
    }
}, {
    isClass: true,
    priority: 10000.0066,
    key: "col",
    style: {
        top: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0067,
    key: "col-spacing",
    style: {
        left: "1.333333334%"
    }
}, {
    isClass: true,
    priority: 10000.0068,
    key: "col-1",
    style: {
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0069,
    key: "col-1-end",
    style: {
        layout: "vertical",
        width: "23%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.007,
    key: "col-1-push-1",
    style: {
        layout: "vertical",
        left: "25.4%",
        width: "24%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0071,
    key: "col-1-push-2",
    style: {
        layout: "vertical",
        left: "51%",
        width: "25%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0072,
    key: "col-1-push-3",
    style: {
        layout: "vertical",
        left: "75.75%",
        width: "24%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0073,
    key: "col-2",
    style: {
        layout: "vertical",
        width: "49.25%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0074,
    key: "col-2-push-1",
    style: {
        layout: "vertical",
        left: "25.4%",
        width: "49.25%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0075,
    key: "col-2-push-2",
    style: {
        layout: "vertical",
        left: "50.66%",
        width: "49.33%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0076,
    key: "col-3",
    style: {
        layout: "vertical",
        width: "74.3333333%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0077,
    key: "col-3-push-1",
    style: {
        layout: "vertical",
        left: "25.4%",
        width: "74.3333333%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0078,
    key: "col-4",
    style: {
        layout: "vertical",
        width: "99.666666%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0079,
    key: "h1",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "36dp",
            fontWeight: "semibold"
        }
    }
}, {
    isClass: true,
    priority: 10000.008,
    key: "h2",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "30dp",
            fontWeight: "semibold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0081,
    key: "h3",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "24dp",
            fontWeight: "semibold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0082,
    key: "h4",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "18dp",
            fontWeight: "semibold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0083,
    key: "h5",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "semibold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0084,
    key: "h6",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "12dp",
            fontWeight: "semibold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0085,
    key: "p",
    style: {
        layout: "vertical",
        width: "100%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0086,
    key: "p-content",
    style: {
        top: "10dp",
        left: 0
    }
}, {
    isClass: true,
    priority: 10000.0087,
    key: "lead",
    style: {
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "20dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0088,
    key: "small",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "12dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0089,
    key: "large",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "18dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.009,
    key: "bold",
    style: {
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0091,
    key: "em",
    style: {
        font: {
            fontFamily: "HelveticaNeue-LightItalic",
            fontSize: "14dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0092,
    key: "text-left",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
    }
}, {
    isClass: true,
    priority: 10000.0093,
    key: "text-center",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isClass: true,
    priority: 10000.0094,
    key: "text-right",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT
    }
}, {
    isClass: true,
    priority: 10000.0097,
    key: "address",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0098,
    key: "address-title",
    style: {
        left: 0,
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: "14dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0099,
    key: "address-content",
    style: {
        left: 0
    }
}, {
    isClass: true,
    priority: 10000.01,
    key: "cite",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0101,
    key: "cite-quote",
    style: {
        width: "100%",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "18dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0102,
    key: "cite-source",
    style: {
        width: "100%",
        top: "5dp",
        left: "10dp",
        font: {
            fontFamily: "HelveticaNeue-LightItalic",
            fontSize: "12dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0103,
    key: "btn-border",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderRadius: "4dp",
        borderWidth: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0104,
    key: "btn-disabled",
    style: {
        opacity: .65
    }
}, {
    isClass: true,
    priority: 10000.0105,
    key: "btn-default",
    style: {
        color: "#333333",
        backgroundImage: "/btn-default.png"
    }
}, {
    isClass: true,
    priority: 10000.0106,
    key: "btn-border-default",
    style: {
        backgroundColor: "#ffffff",
        borderColor: "#cccccc"
    }
}, {
    isClass: true,
    priority: 10000.0107,
    key: "btn-primary",
    style: {
        color: "#ffffff",
        backgroundImage: "/btn-primary.png"
    }
}, {
    isClass: true,
    priority: 10000.0108,
    key: "btn-border-primary",
    style: {
        backgroundColor: "#428bca",
        borderColor: "#285e8e"
    }
}, {
    isClass: true,
    priority: 10000.0109,
    key: "btn-warning",
    style: {
        color: "#ffffff",
        backgroundImage: "/btn-warning.png"
    }
}, {
    isClass: true,
    priority: 10000.011,
    key: "btn-border-warning",
    style: {
        backgroundColor: "#f0ad4e",
        borderColor: "#eea236"
    }
}, {
    isClass: true,
    priority: 10000.0111,
    key: "btn-success",
    style: {
        color: "#ffffff",
        backgroundImage: "/btn-success.png"
    }
}, {
    isClass: true,
    priority: 10000.0112,
    key: "btn-border-success",
    style: {
        backgroundColor: "#47a447",
        borderColor: "#398439"
    }
}, {
    isClass: true,
    priority: 10000.0113,
    key: "btn-info",
    style: {
        color: "#ffffff",
        backgroundImage: "/btn-info.png"
    }
}, {
    isClass: true,
    priority: 10000.0114,
    key: "btn-border-info",
    style: {
        backgroundColor: "#5bc0de",
        borderColor: "#46b8da"
    }
}, {
    isClass: true,
    priority: 10000.0115,
    key: "btn-danger",
    style: {
        color: "#ffffff",
        backgroundImage: "/btn-danger.png"
    }
}, {
    isClass: true,
    priority: 10000.0116,
    key: "btn-border-danger",
    style: {
        backgroundColor: "#d9534f",
        borderColor: "#eea236"
    }
}, {
    isClass: true,
    priority: 10000.0117,
    key: "btn-lg",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "20dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0118,
    key: "btn-sm",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "12dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0119,
    key: "btn-xs",
    style: {
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "10dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.012,
    key: "disabled",
    style: {
        enabled: false
    }
}, {
    isClass: true,
    priority: 10000.0121,
    key: "enabled",
    style: {
        enabled: true
    }
}, {
    isClass: true,
    priority: 10000.0122,
    key: "img-rounded",
    style: {
        borderRadius: "6dp"
    }
}, {
    isClass: true,
    priority: 10000.0123,
    key: "img-circle",
    style: {
        width: "140dp",
        height: "140dp",
        borderRadius: "70dp"
    }
}, {
    isClass: true,
    priority: 10000.0124,
    key: "img-circle-sm",
    style: {
        width: "60dp",
        height: "60dp",
        borderRadius: "30dp"
    }
}, {
    isClass: true,
    priority: 10000.0125,
    key: "thumbnail-container",
    style: {
        layout: "composite",
        width: "140dp",
        height: "140dp",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "#dddddd"
    }
}, {
    isClass: true,
    priority: 10000.0126,
    key: "img-thumbnail",
    style: {
        width: "130dp",
        height: "130dp"
    }
}, {
    isClass: true,
    priority: 10000.0127,
    key: "thumbnail-circle-container",
    style: {
        layout: "composite",
        width: "140dp",
        height: "140dp",
        borderRadius: "70dp",
        borderWidth: "1dp",
        borderColor: "#dddddd"
    }
}, {
    isClass: true,
    priority: 10000.0128,
    key: "img-thumbnail-circle",
    style: {
        width: "130dp",
        height: "130dp",
        borderRadius: "65dp"
    }
}, {
    isClass: true,
    priority: 10000.0129,
    key: "thumbnail-container-sm",
    style: {
        layout: "composite",
        width: "60dp",
        height: "60dp",
        borderRadius: "4dp",
        borderWidth: "1dp",
        borderColor: "#dddddd"
    }
}, {
    isClass: true,
    priority: 10000.013,
    key: "img-thumbnail-sm",
    style: {
        width: "50dp",
        height: "50dp"
    }
}, {
    isClass: true,
    priority: 10000.0131,
    key: "thumbnail-circle-container-sm",
    style: {
        layout: "composite",
        width: "60dp",
        height: "60dp",
        borderRadius: "30dp",
        borderWidth: "1dp",
        borderColor: "#dddddd"
    }
}, {
    isClass: true,
    priority: 10000.0132,
    key: "img-thumbnail-circle-sm",
    style: {
        width: "50dp",
        height: "50dp",
        borderRadius: "25dp"
    }
}, {
    isClass: true,
    priority: 10000.0133,
    key: "btn-drawer-icon",
    style: {
        image: "/drawer-icon.png"
    }
}, {
    isClass: true,
    priority: 10000.016,
    key: "w-1%",
    style: {
        width: "1%"
    }
}, {
    isClass: true,
    priority: 10000.0161,
    key: "w-5%",
    style: {
        width: "5%"
    }
}, {
    isClass: true,
    priority: 10000.0162,
    key: "w-10%",
    style: {
        width: "10%"
    }
}, {
    isClass: true,
    priority: 10000.0163,
    key: "w-15%",
    style: {
        width: "15%"
    }
}, {
    isClass: true,
    priority: 10000.0164,
    key: "w-20%",
    style: {
        width: "20%"
    }
}, {
    isClass: true,
    priority: 10000.0165,
    key: "w-25%",
    style: {
        width: "25%"
    }
}, {
    isClass: true,
    priority: 10000.0166,
    key: "w-30%",
    style: {
        width: "30%"
    }
}, {
    isClass: true,
    priority: 10000.0167,
    key: "w-35%",
    style: {
        width: "35%"
    }
}, {
    isClass: true,
    priority: 10000.0168,
    key: "w-40%",
    style: {
        width: "40%"
    }
}, {
    isClass: true,
    priority: 10000.0169,
    key: "w-45%",
    style: {
        width: "45%"
    }
}, {
    isClass: true,
    priority: 10000.017,
    key: "w-50%",
    style: {
        width: "50%"
    }
}, {
    isClass: true,
    priority: 10000.0171,
    key: "w-55%",
    style: {
        width: "55%"
    }
}, {
    isClass: true,
    priority: 10000.0172,
    key: "w-60%",
    style: {
        width: "60%"
    }
}, {
    isClass: true,
    priority: 10000.0173,
    key: "w-65%",
    style: {
        width: "65%"
    }
}, {
    isClass: true,
    priority: 10000.0174,
    key: "w-70%",
    style: {
        width: "70%"
    }
}, {
    isClass: true,
    priority: 10000.0175,
    key: "w-75%",
    style: {
        width: "75%"
    }
}, {
    isClass: true,
    priority: 10000.0176,
    key: "w-80%",
    style: {
        width: "80%"
    }
}, {
    isClass: true,
    priority: 10000.0177,
    key: "w-85%",
    style: {
        width: "85%"
    }
}, {
    isClass: true,
    priority: 10000.0178,
    key: "w-90%",
    style: {
        width: "90%"
    }
}, {
    isClass: true,
    priority: 10000.0179,
    key: "w-95%",
    style: {
        width: "95%"
    }
}, {
    isClass: true,
    priority: 10000.018,
    key: "w-100%",
    style: {
        width: "100%"
    }
}, {
    isClass: true,
    priority: 10000.0181,
    key: "w-0",
    style: {
        width: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0182,
    key: "w-1",
    style: {
        width: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0183,
    key: "w-2",
    style: {
        width: "2dp"
    }
}, {
    isClass: true,
    priority: 10000.0184,
    key: "w-3",
    style: {
        width: "3dp"
    }
}, {
    isClass: true,
    priority: 10000.0185,
    key: "w-4",
    style: {
        width: "4dp"
    }
}, {
    isClass: true,
    priority: 10000.0186,
    key: "w-5",
    style: {
        width: "5dp"
    }
}, {
    isClass: true,
    priority: 10000.0187,
    key: "w-6",
    style: {
        width: "6dp"
    }
}, {
    isClass: true,
    priority: 10000.0188,
    key: "w-7",
    style: {
        width: "7dp"
    }
}, {
    isClass: true,
    priority: 10000.0189,
    key: "w-8",
    style: {
        width: "8dp"
    }
}, {
    isClass: true,
    priority: 10000.019,
    key: "w-9",
    style: {
        width: "9dp"
    }
}, {
    isClass: true,
    priority: 10000.0191,
    key: "w-10",
    style: {
        width: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0192,
    key: "w-15",
    style: {
        width: "15dp"
    }
}, {
    isClass: true,
    priority: 10000.0193,
    key: "w-20",
    style: {
        width: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.0194,
    key: "w-25",
    style: {
        width: "25dp"
    }
}, {
    isClass: true,
    priority: 10000.0195,
    key: "w-30",
    style: {
        width: "30dp"
    }
}, {
    isClass: true,
    priority: 10000.0196,
    key: "w-35",
    style: {
        width: "35dp"
    }
}, {
    isClass: true,
    priority: 10000.0197,
    key: "w-40",
    style: {
        width: "40dp"
    }
}, {
    isClass: true,
    priority: 10000.0198,
    key: "w-44",
    style: {
        width: "44dp"
    }
}, {
    isClass: true,
    priority: 10000.0199,
    key: "w-45",
    style: {
        width: "45dp"
    }
}, {
    isClass: true,
    priority: 10000.02,
    key: "w-50",
    style: {
        width: "50dp"
    }
}, {
    isClass: true,
    priority: 10000.0201,
    key: "w-55",
    style: {
        width: "55dp"
    }
}, {
    isClass: true,
    priority: 10000.0202,
    key: "w-60",
    style: {
        width: "60dp"
    }
}, {
    isClass: true,
    priority: 10000.0203,
    key: "w-65",
    style: {
        width: "65dp"
    }
}, {
    isClass: true,
    priority: 10000.0204,
    key: "w-70",
    style: {
        width: "70dp"
    }
}, {
    isClass: true,
    priority: 10000.0205,
    key: "w-75",
    style: {
        width: "75dp"
    }
}, {
    isClass: true,
    priority: 10000.0206,
    key: "w-80",
    style: {
        width: "80dp"
    }
}, {
    isClass: true,
    priority: 10000.0207,
    key: "w-88",
    style: {
        width: "88dp"
    }
}, {
    isClass: true,
    priority: 10000.0208,
    key: "w-85",
    style: {
        width: "85dp"
    }
}, {
    isClass: true,
    priority: 10000.0209,
    key: "w-90",
    style: {
        width: "90dp"
    }
}, {
    isClass: true,
    priority: 10000.021,
    key: "w-95",
    style: {
        width: "95dp"
    }
}, {
    isClass: true,
    priority: 10000.0211,
    key: "w-100",
    style: {
        width: "100dp"
    }
}, {
    isClass: true,
    priority: 10000.0212,
    key: "w-105",
    style: {
        width: "105dp"
    }
}, {
    isClass: true,
    priority: 10000.0213,
    key: "w-110",
    style: {
        width: "110dp"
    }
}, {
    isClass: true,
    priority: 10000.0214,
    key: "w-115",
    style: {
        width: "115dp"
    }
}, {
    isClass: true,
    priority: 10000.0215,
    key: "w-120",
    style: {
        width: "120dp"
    }
}, {
    isClass: true,
    priority: 10000.0216,
    key: "w-125",
    style: {
        width: "125dp"
    }
}, {
    isClass: true,
    priority: 10000.0217,
    key: "w-130",
    style: {
        width: "130dp"
    }
}, {
    isClass: true,
    priority: 10000.0218,
    key: "w-135",
    style: {
        width: "135dp"
    }
}, {
    isClass: true,
    priority: 10000.0219,
    key: "w-140",
    style: {
        width: "140dp"
    }
}, {
    isClass: true,
    priority: 10000.022,
    key: "w-145",
    style: {
        width: "145dp"
    }
}, {
    isClass: true,
    priority: 10000.0221,
    key: "w-150",
    style: {
        width: "150dp"
    }
}, {
    isClass: true,
    priority: 10000.0222,
    key: "w-155",
    style: {
        width: "155dp"
    }
}, {
    isClass: true,
    priority: 10000.0223,
    key: "w-160",
    style: {
        width: "160dp"
    }
}, {
    isClass: true,
    priority: 10000.0224,
    key: "w-165",
    style: {
        width: "165dp"
    }
}, {
    isClass: true,
    priority: 10000.0225,
    key: "w-170",
    style: {
        width: "170dp"
    }
}, {
    isClass: true,
    priority: 10000.0226,
    key: "w-175",
    style: {
        width: "175dp"
    }
}, {
    isClass: true,
    priority: 10000.0227,
    key: "w-180",
    style: {
        width: "180dp"
    }
}, {
    isClass: true,
    priority: 10000.0228,
    key: "w-185",
    style: {
        width: "185dp"
    }
}, {
    isClass: true,
    priority: 10000.0229,
    key: "w-190",
    style: {
        width: "190dp"
    }
}, {
    isClass: true,
    priority: 10000.023,
    key: "w-195",
    style: {
        width: "195dp"
    }
}, {
    isClass: true,
    priority: 10000.0231,
    key: "w-200",
    style: {
        width: "200dp"
    }
}, {
    isClass: true,
    priority: 10000.0232,
    key: "w-205",
    style: {
        width: "205dp"
    }
}, {
    isClass: true,
    priority: 10000.0233,
    key: "w-210",
    style: {
        width: "210dp"
    }
}, {
    isClass: true,
    priority: 10000.0234,
    key: "w-215",
    style: {
        width: "215dp"
    }
}, {
    isClass: true,
    priority: 10000.0235,
    key: "w-220",
    style: {
        width: "220dp"
    }
}, {
    isClass: true,
    priority: 10000.0236,
    key: "w-225",
    style: {
        width: "225dp"
    }
}, {
    isClass: true,
    priority: 10000.0237,
    key: "w-230",
    style: {
        width: "230dp"
    }
}, {
    isClass: true,
    priority: 10000.0238,
    key: "w-235",
    style: {
        width: "235dp"
    }
}, {
    isClass: true,
    priority: 10000.0239,
    key: "w-240",
    style: {
        width: "240dp"
    }
}, {
    isClass: true,
    priority: 10000.024,
    key: "w-245",
    style: {
        width: "245dp"
    }
}, {
    isClass: true,
    priority: 10000.0241,
    key: "w-250",
    style: {
        width: "250dp"
    }
}, {
    isClass: true,
    priority: 10000.0242,
    key: "w-255",
    style: {
        width: "255dp"
    }
}, {
    isClass: true,
    priority: 10000.0243,
    key: "w-260",
    style: {
        width: "260dp"
    }
}, {
    isClass: true,
    priority: 10000.0244,
    key: "w-265",
    style: {
        width: "265dp"
    }
}, {
    isClass: true,
    priority: 10000.0245,
    key: "w-270",
    style: {
        width: "270dp"
    }
}, {
    isClass: true,
    priority: 10000.0246,
    key: "w-275",
    style: {
        width: "275dp"
    }
}, {
    isClass: true,
    priority: 10000.0247,
    key: "w-280",
    style: {
        width: "280dp"
    }
}, {
    isClass: true,
    priority: 10000.0248,
    key: "w-285",
    style: {
        width: "285dp"
    }
}, {
    isClass: true,
    priority: 10000.0249,
    key: "w-290",
    style: {
        width: "290dp"
    }
}, {
    isClass: true,
    priority: 10000.025,
    key: "w-295",
    style: {
        width: "295dp"
    }
}, {
    isClass: true,
    priority: 10000.0251,
    key: "w-300",
    style: {
        width: "300dp"
    }
}, {
    isClass: true,
    priority: 10000.0252,
    key: "w-305",
    style: {
        width: "305dp"
    }
}, {
    isClass: true,
    priority: 10000.0253,
    key: "w-310",
    style: {
        width: "310dp"
    }
}, {
    isClass: true,
    priority: 10000.0254,
    key: "w-315",
    style: {
        width: "315dp"
    }
}, {
    isClass: true,
    priority: 10000.0255,
    key: "w-320",
    style: {
        width: "320dp"
    }
}, {
    isClass: true,
    priority: 10000.0256,
    key: "w-325",
    style: {
        width: "325dp"
    }
}, {
    isClass: true,
    priority: 10000.0257,
    key: "w-330",
    style: {
        width: "330dp"
    }
}, {
    isClass: true,
    priority: 10000.0258,
    key: "w-335",
    style: {
        width: "335dp"
    }
}, {
    isClass: true,
    priority: 10000.0259,
    key: "w-340",
    style: {
        width: "340dp"
    }
}, {
    isClass: true,
    priority: 10000.026,
    key: "w-345",
    style: {
        width: "345dp"
    }
}, {
    isClass: true,
    priority: 10000.0261,
    key: "w-350",
    style: {
        width: "350dp"
    }
}, {
    isClass: true,
    priority: 10000.0262,
    key: "w-355",
    style: {
        width: "355dp"
    }
}, {
    isClass: true,
    priority: 10000.0263,
    key: "w-360",
    style: {
        width: "360dp"
    }
}, {
    isClass: true,
    priority: 10000.0264,
    key: "w-365",
    style: {
        width: "365dp"
    }
}, {
    isClass: true,
    priority: 10000.0265,
    key: "w-370",
    style: {
        width: "370dp"
    }
}, {
    isClass: true,
    priority: 10000.0266,
    key: "w-375",
    style: {
        width: "375dp"
    }
}, {
    isClass: true,
    priority: 10000.0267,
    key: "w-380",
    style: {
        width: "380dp"
    }
}, {
    isClass: true,
    priority: 10000.0268,
    key: "w-385",
    style: {
        width: "385dp"
    }
}, {
    isClass: true,
    priority: 10000.0269,
    key: "w-390",
    style: {
        width: "390dp"
    }
}, {
    isClass: true,
    priority: 10000.027,
    key: "w-395",
    style: {
        width: "395dp"
    }
}, {
    isClass: true,
    priority: 10000.0271,
    key: "w-400",
    style: {
        width: "400dp"
    }
}, {
    isClass: true,
    priority: 10000.0272,
    key: "w-size",
    style: {
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0273,
    key: "w-fill",
    style: {
        width: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0274,
    key: "h-1%",
    style: {
        height: "1%"
    }
}, {
    isClass: true,
    priority: 10000.0275,
    key: "h-5%",
    style: {
        height: "5%"
    }
}, {
    isClass: true,
    priority: 10000.0276,
    key: "h-10%",
    style: {
        height: "10%"
    }
}, {
    isClass: true,
    priority: 10000.0277,
    key: "h-15%",
    style: {
        height: "15%"
    }
}, {
    isClass: true,
    priority: 10000.0278,
    key: "h-20%",
    style: {
        height: "20%"
    }
}, {
    isClass: true,
    priority: 10000.0279,
    key: "h-25%",
    style: {
        height: "25%"
    }
}, {
    isClass: true,
    priority: 10000.028,
    key: "h-30%",
    style: {
        height: "30%"
    }
}, {
    isClass: true,
    priority: 10000.0281,
    key: "h-35%",
    style: {
        height: "35%"
    }
}, {
    isClass: true,
    priority: 10000.0282,
    key: "h-40%",
    style: {
        height: "40%"
    }
}, {
    isClass: true,
    priority: 10000.0283,
    key: "h-45%",
    style: {
        height: "45%"
    }
}, {
    isClass: true,
    priority: 10000.0284,
    key: "h-50%",
    style: {
        height: "50%"
    }
}, {
    isClass: true,
    priority: 10000.0285,
    key: "h-55%",
    style: {
        height: "55%"
    }
}, {
    isClass: true,
    priority: 10000.0286,
    key: "h-60%",
    style: {
        height: "60%"
    }
}, {
    isClass: true,
    priority: 10000.0287,
    key: "h-65%",
    style: {
        height: "65%"
    }
}, {
    isClass: true,
    priority: 10000.0288,
    key: "h-70%",
    style: {
        height: "70%"
    }
}, {
    isClass: true,
    priority: 10000.0289,
    key: "h-75%",
    style: {
        height: "75%"
    }
}, {
    isClass: true,
    priority: 10000.029,
    key: "h-80%",
    style: {
        height: "80%"
    }
}, {
    isClass: true,
    priority: 10000.0291,
    key: "h-85%",
    style: {
        height: "85%"
    }
}, {
    isClass: true,
    priority: 10000.0292,
    key: "h-90%",
    style: {
        height: "90%"
    }
}, {
    isClass: true,
    priority: 10000.0293,
    key: "h-95%",
    style: {
        height: "95%"
    }
}, {
    isClass: true,
    priority: 10000.0294,
    key: "h-100%",
    style: {
        height: "100%"
    }
}, {
    isClass: true,
    priority: 10000.0295,
    key: "h-0",
    style: {
        height: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0296,
    key: "h-1",
    style: {
        height: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0297,
    key: "h-2",
    style: {
        height: "2dp"
    }
}, {
    isClass: true,
    priority: 10000.0298,
    key: "h-3",
    style: {
        height: "3dp"
    }
}, {
    isClass: true,
    priority: 10000.0299,
    key: "h-4",
    style: {
        height: "4dp"
    }
}, {
    isClass: true,
    priority: 10000.03,
    key: "h-5",
    style: {
        height: "5dp"
    }
}, {
    isClass: true,
    priority: 10000.0301,
    key: "h-6",
    style: {
        height: "6dp"
    }
}, {
    isClass: true,
    priority: 10000.0302,
    key: "h-7",
    style: {
        height: "7dp"
    }
}, {
    isClass: true,
    priority: 10000.0303,
    key: "h-8",
    style: {
        height: "8dp"
    }
}, {
    isClass: true,
    priority: 10000.0304,
    key: "h-9",
    style: {
        height: "9dp"
    }
}, {
    isClass: true,
    priority: 10000.0305,
    key: "h-10",
    style: {
        height: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0306,
    key: "h-15",
    style: {
        height: "15dp"
    }
}, {
    isClass: true,
    priority: 10000.0307,
    key: "h-20",
    style: {
        height: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.0308,
    key: "h-25",
    style: {
        height: "25dp"
    }
}, {
    isClass: true,
    priority: 10000.0309,
    key: "h-30",
    style: {
        height: "30dp"
    }
}, {
    isClass: true,
    priority: 10000.031,
    key: "h-35",
    style: {
        height: "35dp"
    }
}, {
    isClass: true,
    priority: 10000.0311,
    key: "h-40",
    style: {
        height: "40dp"
    }
}, {
    isClass: true,
    priority: 10000.0312,
    key: "h-44",
    style: {
        height: "44dp"
    }
}, {
    isClass: true,
    priority: 10000.0313,
    key: "h-45",
    style: {
        height: "45dp"
    }
}, {
    isClass: true,
    priority: 10000.0314,
    key: "h-50",
    style: {
        height: "50dp"
    }
}, {
    isClass: true,
    priority: 10000.0315,
    key: "h-55",
    style: {
        height: "55dp"
    }
}, {
    isClass: true,
    priority: 10000.0316,
    key: "h-60",
    style: {
        height: "60dp"
    }
}, {
    isClass: true,
    priority: 10000.0317,
    key: "h-65",
    style: {
        height: "65dp"
    }
}, {
    isClass: true,
    priority: 10000.0318,
    key: "h-70",
    style: {
        height: "70dp"
    }
}, {
    isClass: true,
    priority: 10000.0319,
    key: "h-75",
    style: {
        height: "75dp"
    }
}, {
    isClass: true,
    priority: 10000.032,
    key: "h-80",
    style: {
        height: "80dp"
    }
}, {
    isClass: true,
    priority: 10000.0321,
    key: "h-88",
    style: {
        height: "88dp"
    }
}, {
    isClass: true,
    priority: 10000.0322,
    key: "h-85",
    style: {
        height: "85dp"
    }
}, {
    isClass: true,
    priority: 10000.0323,
    key: "h-90",
    style: {
        height: "90dp"
    }
}, {
    isClass: true,
    priority: 10000.0324,
    key: "h-95",
    style: {
        height: "95dp"
    }
}, {
    isClass: true,
    priority: 10000.0325,
    key: "h-100",
    style: {
        height: "100dp"
    }
}, {
    isClass: true,
    priority: 10000.0326,
    key: "h-105",
    style: {
        height: "105dp"
    }
}, {
    isClass: true,
    priority: 10000.0327,
    key: "h-110",
    style: {
        height: "110dp"
    }
}, {
    isClass: true,
    priority: 10000.0328,
    key: "h-115",
    style: {
        height: "115dp"
    }
}, {
    isClass: true,
    priority: 10000.0329,
    key: "h-120",
    style: {
        height: "120dp"
    }
}, {
    isClass: true,
    priority: 10000.033,
    key: "h-125",
    style: {
        height: "125dp"
    }
}, {
    isClass: true,
    priority: 10000.0331,
    key: "h-130",
    style: {
        height: "130dp"
    }
}, {
    isClass: true,
    priority: 10000.0332,
    key: "h-135",
    style: {
        height: "135dp"
    }
}, {
    isClass: true,
    priority: 10000.0333,
    key: "h-140",
    style: {
        height: "140dp"
    }
}, {
    isClass: true,
    priority: 10000.0334,
    key: "h-145",
    style: {
        height: "145dp"
    }
}, {
    isClass: true,
    priority: 10000.0335,
    key: "h-150",
    style: {
        height: "150dp"
    }
}, {
    isClass: true,
    priority: 10000.0336,
    key: "h-155",
    style: {
        height: "155dp"
    }
}, {
    isClass: true,
    priority: 10000.0337,
    key: "h-160",
    style: {
        height: "160dp"
    }
}, {
    isClass: true,
    priority: 10000.0338,
    key: "h-165",
    style: {
        height: "165dp"
    }
}, {
    isClass: true,
    priority: 10000.0339,
    key: "h-170",
    style: {
        height: "170dp"
    }
}, {
    isClass: true,
    priority: 10000.034,
    key: "h-175",
    style: {
        height: "175dp"
    }
}, {
    isClass: true,
    priority: 10000.0341,
    key: "h-180",
    style: {
        height: "180dp"
    }
}, {
    isClass: true,
    priority: 10000.0342,
    key: "h-185",
    style: {
        height: "185dp"
    }
}, {
    isClass: true,
    priority: 10000.0343,
    key: "h-190",
    style: {
        height: "190dp"
    }
}, {
    isClass: true,
    priority: 10000.0344,
    key: "h-195",
    style: {
        height: "195dp"
    }
}, {
    isClass: true,
    priority: 10000.0345,
    key: "h-200",
    style: {
        height: "200dp"
    }
}, {
    isClass: true,
    priority: 10000.0346,
    key: "h-205",
    style: {
        height: "205dp"
    }
}, {
    isClass: true,
    priority: 10000.0347,
    key: "h-210",
    style: {
        height: "210dp"
    }
}, {
    isClass: true,
    priority: 10000.0348,
    key: "h-215",
    style: {
        height: "215dp"
    }
}, {
    isClass: true,
    priority: 10000.0349,
    key: "h-220",
    style: {
        height: "220dp"
    }
}, {
    isClass: true,
    priority: 10000.035,
    key: "h-225",
    style: {
        height: "225dp"
    }
}, {
    isClass: true,
    priority: 10000.0351,
    key: "h-230",
    style: {
        height: "230dp"
    }
}, {
    isClass: true,
    priority: 10000.0352,
    key: "h-235",
    style: {
        height: "235dp"
    }
}, {
    isClass: true,
    priority: 10000.0353,
    key: "h-240",
    style: {
        height: "240dp"
    }
}, {
    isClass: true,
    priority: 10000.0354,
    key: "h-245",
    style: {
        height: "245dp"
    }
}, {
    isClass: true,
    priority: 10000.0355,
    key: "h-250",
    style: {
        height: "250dp"
    }
}, {
    isClass: true,
    priority: 10000.0356,
    key: "h-255",
    style: {
        height: "255dp"
    }
}, {
    isClass: true,
    priority: 10000.0357,
    key: "h-260",
    style: {
        height: "260dp"
    }
}, {
    isClass: true,
    priority: 10000.0358,
    key: "h-265",
    style: {
        height: "265dp"
    }
}, {
    isClass: true,
    priority: 10000.0359,
    key: "h-270",
    style: {
        height: "270dp"
    }
}, {
    isClass: true,
    priority: 10000.036,
    key: "h-275",
    style: {
        height: "275dp"
    }
}, {
    isClass: true,
    priority: 10000.0361,
    key: "h-280",
    style: {
        height: "280dp"
    }
}, {
    isClass: true,
    priority: 10000.0362,
    key: "h-285",
    style: {
        height: "285dp"
    }
}, {
    isClass: true,
    priority: 10000.0363,
    key: "h-290",
    style: {
        height: "290dp"
    }
}, {
    isClass: true,
    priority: 10000.0364,
    key: "h-295",
    style: {
        height: "295dp"
    }
}, {
    isClass: true,
    priority: 10000.0365,
    key: "h-300",
    style: {
        height: "300dp"
    }
}, {
    isClass: true,
    priority: 10000.0366,
    key: "h-305",
    style: {
        height: "305dp"
    }
}, {
    isClass: true,
    priority: 10000.0367,
    key: "h-310",
    style: {
        height: "310dp"
    }
}, {
    isClass: true,
    priority: 10000.0368,
    key: "h-315",
    style: {
        height: "315dp"
    }
}, {
    isClass: true,
    priority: 10000.0369,
    key: "h-320",
    style: {
        height: "320dp"
    }
}, {
    isClass: true,
    priority: 10000.037,
    key: "h-325",
    style: {
        height: "325dp"
    }
}, {
    isClass: true,
    priority: 10000.0371,
    key: "h-330",
    style: {
        height: "330dp"
    }
}, {
    isClass: true,
    priority: 10000.0372,
    key: "h-335",
    style: {
        height: "335dp"
    }
}, {
    isClass: true,
    priority: 10000.0373,
    key: "h-340",
    style: {
        height: "340dp"
    }
}, {
    isClass: true,
    priority: 10000.0374,
    key: "h-345",
    style: {
        height: "345dp"
    }
}, {
    isClass: true,
    priority: 10000.0375,
    key: "h-350",
    style: {
        height: "350dp"
    }
}, {
    isClass: true,
    priority: 10000.0376,
    key: "h-355",
    style: {
        height: "355dp"
    }
}, {
    isClass: true,
    priority: 10000.0377,
    key: "h-360",
    style: {
        height: "360dp"
    }
}, {
    isClass: true,
    priority: 10000.0378,
    key: "h-365",
    style: {
        height: "365dp"
    }
}, {
    isClass: true,
    priority: 10000.0379,
    key: "h-370",
    style: {
        height: "370dp"
    }
}, {
    isClass: true,
    priority: 10000.038,
    key: "h-375",
    style: {
        height: "375dp"
    }
}, {
    isClass: true,
    priority: 10000.0381,
    key: "h-380",
    style: {
        height: "380dp"
    }
}, {
    isClass: true,
    priority: 10000.0382,
    key: "h-385",
    style: {
        height: "385dp"
    }
}, {
    isClass: true,
    priority: 10000.0383,
    key: "h-390",
    style: {
        height: "390dp"
    }
}, {
    isClass: true,
    priority: 10000.0384,
    key: "h-395",
    style: {
        height: "395dp"
    }
}, {
    isClass: true,
    priority: 10000.0385,
    key: "h-400",
    style: {
        height: "400dp"
    }
}, {
    isClass: true,
    priority: 10000.0386,
    key: "h-size",
    style: {
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0387,
    key: "h-fill",
    style: {
        height: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0388,
    key: "t-1%",
    style: {
        top: "1%"
    }
}, {
    isClass: true,
    priority: 10000.0389,
    key: "t-2%",
    style: {
        top: "2%"
    }
}, {
    isClass: true,
    priority: 10000.039,
    key: "t-3%",
    style: {
        top: "3%"
    }
}, {
    isClass: true,
    priority: 10000.0391,
    key: "t-4%",
    style: {
        top: "4%"
    }
}, {
    isClass: true,
    priority: 10000.0392,
    key: "t-5%",
    style: {
        top: "5%"
    }
}, {
    isClass: true,
    priority: 10000.0393,
    key: "t-10%",
    style: {
        top: "10%"
    }
}, {
    isClass: true,
    priority: 10000.0394,
    key: "t-15%",
    style: {
        top: "15%"
    }
}, {
    isClass: true,
    priority: 10000.0395,
    key: "t-20%",
    style: {
        top: "20%"
    }
}, {
    isClass: true,
    priority: 10000.0396,
    key: "t-25%",
    style: {
        top: "25%"
    }
}, {
    isClass: true,
    priority: 10000.0397,
    key: "t-30%",
    style: {
        top: "30%"
    }
}, {
    isClass: true,
    priority: 10000.0398,
    key: "t-35%",
    style: {
        top: "35%"
    }
}, {
    isClass: true,
    priority: 10000.0399,
    key: "t-40%",
    style: {
        top: "40%"
    }
}, {
    isClass: true,
    priority: 10000.04,
    key: "t-45%",
    style: {
        top: "45%"
    }
}, {
    isClass: true,
    priority: 10000.0401,
    key: "t-50%",
    style: {
        top: "50%"
    }
}, {
    isClass: true,
    priority: 10000.0402,
    key: "t-55%",
    style: {
        top: "55%"
    }
}, {
    isClass: true,
    priority: 10000.0403,
    key: "t-60%",
    style: {
        top: "60%"
    }
}, {
    isClass: true,
    priority: 10000.0404,
    key: "t-65%",
    style: {
        top: "65%"
    }
}, {
    isClass: true,
    priority: 10000.0405,
    key: "t-70%",
    style: {
        top: "70%"
    }
}, {
    isClass: true,
    priority: 10000.0406,
    key: "t-75%",
    style: {
        top: "75%"
    }
}, {
    isClass: true,
    priority: 10000.0407,
    key: "t-80%",
    style: {
        top: "80%"
    }
}, {
    isClass: true,
    priority: 10000.0408,
    key: "t-85%",
    style: {
        top: "85%"
    }
}, {
    isClass: true,
    priority: 10000.0409,
    key: "t-90%",
    style: {
        top: "90%"
    }
}, {
    isClass: true,
    priority: 10000.041,
    key: "t-95%",
    style: {
        top: "95%"
    }
}, {
    isClass: true,
    priority: 10000.0411,
    key: "t-100%",
    style: {
        top: "100%"
    }
}, {
    isClass: true,
    priority: 10000.0412,
    key: "t-0",
    style: {
        top: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0413,
    key: "t-1",
    style: {
        top: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0414,
    key: "t-2",
    style: {
        top: "2dp"
    }
}, {
    isClass: true,
    priority: 10000.0415,
    key: "t-3",
    style: {
        top: "3dp"
    }
}, {
    isClass: true,
    priority: 10000.0416,
    key: "t-4",
    style: {
        top: "4dp"
    }
}, {
    isClass: true,
    priority: 10000.0417,
    key: "t-5",
    style: {
        top: "5dp"
    }
}, {
    isClass: true,
    priority: 10000.0418,
    key: "t-6",
    style: {
        top: "6dp"
    }
}, {
    isClass: true,
    priority: 10000.0419,
    key: "t-7",
    style: {
        top: "7dp"
    }
}, {
    isClass: true,
    priority: 10000.042,
    key: "t-8",
    style: {
        top: "8dp"
    }
}, {
    isClass: true,
    priority: 10000.0421,
    key: "t-9",
    style: {
        top: "9dp"
    }
}, {
    isClass: true,
    priority: 10000.0422,
    key: "t-10",
    style: {
        top: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0423,
    key: "t-15",
    style: {
        top: "15dp"
    }
}, {
    isClass: true,
    priority: 10000.0424,
    key: "t-20",
    style: {
        top: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.0425,
    key: "t-25",
    style: {
        top: "25dp"
    }
}, {
    isClass: true,
    priority: 10000.0426,
    key: "t-30",
    style: {
        top: "30dp"
    }
}, {
    isClass: true,
    priority: 10000.0427,
    key: "t-35",
    style: {
        top: "35dp"
    }
}, {
    isClass: true,
    priority: 10000.0428,
    key: "t-40",
    style: {
        top: "40dp"
    }
}, {
    isClass: true,
    priority: 10000.0429,
    key: "t-44",
    style: {
        top: "44dp"
    }
}, {
    isClass: true,
    priority: 10000.043,
    key: "t-45",
    style: {
        top: "45dp"
    }
}, {
    isClass: true,
    priority: 10000.0431,
    key: "t-50",
    style: {
        top: "50dp"
    }
}, {
    isClass: true,
    priority: 10000.0432,
    key: "t-55",
    style: {
        top: "55dp"
    }
}, {
    isClass: true,
    priority: 10000.0433,
    key: "t-60",
    style: {
        top: "60dp"
    }
}, {
    isClass: true,
    priority: 10000.0434,
    key: "t-65",
    style: {
        top: "65dp"
    }
}, {
    isClass: true,
    priority: 10000.0435,
    key: "t-70",
    style: {
        top: "70dp"
    }
}, {
    isClass: true,
    priority: 10000.0436,
    key: "t-75",
    style: {
        top: "75dp"
    }
}, {
    isClass: true,
    priority: 10000.0437,
    key: "t-80",
    style: {
        top: "80dp"
    }
}, {
    isClass: true,
    priority: 10000.0438,
    key: "t-88",
    style: {
        top: "88dp"
    }
}, {
    isClass: true,
    priority: 10000.0439,
    key: "t-85",
    style: {
        top: "85dp"
    }
}, {
    isClass: true,
    priority: 10000.044,
    key: "t-90",
    style: {
        top: "90dp"
    }
}, {
    isClass: true,
    priority: 10000.0441,
    key: "t-95",
    style: {
        top: "95dp"
    }
}, {
    isClass: true,
    priority: 10000.0442,
    key: "t-100",
    style: {
        top: "100dp"
    }
}, {
    isClass: true,
    priority: 10000.0443,
    key: "t-105",
    style: {
        top: "105dp"
    }
}, {
    isClass: true,
    priority: 10000.0444,
    key: "t-110",
    style: {
        top: "110dp"
    }
}, {
    isClass: true,
    priority: 10000.0445,
    key: "t-115",
    style: {
        top: "115dp"
    }
}, {
    isClass: true,
    priority: 10000.0446,
    key: "t-120",
    style: {
        top: "120dp"
    }
}, {
    isClass: true,
    priority: 10000.0447,
    key: "t-125",
    style: {
        top: "125dp"
    }
}, {
    isClass: true,
    priority: 10000.0448,
    key: "t-130",
    style: {
        top: "130dp"
    }
}, {
    isClass: true,
    priority: 10000.0449,
    key: "t-135",
    style: {
        top: "135dp"
    }
}, {
    isClass: true,
    priority: 10000.045,
    key: "t-140",
    style: {
        top: "140dp"
    }
}, {
    isClass: true,
    priority: 10000.0451,
    key: "t-145",
    style: {
        top: "145dp"
    }
}, {
    isClass: true,
    priority: 10000.0452,
    key: "t-150",
    style: {
        top: "150dp"
    }
}, {
    isClass: true,
    priority: 10000.0453,
    key: "t-155",
    style: {
        top: "155dp"
    }
}, {
    isClass: true,
    priority: 10000.0454,
    key: "t-160",
    style: {
        top: "160dp"
    }
}, {
    isClass: true,
    priority: 10000.0455,
    key: "t-165",
    style: {
        top: "165dp"
    }
}, {
    isClass: true,
    priority: 10000.0456,
    key: "t-170",
    style: {
        top: "170dp"
    }
}, {
    isClass: true,
    priority: 10000.0457,
    key: "t-175",
    style: {
        top: "175dp"
    }
}, {
    isClass: true,
    priority: 10000.0458,
    key: "t-180",
    style: {
        top: "180dp"
    }
}, {
    isClass: true,
    priority: 10000.0459,
    key: "t-185",
    style: {
        top: "185dp"
    }
}, {
    isClass: true,
    priority: 10000.046,
    key: "t-190",
    style: {
        top: "190dp"
    }
}, {
    isClass: true,
    priority: 10000.0461,
    key: "t-195",
    style: {
        top: "195dp"
    }
}, {
    isClass: true,
    priority: 10000.0462,
    key: "t-200",
    style: {
        top: "200dp"
    }
}, {
    isClass: true,
    priority: 10000.0463,
    key: "b-1%",
    style: {
        bottom: "1%"
    }
}, {
    isClass: true,
    priority: 10000.0464,
    key: "b-5%",
    style: {
        bottom: "5%"
    }
}, {
    isClass: true,
    priority: 10000.0465,
    key: "b-10%",
    style: {
        bottom: "10%"
    }
}, {
    isClass: true,
    priority: 10000.0466,
    key: "b-15%",
    style: {
        bottom: "15%"
    }
}, {
    isClass: true,
    priority: 10000.0467,
    key: "b-20%",
    style: {
        bottom: "20%"
    }
}, {
    isClass: true,
    priority: 10000.0468,
    key: "b-25%",
    style: {
        bottom: "25%"
    }
}, {
    isClass: true,
    priority: 10000.0469,
    key: "b-30%",
    style: {
        bottom: "30%"
    }
}, {
    isClass: true,
    priority: 10000.047,
    key: "b-35%",
    style: {
        bottom: "35%"
    }
}, {
    isClass: true,
    priority: 10000.0471,
    key: "b-40%",
    style: {
        bottom: "40%"
    }
}, {
    isClass: true,
    priority: 10000.0472,
    key: "b-45%",
    style: {
        bottom: "45%"
    }
}, {
    isClass: true,
    priority: 10000.0473,
    key: "b-50%",
    style: {
        bottom: "50%"
    }
}, {
    isClass: true,
    priority: 10000.0474,
    key: "b-55%",
    style: {
        bottom: "55%"
    }
}, {
    isClass: true,
    priority: 10000.0475,
    key: "b-60%",
    style: {
        bottom: "60%"
    }
}, {
    isClass: true,
    priority: 10000.0476,
    key: "b-65%",
    style: {
        bottom: "65%"
    }
}, {
    isClass: true,
    priority: 10000.0477,
    key: "b-70%",
    style: {
        bottom: "70%"
    }
}, {
    isClass: true,
    priority: 10000.0478,
    key: "b-75%",
    style: {
        bottom: "75%"
    }
}, {
    isClass: true,
    priority: 10000.0479,
    key: "b-80%",
    style: {
        bottom: "80%"
    }
}, {
    isClass: true,
    priority: 10000.048,
    key: "b-85%",
    style: {
        bottom: "85%"
    }
}, {
    isClass: true,
    priority: 10000.0481,
    key: "b-90%",
    style: {
        bottom: "90%"
    }
}, {
    isClass: true,
    priority: 10000.0482,
    key: "b-95%",
    style: {
        bottom: "95%"
    }
}, {
    isClass: true,
    priority: 10000.0483,
    key: "b-100%",
    style: {
        bottom: "100%"
    }
}, {
    isClass: true,
    priority: 10000.0484,
    key: "b-0",
    style: {
        bottom: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0485,
    key: "b-1",
    style: {
        bottom: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0486,
    key: "b-2",
    style: {
        bottom: "2dp"
    }
}, {
    isClass: true,
    priority: 10000.0487,
    key: "b-3",
    style: {
        bottom: "3dp"
    }
}, {
    isClass: true,
    priority: 10000.0488,
    key: "b-4",
    style: {
        bottom: "4dp"
    }
}, {
    isClass: true,
    priority: 10000.0489,
    key: "b-5",
    style: {
        bottom: "5dp"
    }
}, {
    isClass: true,
    priority: 10000.049,
    key: "b-6",
    style: {
        bottom: "6dp"
    }
}, {
    isClass: true,
    priority: 10000.0491,
    key: "b-7",
    style: {
        bottom: "7dp"
    }
}, {
    isClass: true,
    priority: 10000.0492,
    key: "b-8",
    style: {
        bottom: "8dp"
    }
}, {
    isClass: true,
    priority: 10000.0493,
    key: "b-9",
    style: {
        bottom: "9dp"
    }
}, {
    isClass: true,
    priority: 10000.0494,
    key: "b-10",
    style: {
        bottom: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0495,
    key: "b-15",
    style: {
        bottom: "15dp"
    }
}, {
    isClass: true,
    priority: 10000.0496,
    key: "b-20",
    style: {
        bottom: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.0497,
    key: "b-25",
    style: {
        bottom: "25dp"
    }
}, {
    isClass: true,
    priority: 10000.0498,
    key: "b-30",
    style: {
        bottom: "30dp"
    }
}, {
    isClass: true,
    priority: 10000.0499,
    key: "b-35",
    style: {
        bottom: "35dp"
    }
}, {
    isClass: true,
    priority: 10000.05,
    key: "b-40",
    style: {
        bottom: "40dp"
    }
}, {
    isClass: true,
    priority: 10000.0501,
    key: "b-44",
    style: {
        bottom: "44dp"
    }
}, {
    isClass: true,
    priority: 10000.0502,
    key: "b-45",
    style: {
        bottom: "45dp"
    }
}, {
    isClass: true,
    priority: 10000.0503,
    key: "b-50",
    style: {
        bottom: "50dp"
    }
}, {
    isClass: true,
    priority: 10000.0504,
    key: "b-55",
    style: {
        bottom: "55dp"
    }
}, {
    isClass: true,
    priority: 10000.0505,
    key: "b-60",
    style: {
        bottom: "60dp"
    }
}, {
    isClass: true,
    priority: 10000.0506,
    key: "b-65",
    style: {
        bottom: "65dp"
    }
}, {
    isClass: true,
    priority: 10000.0507,
    key: "b-70",
    style: {
        bottom: "70dp"
    }
}, {
    isClass: true,
    priority: 10000.0508,
    key: "b-75",
    style: {
        bottom: "75dp"
    }
}, {
    isClass: true,
    priority: 10000.0509,
    key: "b-80",
    style: {
        bottom: "80dp"
    }
}, {
    isClass: true,
    priority: 10000.051,
    key: "b-88",
    style: {
        bottom: "88dp"
    }
}, {
    isClass: true,
    priority: 10000.0511,
    key: "b-85",
    style: {
        bottom: "85dp"
    }
}, {
    isClass: true,
    priority: 10000.0512,
    key: "b-90",
    style: {
        bottom: "90dp"
    }
}, {
    isClass: true,
    priority: 10000.0513,
    key: "b-95",
    style: {
        bottom: "95dp"
    }
}, {
    isClass: true,
    priority: 10000.0514,
    key: "b-100",
    style: {
        bottom: "100dp"
    }
}, {
    isClass: true,
    priority: 10000.0515,
    key: "b-105",
    style: {
        bottom: "105dp"
    }
}, {
    isClass: true,
    priority: 10000.0516,
    key: "b-110",
    style: {
        bottom: "110dp"
    }
}, {
    isClass: true,
    priority: 10000.0517,
    key: "b-115",
    style: {
        bottom: "115dp"
    }
}, {
    isClass: true,
    priority: 10000.0518,
    key: "b-120",
    style: {
        bottom: "120dp"
    }
}, {
    isClass: true,
    priority: 10000.0519,
    key: "b-125",
    style: {
        bottom: "125dp"
    }
}, {
    isClass: true,
    priority: 10000.052,
    key: "b-130",
    style: {
        bottom: "130dp"
    }
}, {
    isClass: true,
    priority: 10000.0521,
    key: "b-135",
    style: {
        bottom: "135dp"
    }
}, {
    isClass: true,
    priority: 10000.0522,
    key: "b-140",
    style: {
        bottom: "140dp"
    }
}, {
    isClass: true,
    priority: 10000.0523,
    key: "b-145",
    style: {
        bottom: "145dp"
    }
}, {
    isClass: true,
    priority: 10000.0524,
    key: "b-150",
    style: {
        bottom: "150dp"
    }
}, {
    isClass: true,
    priority: 10000.0525,
    key: "b-155",
    style: {
        bottom: "155dp"
    }
}, {
    isClass: true,
    priority: 10000.0526,
    key: "b-160",
    style: {
        bottom: "160dp"
    }
}, {
    isClass: true,
    priority: 10000.0527,
    key: "b-165",
    style: {
        bottom: "165dp"
    }
}, {
    isClass: true,
    priority: 10000.0528,
    key: "b-170",
    style: {
        bottom: "170dp"
    }
}, {
    isClass: true,
    priority: 10000.0529,
    key: "b-175",
    style: {
        bottom: "175dp"
    }
}, {
    isClass: true,
    priority: 10000.053,
    key: "b-180",
    style: {
        bottom: "180dp"
    }
}, {
    isClass: true,
    priority: 10000.0531,
    key: "b-185",
    style: {
        bottom: "185dp"
    }
}, {
    isClass: true,
    priority: 10000.0532,
    key: "b-190",
    style: {
        bottom: "190dp"
    }
}, {
    isClass: true,
    priority: 10000.0533,
    key: "b-195",
    style: {
        bottom: "195dp"
    }
}, {
    isClass: true,
    priority: 10000.0534,
    key: "b-200",
    style: {
        bottom: "200dp"
    }
}, {
    isClass: true,
    priority: 10000.0535,
    key: "l-1%",
    style: {
        left: "1%"
    }
}, {
    isClass: true,
    priority: 10000.0536,
    key: "l-5%",
    style: {
        left: "5%"
    }
}, {
    isClass: true,
    priority: 10000.0537,
    key: "l-10%",
    style: {
        left: "10%"
    }
}, {
    isClass: true,
    priority: 10000.0538,
    key: "l-15%",
    style: {
        left: "15%"
    }
}, {
    isClass: true,
    priority: 10000.0539,
    key: "l-20%",
    style: {
        left: "20%"
    }
}, {
    isClass: true,
    priority: 10000.054,
    key: "l-25%",
    style: {
        left: "25%"
    }
}, {
    isClass: true,
    priority: 10000.0541,
    key: "l-30%",
    style: {
        left: "30%"
    }
}, {
    isClass: true,
    priority: 10000.0542,
    key: "l-35%",
    style: {
        left: "35%"
    }
}, {
    isClass: true,
    priority: 10000.0543,
    key: "l-40%",
    style: {
        left: "40%"
    }
}, {
    isClass: true,
    priority: 10000.0544,
    key: "l-45%",
    style: {
        left: "45%"
    }
}, {
    isClass: true,
    priority: 10000.0545,
    key: "l-50%",
    style: {
        left: "50%"
    }
}, {
    isClass: true,
    priority: 10000.0546,
    key: "l-55%",
    style: {
        left: "55%"
    }
}, {
    isClass: true,
    priority: 10000.0547,
    key: "l-60%",
    style: {
        left: "60%"
    }
}, {
    isClass: true,
    priority: 10000.0548,
    key: "l-65%",
    style: {
        left: "65%"
    }
}, {
    isClass: true,
    priority: 10000.0549,
    key: "l-70%",
    style: {
        left: "70%"
    }
}, {
    isClass: true,
    priority: 10000.055,
    key: "l-75%",
    style: {
        left: "75%"
    }
}, {
    isClass: true,
    priority: 10000.0551,
    key: "l-80%",
    style: {
        left: "80%"
    }
}, {
    isClass: true,
    priority: 10000.0552,
    key: "l-85%",
    style: {
        left: "85%"
    }
}, {
    isClass: true,
    priority: 10000.0553,
    key: "l-90%",
    style: {
        left: "90%"
    }
}, {
    isClass: true,
    priority: 10000.0554,
    key: "l-95%",
    style: {
        left: "95%"
    }
}, {
    isClass: true,
    priority: 10000.0555,
    key: "l-100%",
    style: {
        left: "100%"
    }
}, {
    isClass: true,
    priority: 10000.0556,
    key: "l-0",
    style: {
        left: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0557,
    key: "l-1",
    style: {
        left: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0558,
    key: "l-2",
    style: {
        left: "2dp"
    }
}, {
    isClass: true,
    priority: 10000.0559,
    key: "l-3",
    style: {
        left: "3dp"
    }
}, {
    isClass: true,
    priority: 10000.056,
    key: "l-4",
    style: {
        left: "4dp"
    }
}, {
    isClass: true,
    priority: 10000.0561,
    key: "l-5",
    style: {
        left: "5dp"
    }
}, {
    isClass: true,
    priority: 10000.0562,
    key: "l-6",
    style: {
        left: "6dp"
    }
}, {
    isClass: true,
    priority: 10000.0563,
    key: "l-7",
    style: {
        left: "7dp"
    }
}, {
    isClass: true,
    priority: 10000.0564,
    key: "l-8",
    style: {
        left: "8dp"
    }
}, {
    isClass: true,
    priority: 10000.0565,
    key: "l-9",
    style: {
        left: "9dp"
    }
}, {
    isClass: true,
    priority: 10000.0566,
    key: "l-10",
    style: {
        left: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0567,
    key: "l-15",
    style: {
        left: "15dp"
    }
}, {
    isClass: true,
    priority: 10000.0568,
    key: "l-20",
    style: {
        left: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.0569,
    key: "l-25",
    style: {
        left: "25dp"
    }
}, {
    isClass: true,
    priority: 10000.057,
    key: "l-30",
    style: {
        left: "30dp"
    }
}, {
    isClass: true,
    priority: 10000.0571,
    key: "l-35",
    style: {
        left: "35dp"
    }
}, {
    isClass: true,
    priority: 10000.0572,
    key: "l-40",
    style: {
        left: "40dp"
    }
}, {
    isClass: true,
    priority: 10000.0573,
    key: "l-44",
    style: {
        left: "44dp"
    }
}, {
    isClass: true,
    priority: 10000.0574,
    key: "l-45",
    style: {
        left: "45dp"
    }
}, {
    isClass: true,
    priority: 10000.0575,
    key: "l-50",
    style: {
        left: "50dp"
    }
}, {
    isClass: true,
    priority: 10000.0576,
    key: "l-55",
    style: {
        left: "55dp"
    }
}, {
    isClass: true,
    priority: 10000.0577,
    key: "l-60",
    style: {
        left: "60dp"
    }
}, {
    isClass: true,
    priority: 10000.0578,
    key: "l-65",
    style: {
        left: "65dp"
    }
}, {
    isClass: true,
    priority: 10000.0579,
    key: "l-70",
    style: {
        left: "70dp"
    }
}, {
    isClass: true,
    priority: 10000.058,
    key: "l-75",
    style: {
        left: "75dp"
    }
}, {
    isClass: true,
    priority: 10000.0581,
    key: "l-80",
    style: {
        left: "80dp"
    }
}, {
    isClass: true,
    priority: 10000.0582,
    key: "l-88",
    style: {
        left: "88dp"
    }
}, {
    isClass: true,
    priority: 10000.0583,
    key: "l-85",
    style: {
        left: "85dp"
    }
}, {
    isClass: true,
    priority: 10000.0584,
    key: "l-90",
    style: {
        left: "90dp"
    }
}, {
    isClass: true,
    priority: 10000.0585,
    key: "l-95",
    style: {
        left: "95dp"
    }
}, {
    isClass: true,
    priority: 10000.0586,
    key: "l-100",
    style: {
        left: "100dp"
    }
}, {
    isClass: true,
    priority: 10000.0587,
    key: "r-1%",
    style: {
        right: "1%"
    }
}, {
    isClass: true,
    priority: 10000.0588,
    key: "r-5%",
    style: {
        right: "5%"
    }
}, {
    isClass: true,
    priority: 10000.0589,
    key: "r-10%",
    style: {
        right: "10%"
    }
}, {
    isClass: true,
    priority: 10000.059,
    key: "r-15%",
    style: {
        right: "15%"
    }
}, {
    isClass: true,
    priority: 10000.0591,
    key: "r-20%",
    style: {
        right: "20%"
    }
}, {
    isClass: true,
    priority: 10000.0592,
    key: "r-25%",
    style: {
        right: "25%"
    }
}, {
    isClass: true,
    priority: 10000.0593,
    key: "r-30%",
    style: {
        right: "30%"
    }
}, {
    isClass: true,
    priority: 10000.0594,
    key: "r-35%",
    style: {
        right: "35%"
    }
}, {
    isClass: true,
    priority: 10000.0595,
    key: "r-40%",
    style: {
        right: "40%"
    }
}, {
    isClass: true,
    priority: 10000.0596,
    key: "r-45%",
    style: {
        right: "45%"
    }
}, {
    isClass: true,
    priority: 10000.0597,
    key: "r-50%",
    style: {
        right: "50%"
    }
}, {
    isClass: true,
    priority: 10000.0598,
    key: "r-55%",
    style: {
        right: "55%"
    }
}, {
    isClass: true,
    priority: 10000.0599,
    key: "r-60%",
    style: {
        right: "60%"
    }
}, {
    isClass: true,
    priority: 10000.06,
    key: "r-65%",
    style: {
        right: "65%"
    }
}, {
    isClass: true,
    priority: 10000.0601,
    key: "r-70%",
    style: {
        right: "70%"
    }
}, {
    isClass: true,
    priority: 10000.0602,
    key: "r-75%",
    style: {
        right: "75%"
    }
}, {
    isClass: true,
    priority: 10000.0603,
    key: "r-80%",
    style: {
        right: "80%"
    }
}, {
    isClass: true,
    priority: 10000.0604,
    key: "r-85%",
    style: {
        right: "85%"
    }
}, {
    isClass: true,
    priority: 10000.0605,
    key: "r-90%",
    style: {
        right: "90%"
    }
}, {
    isClass: true,
    priority: 10000.0606,
    key: "r-95%",
    style: {
        right: "95%"
    }
}, {
    isClass: true,
    priority: 10000.0607,
    key: "r-100%",
    style: {
        right: "100%"
    }
}, {
    isClass: true,
    priority: 10000.0608,
    key: "r-0",
    style: {
        right: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0609,
    key: "r-1",
    style: {
        right: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.061,
    key: "r-2",
    style: {
        right: "2dp"
    }
}, {
    isClass: true,
    priority: 10000.0611,
    key: "r-3",
    style: {
        right: "3dp"
    }
}, {
    isClass: true,
    priority: 10000.0612,
    key: "r-4",
    style: {
        right: "4dp"
    }
}, {
    isClass: true,
    priority: 10000.0613,
    key: "r-5",
    style: {
        right: "5dp"
    }
}, {
    isClass: true,
    priority: 10000.0614,
    key: "r-6",
    style: {
        right: "6dp"
    }
}, {
    isClass: true,
    priority: 10000.0615,
    key: "r-7",
    style: {
        right: "7dp"
    }
}, {
    isClass: true,
    priority: 10000.0616,
    key: "r-8",
    style: {
        right: "8dp"
    }
}, {
    isClass: true,
    priority: 10000.0617,
    key: "r-9",
    style: {
        right: "9dp"
    }
}, {
    isClass: true,
    priority: 10000.0618,
    key: "r-10",
    style: {
        right: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0619,
    key: "r-15",
    style: {
        right: "15dp"
    }
}, {
    isClass: true,
    priority: 10000.062,
    key: "r-20",
    style: {
        right: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.0621,
    key: "r-25",
    style: {
        right: "25dp"
    }
}, {
    isClass: true,
    priority: 10000.0622,
    key: "r-30",
    style: {
        right: "30dp"
    }
}, {
    isClass: true,
    priority: 10000.0623,
    key: "r-35",
    style: {
        right: "35dp"
    }
}, {
    isClass: true,
    priority: 10000.0624,
    key: "r-40",
    style: {
        right: "40dp"
    }
}, {
    isClass: true,
    priority: 10000.0625,
    key: "r-44",
    style: {
        right: "44dp"
    }
}, {
    isClass: true,
    priority: 10000.0626,
    key: "r-45",
    style: {
        right: "45dp"
    }
}, {
    isClass: true,
    priority: 10000.0627,
    key: "r-50",
    style: {
        right: "50dp"
    }
}, {
    isClass: true,
    priority: 10000.0628,
    key: "r-55",
    style: {
        right: "55dp"
    }
}, {
    isClass: true,
    priority: 10000.0629,
    key: "r-60",
    style: {
        right: "60dp"
    }
}, {
    isClass: true,
    priority: 10000.063,
    key: "r-65",
    style: {
        right: "65dp"
    }
}, {
    isClass: true,
    priority: 10000.0631,
    key: "r-70",
    style: {
        right: "70dp"
    }
}, {
    isClass: true,
    priority: 10000.0632,
    key: "r-75",
    style: {
        right: "75dp"
    }
}, {
    isClass: true,
    priority: 10000.0633,
    key: "r-80",
    style: {
        right: "80dp"
    }
}, {
    isClass: true,
    priority: 10000.0634,
    key: "r-88",
    style: {
        right: "88dp"
    }
}, {
    isClass: true,
    priority: 10000.0635,
    key: "r-85",
    style: {
        right: "85dp"
    }
}, {
    isClass: true,
    priority: 10000.0636,
    key: "r-90",
    style: {
        right: "90dp"
    }
}, {
    isClass: true,
    priority: 10000.0637,
    key: "r-95",
    style: {
        right: "95dp"
    }
}, {
    isClass: true,
    priority: 10000.0638,
    key: "r-100",
    style: {
        right: "100dp"
    }
}, {
    isClass: true,
    priority: 10000.0639,
    key: "bg-0",
    style: {
        backgroundImage: "/background-opacity-0.png"
    }
}, {
    isClass: true,
    priority: 10000.064,
    key: "bg-25",
    style: {
        backgroundImage: "/background-opacity-25.png"
    }
}, {
    isClass: true,
    priority: 10000.0641,
    key: "bg-50",
    style: {
        backgroundImage: "/background-opacity-50.png"
    }
}, {
    isClass: true,
    priority: 10000.0642,
    key: "bg-75",
    style: {
        backgroundImage: "/background-opacity-75.png"
    }
}, {
    isClass: true,
    priority: 10000.0643,
    key: "alert-container-success",
    style: {
        layout: "horizontal",
        width: "100%",
        height: Ti.UI.SIZE,
        backgroundColor: "#dff0d8",
        borderColor: "#d6e9c6",
        borderRadius: "4dp",
        borderWidth: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0644,
    key: "alert-success",
    style: {
        left: "3%",
        width: "94%",
        top: "10dp",
        bottom: "10dp",
        height: Ti.UI.SIZE,
        color: "#468847",
        backgroundColor: "#dff0d8"
    }
}, {
    isClass: true,
    priority: 10000.0645,
    key: "alert-container-info",
    style: {
        layout: "horizontal",
        width: "100%",
        height: Ti.UI.SIZE,
        backgroundColor: "#d9edf7",
        borderColor: "#bce8f1",
        borderRadius: "4dp",
        borderWidth: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0646,
    key: "alert-info",
    style: {
        left: "3%",
        width: "94%",
        top: "10dp",
        bottom: "10dp",
        height: Ti.UI.SIZE,
        color: "#3a87ad",
        backgroundColor: "#d9edf7"
    }
}, {
    isClass: true,
    priority: 10000.0647,
    key: "alert-container-warning",
    style: {
        layout: "horizontal",
        width: "100%",
        height: Ti.UI.SIZE,
        backgroundColor: "#fcf8e3",
        borderColor: "#fbeed5",
        borderRadius: "4dp",
        borderWidth: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0648,
    key: "alert-warning",
    style: {
        left: "3%",
        width: "94%",
        top: "10dp",
        bottom: "10dp",
        height: Ti.UI.SIZE,
        color: "#c09853",
        backgroundColor: "#fcf8e3"
    }
}, {
    isClass: true,
    priority: 10000.0649,
    key: "alert-container-danger",
    style: {
        layout: "horizontal",
        width: "100%",
        height: Ti.UI.SIZE,
        backgroundColor: "#f2dede",
        borderColor: "#eed3d7",
        borderRadius: "4dp",
        borderWidth: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.065,
    key: "alert-danger",
    style: {
        left: "3%",
        width: "94%",
        top: "10dp",
        bottom: "10dp",
        height: Ti.UI.SIZE,
        color: "#b94a48",
        backgroundColor: "#f2dede"
    }
}, {
    isClass: true,
    priority: 10000.0651,
    key: "panel-body",
    style: {
        left: "3%",
        width: "94%",
        top: "5dp",
        bottom: "5dp",
        height: Ti.UI.SIZE,
        color: "#333333",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0652,
    key: "panel-container-body",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        backgroundColor: "#ffffff"
    }
}, {
    isClass: true,
    priority: 10000.0653,
    key: "panel-default",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderColor: "#dddddd",
        borderRadius: "4dp",
        borderWidth: "1dp",
        backgroundColor: "#f5f5f5"
    }
}, {
    isClass: true,
    priority: 10000.0654,
    key: "panel-default-header",
    style: {
        left: "3%",
        width: "94%",
        top: "5dp",
        bottom: "5dp",
        height: Ti.UI.SIZE,
        color: "#333333",
        backgroundColor: "#f5f5f5",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0655,
    key: "panel-primary",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderColor: "#428bca",
        borderRadius: "4dp",
        borderWidth: "1dp",
        backgroundColor: "#428bca"
    }
}, {
    isClass: true,
    priority: 10000.0656,
    key: "panel-primary-header",
    style: {
        left: "3%",
        width: "94%",
        top: "5dp",
        bottom: "5dp",
        height: Ti.UI.SIZE,
        color: "#ffffff",
        backgroundColor: "#428bca",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0657,
    key: "panel-success",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderColor: "#d6e9c6",
        borderRadius: "4dp",
        borderWidth: "1dp",
        backgroundColor: "#dff0d8"
    }
}, {
    isClass: true,
    priority: 10000.0658,
    key: "panel-success-header",
    style: {
        left: "3%",
        width: "94%",
        top: "5dp",
        bottom: "5dp",
        height: Ti.UI.SIZE,
        color: "#468847",
        backgroundColor: "#dff0d8",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0659,
    key: "panel-warning",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderColor: "#fbeed5",
        borderRadius: "4dp",
        borderWidth: "1dp",
        backgroundColor: "#fcf8e3"
    }
}, {
    isClass: true,
    priority: 10000.066,
    key: "panel-warning-header",
    style: {
        left: "3%",
        width: "94%",
        top: "5dp",
        bottom: "5dp",
        height: Ti.UI.SIZE,
        color: "#c09853",
        backgroundColor: "#fcf8e3",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0661,
    key: "panel-danger",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderColor: "#eed3d7",
        borderRadius: "4dp",
        borderWidth: "1dp",
        backgroundColor: "#f2dede"
    }
}, {
    isClass: true,
    priority: 10000.0662,
    key: "panel-danger-header",
    style: {
        left: "3%",
        width: "94%",
        top: "5dp",
        bottom: "5dp",
        height: Ti.UI.SIZE,
        color: "#b94a48",
        backgroundColor: "#f2dede",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "14dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0663,
    key: "well",
    style: {
        layout: "vertical",
        width: "100%",
        height: Ti.UI.SIZE,
        backgroundColor: "#f5f5f5",
        borderColor: "#e3e3e3",
        borderRadius: "4dp",
        borderWidth: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0664,
    key: "well-content",
    style: {
        top: "10dp",
        left: "3%",
        bottom: "10dp",
        width: "94%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0672,
    key: "input-container",
    style: {
        layout: "horizontal",
        width: "100%",
        height: Ti.UI.SIZE,
        borderColor: "#cccccc",
        borderRadius: "4dp",
        borderWidth: "1dp"
    }
}, {
    isClass: true,
    priority: 10000.0673,
    key: "input-addon",
    style: {
        width: "14.5%",
        height: "44dp",
        textAlign: "center",
        backgroundColor: "#eeeeee",
        borderColor: "#cccccc",
        borderWidth: "1dp",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "20dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0674,
    key: "input-tf",
    style: {
        height: "44dp",
        width: "85.5%",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "20dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0675,
    key: "input-tf-2-addon",
    style: {
        height: "44dp",
        width: "70.888%",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "20dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0676,
    key: "input-addon-sm",
    style: {
        width: "11.3%",
        height: "34dp",
        textAlign: "center",
        backgroundColor: "#eeeeee",
        borderColor: "#cccccc",
        borderWidth: "1dp",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "16dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0677,
    key: "input-tf-sm",
    style: {
        height: "34dp",
        width: "88.8%",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "16dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0678,
    key: "input-tf-2-addon-sm",
    style: {
        height: "34dp",
        width: "77.3%",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "16dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0679,
    key: "input-border-rounded",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    }
}, {
    isClass: true,
    priority: 10000.068,
    key: "input-border-bezel",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL
    }
}, {
    isClass: true,
    priority: 10000.0681,
    key: "input-border-line",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE
    }
}, {
    isClass: true,
    priority: 10000.0682,
    key: "input-border-none",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE
    }
}, {
    isClass: true,
    priority: 10000.0683,
    key: "input-password",
    style: {
        passwordMask: true
    }
}, {
    isClass: true,
    priority: 10000.0684,
    key: "input-kb-default",
    style: {
        keyboardType: Ti.UI.KEYBOARD_DEFAULT
    }
}, {
    isClass: true,
    priority: 10000.0685,
    key: "input-kb-alert",
    style: {
        appearance: Ti.UI.KEYBOARD_APPEARANCE_ALERT
    }
}, {
    isClass: true,
    priority: 10000.0686,
    key: "input-text-ac-none",
    style: {
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
    }
}, {
    isClass: true,
    priority: 10000.0687,
    key: "input-text-ac-words",
    style: {
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS
    }
}, {
    isClass: true,
    priority: 10000.0688,
    key: "input-text-ac-sentences",
    style: {
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES
    }
}, {
    isClass: true,
    priority: 10000.0689,
    key: "input-text-ac-all",
    style: {
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_ALL
    }
}, {
    isClass: true,
    priority: 10000.069,
    key: "input-autocorrect",
    style: {
        autocorrect: true
    }
}, {
    isClass: true,
    priority: 10000.0691,
    key: "input-autocorrect-disabled",
    style: {
        autocorrect: false
    }
}, {
    isClass: true,
    priority: 10000.0692,
    key: "input-bm-always",
    style: {
        clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS
    }
}, {
    isClass: true,
    priority: 10000.0693,
    key: "input-bm-never",
    style: {
        clearButtonMode: Ti.UI.INPUT_BUTTONMODE_NEVER
    }
}, {
    isClass: true,
    priority: 10000.0694,
    key: "input-bm-onblur",
    style: {
        clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONBLUR
    }
}, {
    isClass: true,
    priority: 10000.0695,
    key: "input-bm-onfocus",
    style: {
        clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS
    }
}, {
    isClass: true,
    priority: 10000.0696,
    key: "input-clear-on-edit",
    style: {
        clearOnEdit: true
    }
}, {
    isClass: true,
    priority: 10000.0697,
    key: "input-enable-return-key",
    style: {
        enableReturnKey: true
    }
}, {
    isClass: true,
    priority: 10000.0698,
    key: "input-kb-ascii",
    style: {
        keyboardType: Ti.UI.KEYBOARD_ASCII
    }
}, {
    isClass: true,
    priority: 10000.0699,
    key: "input-kb-decimal-pad",
    style: {
        keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD
    }
}, {
    isClass: true,
    priority: 10000.07,
    key: "input-kb-email",
    style: {
        keyboardType: Ti.UI.KEYBOARD_EMAIL
    }
}, {
    isClass: true,
    priority: 10000.0701,
    key: "input-kb-namephone-pad",
    style: {
        keyboardType: Ti.UI.KEYBOARD_NAMEPHONE_PAD
    }
}, {
    isClass: true,
    priority: 10000.0702,
    key: "input-kb-numbers-punctuation",
    style: {
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION
    }
}, {
    isClass: true,
    priority: 10000.0703,
    key: "input-kb-number-pad",
    style: {
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
    }
}, {
    isClass: true,
    priority: 10000.0704,
    key: "input-kb-phone-pad",
    style: {
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
    }
}, {
    isClass: true,
    priority: 10000.0705,
    key: "input-kb-url",
    style: {
        keyboardType: Ti.UI.KEYBOARD_URL
    }
}, {
    isClass: true,
    priority: 10000.0706,
    key: "input-rk-default",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_DEFAULT
    }
}, {
    isClass: true,
    priority: 10000.0707,
    key: "input-rk-done",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_DONE
    }
}, {
    isClass: true,
    priority: 10000.0708,
    key: "input-rk-emergency_call",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_EMERGENCY_CALL
    }
}, {
    isClass: true,
    priority: 10000.0709,
    key: "input-rk-go",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_GO
    }
}, {
    isClass: true,
    priority: 10000.071,
    key: "input-rk-google",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_GOOGLE
    }
}, {
    isClass: true,
    priority: 10000.0711,
    key: "input-rk-join",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_JOIN
    }
}, {
    isClass: true,
    priority: 10000.0712,
    key: "input-rk-next",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_NEXT
    }
}, {
    isClass: true,
    priority: 10000.0713,
    key: "input-rk-route",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_ROUTE
    }
}, {
    isClass: true,
    priority: 10000.0714,
    key: "input-rk-search",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_SEARCH
    }
}, {
    isClass: true,
    priority: 10000.0715,
    key: "input-rk-send",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_SEND
    }
}, {
    isClass: true,
    priority: 10000.0716,
    key: "input-rk-yahoo",
    style: {
        returnKeyType: Ti.UI.RETURNKEY_YAHOO
    }
}, {
    isClass: true,
    priority: 10000.0717,
    key: "input-supress-return",
    style: {
        suppressReturn: false
    }
}, {
    isClass: true,
    priority: 10000.0718,
    key: "pull-left",
    style: {
        left: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0719,
    key: "pull-right",
    style: {
        right: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.072,
    key: "lo-vertical",
    style: {
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0721,
    key: "lo-horizontal",
    style: {
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.0722,
    key: "lo-composite",
    style: {
        layout: "composite"
    }
}, {
    isClass: true,
    queries: {
        formFactor: "isHandheld"
    },
    priority: 10011.0013,
    key: "tfield",
    style: {
        paddingLeft: 10,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        borderWidth: 3,
        borderRadius: 3,
        borderColor: "#bcc3cc",
        backgroundColor: "#fff",
        width: 250,
        height: 44,
        top: 10,
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: "15sp"
        }
    }
}, {
    isClass: true,
    queries: {
        formFactor: "isTablet"
    },
    priority: 10011.0014,
    key: "tfield",
    style: {
        paddingLeft: 20,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        borderWidth: 3,
        borderRadius: 3,
        borderColor: "#bcc3cc",
        backgroundColor: "#fff",
        width: "80%",
        height: 66,
        top: 20,
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: "22sp"
        }
    }
}, {
    isClass: true,
    priority: 10101.0026,
    key: "sb-style-default",
    style: {
        statusBarStyle: Titanium.UI.iPhone.StatusBar.DEFAULT
    }
}, {
    isClass: true,
    priority: 10101.0027,
    key: "sb-style-gray",
    style: {
        statusBarStyle: Titanium.UI.iPhone.StatusBar.GRAY
    }
}, {
    isClass: true,
    priority: 10101.0028,
    key: "sb-style-opaque-black",
    style: {
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK
    }
}, {
    isClass: true,
    priority: 10101.0029,
    key: "sb-style-light-content",
    style: {
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
    }
}, {
    isClass: true,
    priority: 10101.003,
    key: "sb-style-translucent-black",
    style: {
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK
    }
}, {
    isClass: true,
    priority: 10101.0134,
    key: "btn-action",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.ACTION
    }
}, {
    isClass: true,
    priority: 10101.0135,
    key: "btn-activity",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.ACTIVITY
    }
}, {
    isClass: true,
    priority: 10101.0136,
    key: "btn-add",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.ADD
    }
}, {
    isClass: true,
    priority: 10101.0137,
    key: "btn-bookmarks",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.BOOKMARKS
    }
}, {
    isClass: true,
    priority: 10101.0138,
    key: "btn-camera",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.CAMERA
    }
}, {
    isClass: true,
    priority: 10101.0139,
    key: "btn-cancel",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.CANCEL
    }
}, {
    isClass: true,
    priority: 10101.014,
    key: "btn-compose",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.COMPOSE
    }
}, {
    isClass: true,
    priority: 10101.0141,
    key: "btn-contact_add",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.CONTACT_ADD
    }
}, {
    isClass: true,
    priority: 10101.0142,
    key: "btn-disclosure",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.DISCLOSURE
    }
}, {
    isClass: true,
    priority: 10101.0143,
    key: "btn-done",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.DONE
    }
}, {
    isClass: true,
    priority: 10101.0144,
    key: "btn-edit",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.EDIT
    }
}, {
    isClass: true,
    priority: 10101.0145,
    key: "btn-fast_forward",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.FAST_FORWARD
    }
}, {
    isClass: true,
    priority: 10101.0146,
    key: "btn-fixed_space",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.FIXED_SPACE
    }
}, {
    isClass: true,
    priority: 10101.0147,
    key: "btn-flexible_space",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    }
}, {
    isClass: true,
    priority: 10101.0148,
    key: "btn-info_dark",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.INFO_DARK
    }
}, {
    isClass: true,
    priority: 10101.0149,
    key: "btn-info_light",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.INFO_LIGHT
    }
}, {
    isClass: true,
    priority: 10101.015,
    key: "btn-organize",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.ORGANIZE
    }
}, {
    isClass: true,
    priority: 10101.0151,
    key: "btn-pause",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.PAUSE
    }
}, {
    isClass: true,
    priority: 10101.0152,
    key: "btn-play",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.PLAY
    }
}, {
    isClass: true,
    priority: 10101.0153,
    key: "btn-refresh",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.REFRESH
    }
}, {
    isClass: true,
    priority: 10101.0154,
    key: "btn-reply",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.REPLY
    }
}, {
    isClass: true,
    priority: 10101.0155,
    key: "btn-rewind",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.REWIND
    }
}, {
    isClass: true,
    priority: 10101.0156,
    key: "btn-save",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.SAVE
    }
}, {
    isClass: true,
    priority: 10101.0157,
    key: "btn-spinner",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.SPINNER
    }
}, {
    isClass: true,
    priority: 10101.0158,
    key: "btn-stop",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.STOP
    }
}, {
    isClass: true,
    priority: 10101.0159,
    key: "btn-trash",
    style: {
        systemButton: Ti.UI.iPhone.SystemButton.TRASH
    }
}, {
    isClass: true,
    priority: 10101.0665,
    key: "ai-big",
    style: {
        style: Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
    }
}, {
    isClass: true,
    priority: 10101.0666,
    key: "ai-dark",
    style: {
        style: Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
    }
}, {
    isClass: true,
    priority: 10101.0667,
    key: "ai-plain",
    style: {
        style: Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "viewMain",
    style: {
        backgroundColor: "#f2eee9"
    }
}, {
    isId: true,
    priority: 100000.0067,
    key: "tdgMain",
    style: {
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0068,
    key: "tdgWrapper",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "transparent"
    }
}, {
    isId: true,
    priority: 100000.0069,
    key: "tdgScrollView",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        contentWidth: Ti.UI.FILL,
        layout: "horizontal",
        backgroundColor: "transparent",
        scrollType: "vertical"
    }
} ];