/**
 * This handles both multiple menus and the main navigation.
 * It supports both tablet via a split window approach.
 * It also supports dynamic manipulation of menu / navbar icons and functionality.
 *
 * The beginninng was based off of: https://github.com/danielsefton/AlloySliderMenu
 * with a lot of refactorings, enhancements, and better comments
 *
 * @version 0.5
 * @author Steven House <steven.m.house@gmail.com>
 *
 * @link https://github.com/danielsefton/AlloySliderMenu
 */

// Access the Global Log Controller
var log = Alloy.Globals.log;
log.debug('[ROOT] Vroom!  Starting up!');

var leftMenuWidth = 350;

// Variable declarations
var animateRight, animateLeft, animateReset, animateSideContent;

var touchStartX = 0;
var touchStartY = 0;
var touchRightStarted = false;
var touchLeftStarted = false;
var buttonPressed = false;
var hasSlided = false;
var direction = "reset";

var viewRefMain;

var sidebarActive = false;

// Icons
var iconStyle = 'dark';

var currentCallbackL1 = [];
var currentCallbackL2 = [];
var currentCallbackR1 = [];
var currentCallbackR2 = [];

var breadcrumbs = [];

init();

Alloy.Globals.Menu = this;



//Alloy.Globals.MainView = $.viewContainer;

//var events = require('utils/eventReg');

/**
 * Start this running
 */
function init() {
    log.debug('[FOUNDATION] : init');
    addEventListeners();
    setAnimations();
}

/**
 * Do any cleanup you want
 * @method cleanup
 */
function cleanup() {
    $.buttonRight.image = '';
    $.buttonRight.removeEventListener('click', currentCallbackR1);

    $.buttonRight2.image = '';
    $.buttonRight2.removeEventListener('click', currentCallbackL2);

    $.buttonLeft.image = '';
    $.buttonLeft.removeEventListener('click', currentCallbackL1);

    $.buttonLeft2.image = '';
    $.buttonLeft2.removeEventListener('click', currentCallbackL2);
}

/**
 * Configure the Side Bar - Image / Text
 * @param {Object} args
 *
 */
function configureSideBar(args) {
    log.debug('[FOUNDATION] : configureSideBar');
    args = args ? args : {};

    /*
    var mainColor = args.mainColor ? args.mainColor : Alloy.CFG.themeColors
        .lightObserve;
    var accentColor = args.accentColor ? args.accentColor : Alloy.CFG.themeColors
        .darkObserve;
    var title = args.title ? args.title : '';
    */
}

/**
 * Configure the main navigation bar: colors, title
 * @method configureNavBar
 * @param {Object} args
 */
function configureNavBar(args) {
    /*
    log.debug('[FOUNDATION] : configureNavBar()');

    //$.imageViewTitle.visible = false;
    var mainColor, accentColor, title;

    var colors = {
        mainColor: mainColor
    };

    $.labelTitle.text = args.title ? args.title : "TEST TEST";
    $.labelTitle.visible = true;

    if (title) {
        resetTabBar();
    } else {
        //$.viewBottomBar.visible = false;
    }

    //exports.setColor(colors.mainColor);
    */
}

/**
 * Set the color of the navigation bar
 * @method setColor
 */
exports.setColor = function(color) {
    var animation = Titanium.UI.createAnimation();
    animation.backgroundColor = color;
    animation.duration = 250;

    $.viewNav.animate(animation);
    $.buttonLeft.animate(animation);
    $.buttonRight.animate(animation);
    //$.imageViewTitle.animate(animation);
    $.viewTitleHolder.animate(animation);

    $.viewMainContent.animate(animation);

}

/**
 * Reset Tab Bar
 * @method resetTabBar
 */
function resetTabBar() {
    // bottom bar reset function
}

var mainContentTitle = "";
/**
 * Set the view that will appear as the main content
 * @method setMainContent
 */
