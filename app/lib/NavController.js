/**
 * @class NavController
 *
 * This is an updated Navigation Controller for Appcelerator Titanium
 * Its origon is first, from Forging Titanium Episode 2, then adapted by ___________ to
 * coincide with current practice with CommonJS and the rest of the application.
 *
 * This current update is to align with best practices / requirements with Ti SDK 3.2.
 * Specifically iOS had an API update that depricated Ti.UI.iPhone.createNavigationGroup();
 * and replaced it with Ti.UI.iOS.createNavigationWindow();

 * @see: http://docs.appcelerator.com/titanium/latest/#!/guide/iOS_7_Migration_Guide-section-37533766_iOS7MigrationGuide-Titanium.UI.iOS.NavigationWindow
 */

// Gather utilities for use
_ = require("alloy/underscore")._;
Alloy = require("alloy");
Backbone = require("alloy/backbone");

// Add Logging capability
var log = Alloy.Globals.log;
log.info("[NavController] : Opened NavController");

/**
 * Class Declaration
 * @TODO: Add SplitWindow capabilities here
 * @method NavController
 * @param {Object} args this is a set of arguments to be passed to the constructor
 * @return
 */
exports.NavController = function(args) {
    log.info('[NavController] : Initialized', args);

    // Saving context to '_self' variable
    _self = this;

    //--------------  PUBLIC PROPERTIES --------------//
    // can be direcly accessed by the user
    _self.version = 0.1;

    // Backbone stuff
    _self.navCollection;
    _self.navModel;

    // Constructor arguments
    var args = args || {};
    var splitWindow = false;

    // Class variables
    // this.deviceInfo = [contain username, model, osname, version]
    // + [networkType, macAddress, processorCount, address, ostype]
    // + [batteryState, batteryPercent, availMem] at LAUNCH TIME
    var deviceInfo = require('deviceInfo').getDeviceInfo();
    var splitWindow;

    // Stack to hold windows
    var windowStack = [];
    var currentWindow = null;
    var currentStackPosition = null;
    var windowHistory = [];

    // iOS variables that will enable navigation
    var rootWin = null;
    var navWin = null;

    // This could be used for a window open/close hook based system
    var windowHooks = {};

    // Initialize BACKBONE support!  Woohoo!
    var collection = Backbone.Collection.extend({});

    //@TODO extend the model here????
    var model = Backbone.Model.extend({
        adapter: {
            type: "properties"
        }
    });

    //-------------- PUBLIC METHODS --------------//
    // Initialization if necessary
    /**
     * Description
     * @method init
     * @param {} args
     * @return
     */
    _self.init = function(args) {
        args = args || {};
        splitWindow = args.splitWindow ? args.splitWindow : false;
        _self.navCollection = new collection();
    };

    /**
     * Function to open a window
     * @method open
     * @param {} win
     * @return
     */
    _self.open = function(win) {
        //log.warn('[NavController] : Opening ' + JSON.stringify(win, null, 4));

        // Add in the Backbone magic
        //createModel(win);

        // Add the window to the stack of windows managed by the controller
        windowStack.push(win);

        // Grab a copy of the current nav controller for use in the callback
        var that = this;

        // Add Event Listener: CLOSE
        win.addEventListener('close', function() {
            log.info('[NavController] : Closed window');
            that.windowStack.pop();
        });

        // If this is the FIRST window, need special treatement
        if (windowStack.length === 1) {
            if (Ti.Platform.osname === 'android') {
                log.info(
                    "[NavController] : Opening FIRST Android window"
                );
                openFirstWinAndroid(win);
            } else {
                openFirstWinIOS(win);
            }
        }
        // All subsequent windows
        else {
            if (Ti.Platform.osname === 'android') {
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
        }
    };

    /**
     * Go back to the initial window of the NavigationController
     * @method home
     * @return
     */
    _self.home = function() {
        log.info('[NavController] : OPENING home window');
        // Store a copy of all the current windows on the stack
        var windows = windowStack.concat([]);

        // Because we are going back to HOME we need to close ALL other windows.
        // Special attention
        _.each(windows, function(win) {
            (navWindow) ? navWin.close(win): win.close();
        });

        // Reset the window stack
        // @TODO Understand this
        windowStack = _.first(windowStack);
    };

    /**
     * Close a window
     * @method close
     * @param {} win
     * @return
     */
    _self.close = function(win) {
        // Close it and remove from stack (handled by close listener)
        // ANDROID
        if (Ti.Platform.osname === 'android') {
            win.close();
        }
        // iOS
        else {
            var win = Ti.UI.currentWindow;
            navWin.closeWindow(win);
            // @TODO Fire event here??
        }
    };

    //-------------- PRIVATE METHODS --------------//
    /**
     * Handle Backbone Model creation here.
     * @method createModel
     * @param {} win
     * @return
     */
    function createModel(win) {
        // Create a new backbone model and add it to the collection
        var nav = new model({
            title: level,
            args: message,
            time: new Date()
        });
        //log.save();
        _self.navCollection.add(nav);
    }

    /**
     * Opens first Android window
     * @method openFirstWinAndroid
     * @param {} win
     * @return
     */
    function openFirstWinAndroid(win) {
        win.exitOnClose = true;

        /*
		// Add Event Listener: OPEN
		win.addEventListener('open', function(e) {
			// Setup flurry sessions
			//Flurry.onStartSession(Alloy.Globals.ThemeConfig.flurryAPIKey);

			// Add listener to the activity
			// @TODO WHAT IS THE ACTIVITY???
			var activity = win.activity;

			// Add Event Listener: PAUSE
			activity.addEventListener('pause', function(e) {
				log.info('[NavController] : APPLICATION PAUSED');
				//Flurry.onEndSession();
			});
			// Add Event Listener: RESUME
			activity.addEventListener('resume', function(e) {
				log.info('[NavController] : APPLICATION RESUMED');
				//Flurry.onStartSession(Alloy.Globals.ThemeConfig.flurryAPIKey);
			});
		});
		*/

        win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT];

        win.open();

        // Add Event Listener: CLOSE
        win.addEventListener('close', function() {
            log.info(
                '[NavController] : - Leaving application, close'
            );
        });

        win.addEventListener('androidback', function(e) {
            log.debug(
                "[NavController] : Android back hardware button pressed."
            );
            Alloy.Globals.Menu.goBack();
        });

        Alloy.Globals.mainWin = win;
    }

    /**
     * Opens first iOS window
     * @method openFirstWinIOS
     * @param {} win
     * @return
     */
    function openFirstWinIOS(win) {
        log.info('[NavController] : Opening first window', win);

        /*
		// NEW iOS
		//rootWin = Ti.UI.createWindow();
		navWin = Ti.UI.iOS.createNavigationWindow({
			window : win
		});

		// Open the Navigation Group - This is the Navigation ROOT
		navWin.open();
		*/
        win.open();

    }

};