exports.setMainContent = function(viewTitle, args) {
    args = args ? args : {};
    log.info('[FOUNDATION] : Opening ' + viewTitle, args);
    breadcrumbs.push({
        controller: viewTitle,
        args: args
    });

    exports.hideButton('r2');
    exports.hideButton('l2');

    args = args || {};

    // Reset sidebar if it is currently active
    if (sidebarActive) {
        $.viewSideContent.width = 0;
        $.viewMainContent.width = "100%";
        sidebarActive = false;
    }

    // Only render if a different page
    if (mainContentTitle !== viewTitle) {
        mainContentTitle = viewTitle;
        // Remove children, save render
        if ($.viewMainContent.children.length > 0) {
            // First cleanup the view
            //if ($.viewMainContent.children[0].cleanup !== null) {
                //$.viewMainContent.children[0].cleanup();
            //}
            $.viewMainContent.removeAllChildren();
        }
        var mainContentView = Alloy.createController(viewTitle, args);
        $.viewMainContent.add(mainContentView.getView());
        configureNavBar(viewTitle);

        args.title ? exports.setTitle(args.title) : function() {};
    }
};

var sideContentTitle = "";
/**
 * Set the view that will appear as the sidebar content.  Used in tablets
 * @method setSideContent
 */
exports.setSideContent = function(controller, args) {
    args = args || {};
    var title = args.title || '';

    log.info('[ROOT] :: Set Side to ' + controller, args);
    //breadcrumbs.push({controller: controller, args: args});
    sidebarActive = true;

    $.viewSideContent.width = "50%";
    $.viewMainContent.width = "50%";
    //$.viewSideContent.animate(animateSideContent);

    // Remove children, save render
    if ($.viewSideContent.children.length > 0) {
        // First cleanup the view
        $.viewSideContent.children[0].cleanup();
        $.viewSideContent.removeAllChildren();
    }

    var sideContentView = Alloy.createController(controller, args);
    $.viewSideContent.add(sideContentView.getView());
    configureSideBar(title);

};

/**
 * Hide the sidebar content.  Used in tablets
 * @method hideSideContent
 */
exports.hideSideContent = function() {
    log.debug('[FOUNDATION] : hideSideContent');
    $.viewSideContent.width = 0;
};

/**
 * Set the Title of the Nav Bar
 * @method setTitle
 */
exports.setTitle = function(title) {
    log.debug('[FOUNDATION] : setTitle : title = ' + title);
    if (!_.isUndefined(title)) {
        $.labelTitle.text = title;
    }
};

/**
 * Set the navigation buttons.  Image and callback
 * @method setButton
 * @param {Object} args
 * @param {String} args.image Location of image
 * @param {Function} args.callback The callback to happen upon click
 * @param {String} args.button The button to affect
 */
exports.setButton = function(args) {
    // @see https://developer.appcelerator.com/question/127638/why-does-removeeventlistener-need-a-callback
    log.debug('[ROOT] Setting Button ' + args.button, args);

    var image = args.image ? args.image : '';
    //var success = args.success ? args.success : function(){};

    var button = args.button ? args.button : false;

    if (!button) {
        return false;
    }

    switch (button) {
        case 'r1':
            // If there is an event listener, pop it off the stack to remove
            if (currentCallbackR1.length > 0) {
                $.buttonRight.removeEventListener('click', currentCallbackR1.pop());
            }
            currentCallbackR1.push(args.success ? args.success : function() {
                log.warn("No Success callback provided");
            });
            $.buttonRight.image = image;

            $.buttonRight.addEventListener('click', _.first(
                currentCallbackR1));

            break;
        case 'r2':
            // If there is an event listener, pop it off the stack to remove
            if (currentCallbackR2.length > 0) {
                $.buttonRight2.removeEventListener('click',
                    currentCallbackR2.pop());
            }

            currentCallbackR2.push(args.success ? args.success : function() {
                log.warn("No Success callback provided");
            });
            $.buttonRight2.image = image;

            $.buttonRight2.addEventListener('click', _.first(
                currentCallbackR2));
            break;
        case 'l1':
            // If there is an event listener, pop it off the stack to remove
            if (currentCallbackL1.length > 0) {
                $.buttonLeft.removeEventListener('click', currentCallbackL1.pop());
            }
            // Push new callback to stack
            currentCallbackL1.push(args.success ? args.success : function() {
                log.warn("No Success callback provided");
            });
            // Set Button Image
            $.buttonLeft.image = image;
            // Add the event listener
            $.buttonLeft.addEventListener('click', _.first(currentCallbackL1));
            break;
        case 'l2':
            // If there is an event listener, pop it off the stack to remove
            if (currentCallbackL2.length > 0) {
                $.buttonLeft2.removeEventListener('click', currentCallbackL2.pop());
            }

            currentCallbackL2.push(args.success ? args.success : function() {
                log.warn("No Success callback provided");
            });
            $.buttonLeft2.image = image;
            $.buttonLeft2.addEventListener('click', _.first(
                currentCallbackL2));
            break;
        default:
            break;
    }

};

/**
 * Set the navigation buttons.  Image and callback
 * @method hideButton
 * @param {Object} args
 */
exports.hideButton = function(selectedButton) {
    log.debug('[FOUNDATION] : hideButton : selectedButton = ' +
        selectedButton);
    if (!selectedButton) {
        return false;
    }

    switch (selectedButton) {
        case 'r1':
            $.buttonRight.visible = false;
            break;
        case 'r2':
            $.buttonRight2.visible = false;
            break;
        case 'l1':
            $.buttonLeft.visible = false;
            break;
        case 'l2':
            $.buttonLeft2.visible = false;
            break;
        default:
            break;
    }
};

/**
 * Set the navigation buttons.  Image and callback
 * @method setButton
 * @param {Object} args
 */
exports.showButton = function(selectedButton) {
    log.debug('[ROOT] Show Button ' + selectedButton);
    if (!selectedButton) {
        alert('Attempted to show navigation button but did not provide the button to show');
        return false;
    }

    switch (selectedButton) {
        case 'r1':
            $.buttonRight.visible = true;
            break;
        case 'r2':
            $.buttonRight2.visible = true;
            break;
        case 'l1':
            $.buttonLeft.visible = true;
            break;
        case 'l2':
            $.buttonLeft2.visible = true;
            break;
        default:
            alert("Default.  Shouldn't see this");
            break;
    }
};

/**
 * Hide the Nav Bar
 * @method hideNavBar
 */
exports.hideNavBar = function() {
    $.viewNav.height = 0;
    $.viewContentArea.top = 0;
    $.viewShadow.visible = 0;
};

/**
 * Show the Nav Bar
 * @method showNavBar
 */
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

/**
 * Hide the Bottom Bar
 * @method hideNavBar
 */
exports.hideBottomBar = function() {
    //$.viewShadow.visible = 0;
    $.viewBottomBar.height = 0;
};

/**
 * Show the Bottom Bar
 * @method hideNavBar
 */
exports.showBottomBar = function() {
    //$.viewShadow.visible = 0;
    $.viewBottomBar.height = 65;
};

exports.setBottomBar = function() {
    $.viewBottomBar.removeAllChildren();
};

/**
 * Hide the Info Bar
 * @method hideInfoBar
 */
exports.hideInfoBar = function() {
    var animation = Ti.UI.createAnimation({
        height: 1,
        opacity: 0.0,
        duration: 500,
        curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
    });
    $.viewInfoBar.animate(animation);
};

/**
 * Show the Info Bar
 * @method showInfoBar
 */
exports.showInfoBar = function(args) {
    // If no buttons hide imageViews
    if (!args.yes && !args.cancel) {
        $.imageViewInfoBarIcon.width = 0;
        $.imageViewInfoBarIcon2.width = 0;
        $.labelInfoBarTitle.left = 0;
        $.labelInfoBarTitle.right = 0;
    } else {
        $.imageViewInfoBarIcon.width = 35;
        $.imageViewInfoBarIcon2.width = 35;
        $.labelInfoBarTitle.left = 65;
        $.labelInfoBarTitle.right = 65;
    }

    //@TODO formFactor
    args = args || {};
    var duration = args.duration ? args.duration : 3500;
    $.labelInfoBarTitle.text = args.title ? args.title : 'Use args.title';
    $.viewInfoBar.backgroundColor = args.color ? args.color : "#333";
    $.imageViewInfoBarIcon.image = args.icon ? args.icon : "/images/navigation/ic_cancel_white_48dp.png";
    $.imageViewInfoBarIcon2.image = args.icon ? args.icon : "/images/navigation/ic_check_white_48dp.png";

    var cancel;
    if (args.cancel !== null && args.cancel !== undefined) {
        var cancel = function() {
            args.cancel();
            exports.hideInfoBar();
        };

        var yes = function() {
            exports.hideInfoBar();
            alert('here');
        };

        $.imageViewInfoBarIcon.removeEventListener(cancel);
        $.imageViewInfoBarIcon2.removeEventListener(yes);
        $.imageViewInfoBarIcon.addEventListener('click', cancel);
        $.imageViewInfoBarIcon2.addEventListener('click', yes);
    }


    _.delay(function(){
        var animation = Ti.UI.createAnimation({
            height: 45,
            opacity: 0.85,
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
        });
        $.viewInfoBar.animate(animation);
    }, 500);

    if (duration) {
        _.delay(function(){
            exports.hideInfoBar();
        }, duration);
    }

};


/**
 * Get Breadcrumbs
 * @method getBreadcrumbs
 * @param {Number} numCrumbs Number of breadcrumbs to return.  Defaults to 5.
 * @return {Object} breadcrumbs Returns specified number of breadcrumbss
 */
exports.getBreadcrumbs = function(numCrumbs) {
    numCrumbs = numCrumbs ? numCrumbs : 5;
    return _.last(breadcrumbs, numCrumbs);
};

/**
 * Get the last Controller and open it
 */
exports.goBack = function() {
    var lastController = _.first(exports.getBreadcrumbs(2));
    if (!_.isUndefined(lastController.viewTitle) && !_.isUndefined(lastController.args)) {
        exports.setMainContent(lastController.viewTitle, lastController.args);
    } else if (!_.isUndefined(lastController.viewTitle)) {
        exports.setMainContent(lastController.viewTitle);
    } else {
        exports.setMainContent("HomePage");
    }

};

/**
 * Toggle the Left Slider
 * @method toggleLeftSlider
 */
exports.toggleLeftSlider = function() {
    if (!hasSlided) {
        direction = "right";
        $.viewMovable.animate(animateRight);
        hasSlided = true;
        $.leftMenu.zIndex = 4;
        $.topNavigationDrawer.zIndex = 0;
    } else {
        direction = "reset";
        $.viewMovable.animate(animateReset);
        hasSlided = false;
        $.leftMenu.zIndex = 1;
        $.topNavigationDrawer.zIndex = 0;

        $.buttonLeft.touchEnabled = true;
        $.buttonRight.touchEnabled = true;
    }

    log.debug('[FOUNDATION] : Left Menu Has Slided: ' + hasSlided +
        ' in direction: ' + direction);
};

/**
 * Toggle the Right Slider
 * @method toggleRightSlider
 */
exports.toggleRightSlider = function() {
    if (!hasSlided) {
        direction = "left";
        $.viewMovable.animate(animateLeft);
        hasSlided = true;
        $.rightMenu.zIndex = 4;
        $.topNavigationDrawer.zIndex = 0;
    } else {
        direction = "reset";
        $.viewMovable.animate(animateReset);
        hasSlided = false;
        $.rightMenu.zIndex = 1;
        $.topNavigationDrawer.zIndex = 0;

        $.buttonLeft.touchEnabled = true;
        $.buttonRight.touchEnabled = true;
    }

    log.debug('[FOUNDATION] : Left Menu Has Slided: ' + hasSlided +
        ' in direction: ' + direction);
};

/**
 * Toggle the Right Slider
 * @method toggleTopSlider
 */
exports.toggleTopSlider = function() {};

/**
 * When device is rotated, handle View sizing accordingly
 * @method handleRotation
 */
exports.handleRotation = function() {
    log.debug('[FOUNDATION] : handleRotation()');

    /*
    $.viewContainer.width = Ti.Platform.displayCaps.platformWidth;
    $.viewContainer.height = Ti.Platform.displayCaps.platformHeight;

    $.viewMovable.width = Ti.Platform.displayCaps.platformWidth;
    $.viewMovable.height = Ti.Platform.displayCaps.platformHeight;

    $.viewNav.width = Ti.Platform.displayCaps.platformWidth;

    $.viewContentArea.width = Ti.Platform.displayCaps.platformWidth;
    $.viewMainContent.height = "Ti.UI.FILL";


    if (sidebarActive) {
        $.viewSideContent.width = "50%";
        $.viewMainContent.width = "50%";

    } else {
        //$.viewSideContent.width = 0;
        $.viewMainContent.width = Ti.Platform.displayCaps.platformWidth;
    }
    */
};

/**
 * Add a view to the menu
 * @method addMenuView
 * @param {Object} view The View to add to the menu
 */
exports.addMenuView = function(view) {
    log.info('Menu Widget :: Adding a view to the menu');
    $.leftMenu.add(view);
};

/**
 * Add a view to the menu
 * @method changeMenu
 * @param {Object} args Args to be passed to the function
 */
exports.changeMenu = function(args) {
    args = args ? args : {};
    // Left or right menu?
    var menuSide = args.side;
    var image = args.image;
    var onclick = args.onclick;

    if (menuSide === 'right') {
        if (image) {
            $.buttonRight.image;
        }
        if (onclick) {
            $.buttonRight.removeEventListener('touchend');
            $.buttonRight.addEventListener('click', onclick);
        }

    } else {
        if (image) {
            $.buttonLeft.image;
        }
        if (onclick) {
            $.buttonLeft.removeEventListener('touchend');
            $.buttonLeft.addEventListener('click', onclick);
        }
    }


};

/**
 * Add menu event listeners
 * @method addEventListeners
 */
function addEventListeners() {
    log.debug('[FOUNDATION] : Adding Menu Event Listeners');

    // Handle Orientation Change
    Ti.Gesture.addEventListener('orientationchange', function() {
        exports.handleRotation();
    });

    // Open Logger via Menu
    $.viewNav.addEventListener('longpress', function() {
        displayLogs();
    });

    // Opens Logger via top Nav Longpress
    $.viewNav.addEventListener('longpress', function() {
        displayLogs();
    });

    // Left Menu Toggle
    $.leftMenu.addEventListener('click', function(e) {
        _.delay($.toggleLeftSlider, 250);
    });

    /*
    $.viewHome.addEventListener('click', function() {
        exports.setMainContent('HomePage');
    });


    // Open Settings
    $.viewSettings.addEventListener('click', function() {
        exports.setMainContent('Settings');
    });

    // Open Private Messages
    $.viewInbox.addEventListener('click', function() {
        exports.setMainContent('UserMessages');
    });

    // Open Feedback
    $.viewFeedback.addEventListener('click', function() {
        //@TODO send screenshot to feedback
        var feedbackWindow = Alloy.createWidget("com.sprint.qwo.common.feedback");
        feedbackWindow.show({title: "Feedback"});
    });
    */
    Ti.App.addEventListener("sliderToggled", function(e) {
        alert('Does this code ever get hit???');
        if (e.direction == "right") {
            $.leftMenu.zIndex = 2;
            $.rightMenu.zIndex = 100;
            $.topNavigationDrawer.zIndex = 0;
        } else if (e.direction == "left") {
            $.leftMenu.zIndex = 1;
            $.rightMenu.zIndex = 200;
            $.topNavigationDrawer.zIndex = 0;
        }
    });
}

/**
 * Declare the animations to be used
 * @method setAnimations
 */
function setAnimations() {
    // Variable declarations
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

/**
 * Logging Utilities
 * @method displayLogs
 */
function displayLogs() {
    log.debug('[ROOT] :: Opening Logs');

    var widgetLogger = Alloy.createWidget("com.sivci.logger");
    widgetLogger.show({
        title: "Logs"
    });
}
