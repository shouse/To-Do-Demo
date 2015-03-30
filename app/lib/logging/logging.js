/**
 * @class Util.Logging
 * This class is a framework for handling logging
 * @author Steven House <steven.m.house@gmail.com>
 *
 * @param {Object} args - this is the argument object to instantiate the class
 */

var _ = require("alloy/underscore")._;
var Alloy = require("alloy");
var Backbone = require("alloy/backbone");
// Import Underscore.string to separate object, because there are conflict functions (include, reverse, contains)
_.str = require('underscore.string.min');
// @mixin Mix in non-conflict functions to Underscore namespace if you want
_.mixin(_.str.exports());
// All functions, include conflict, will be available through _.str object
// _.str.include('Underscore.string', 'string');
// Add a mixin for underscore to compact objects, removing all falsy properties
_.mixin({
    /**
     * Description
     * @method compactObject
     * @param {} obj
     * @return obj
     */
    compactObject: function compactObject(obj) {
        _.each(obj, function(value, key) {
            if (!value) {
                delete obj[key];
            }
        });
        return obj;
    }
});

/**
 * Description
 * @method Logger
 * @param {} args
 * @return
 */
exports.Logger = function(args) {
    Ti.API.info('[LOGGER] :: Loaded');

    // Saving context to '_self' variable
    _self = this;

    //--------------  PUBLIC PROPERTIES --------------//
    // can be direcly accessed by the user
    _self.version = 0.1;

    // Backbone stuff
    //_self.logCollection;
    var logCollection;
    var crittercism;

    //--------------  PRIVATE PROPERTIES - --------------//
    // can be manipulated by public and private functions
    var config = require('alloy').CFG.logger;
    var LOG_LEVEL = {
        "OFF": 0,
        "ALL": 1,
        "TRACE": 2,
        "DEBUG": 3,
        "INFO": 4,
        "WARN": 5,
        "ERROR": 6,
        "EVENT": 7,
        "O": 0,
        "A": 1,
        "T": 2,
        "D": 3,
        "I": 4,
        "W": 5,
        "E": 6,
        "V": 7
    };

    var logDirName = Titanium.Filesystem.applicationDataDirectory;
    var logFileName = "log-" + new Date().getTime() + ".txt";
    var logFile = Ti.Filesystem.getFile(logDirName, logFileName);
    deleteOldLogFiles();

    var collection = Backbone.Collection.extend({
        /**
         * Order by title
         * @method comparator
         * @param {} model
         * @return CallExpression
         */
        comparator: function(model) {
            return model.get('title');
        }
    });

    //@TODO extend the model here????
    var model = Backbone.Model.extend({
        adapter: {
            type: "properties"
        }
    });

    //-------------- PUBLIC METHODS --------------//

    /**
     * Initialize the logging framework
     * @method init
     * @return
     */
    _self.init = function() {
        //_self.logCollection = new collection();
        logCollection = new collection();
        // Setup Crittercism
        //if (Ti.Platform.osname !== 'android') {
        crittercism();
        //}
        // currentLogFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'logs.txt');
    };

    /**
     * Reset the log collection
     * @method reset
     * @return
     */
    _self.reset = function() {
        //_self.logCollection.reset();
        logCollection.reset();
    };

    /**
     * Set the related file to be included in the logs
     * @method setFile
     */
    _self.setSource = function($) {
        var prefix = ($.__widgetId ? 'widgets/' + $.__widgetId + '/' :'') + 'controllers/' + $.__controllerPath;
    };

    /**
     * Set the related file to be included in the logs
     * @method setFile
     */
    _self.getSource = function($) {
        // Current format of log files is this => "[Source] : Message"
        // @TODO parse the source

        var re = /(^\[)/;
        //http://stackoverflow.com/questions/2403122/regular-expression-to-extract-text-between-square-brackets
        var re2 = /^\[(.*?)\]/;
    };

    /**
     * Debug level handling
     * @method debug
     * @param {} message
     * @return
     */
    _self.debug = function(message, data) {
        data = data || '';
        Ti.API.debug("[LOGGER] :: " + message + data);
        log('D', message, data);
    };

    /**
     * Info level handling
     * @method info
     * @param {} message
     * @return
     */
    _self.info = function(message, data) {
        data = data || '';
        Ti.API.info("[LOGGER] :: " + message + JSON.stringify(data, null,
            4));
        log('I', message, data);
    };

    /**
     * Warning level handling
     * @method warn
     * @param {} message
     * @return
     */
    _self.warn = function(message, data) {
        data = data || '';
        Ti.API.warn("[LOGGER] :: " + message + JSON.stringify(data, null,
            4));
        log('W', message, data);
    };

    /**
     * Error level handling
     * @method error
     * @param {} message
     * @return
     */
    _self.error = function(message, data) {
        data = data || '';
        Ti.API.error("[LOGGER] :: " + message + JSON.stringify(data, null,
            4));

        // If FOUNDATION has loaded (it should have) get breadcrumbs for error
        if (!_.isUndefined(Alloy.Globals.Menu)) {
            data.breadcrumbs = Alloy.Globals.Menu.getBreadcrumbs();
        }

        log('E', message, data);
        Alloy.Globals.Menu.showInfoBar({title: 'ERROR: ' + message});


        var clickFunction = function() {
            var widgetLogger = Alloy.createWidget(
                "com.sivci.logger");
            widgetLogger.show({
                title: "Logs"
            });
        };
            //notify("ERROR", message, null, clickFunction);


    };

    /**
     * Event handling / Analytics
     * @method event
     * @param {Object} args An object containing level, message, type, data, and remote
     * @return
     */
    _self.event = function(args) {
        Ti.API.info("[LOGGER] :: log.event called with args: " + JSON.stringify(args, null, 4));

        args = args || {};

        var level = args.level ? args.level : 'V';
        var message = args.message ? args.message : '';
        var type = args.type ? args.type : 'event';
        var eventId = args.eventId ? args.eventId : false;

        var remote = args.remote ? args.remote : false;
        var feature = (args.feature !== undefined) ? args.feature : false;

        // These are the constructors for the overall message..
        // Message could equal:
        var noun = args.noun ? args.noun : "";
        var action = args.action ? args.action : "";
        var type = args.type ? args.type : "";
        var image = args.image ? args.image : "";
        var description = args.description ? args.description : "";

        if (message === '') {
            message = noun + " " + action + " " + description + ".";
        }

        var data = {
            message: message,
            noun: noun,
            action: action,
            type: type,
            image: image,
            description: description
        };

        // If remote is configured then remote it...
        if (remote === true) {
            acs({
                level: level,
                message: message,
                type: type
            });
        }

        // Level defaults to "V"
        log(level, message, data);

        if (feature) {
          Ti.Analytics.featureEvent(message);
        }

    };

    /**
     * This class returns the last [number] of [type] logs
     * @method backtrace
     * @param {} level
     * @param {} number
     * @return
     */
    _self.backtrace = function(level, number) {
        number = number ? number : "all";
        level = level ? level : "ALL";

        _self.debug("[LOGGER] Getting Backtrace for last " + number +
            " " + level + " logs");
        // Get [number] of [logs]

        if (number === "all") {
            //return _self.logCollection.where({level: level});
            return logCollection.where({
                level: level
            });
        } else {
            //return _.first(_self.logCollection.where({level: level}), number);
            return _.first(logCollection.where({
                level: level
            }), number);
        }
    };

    /**
     * This retrieves remote logs from the ACS cloud
     * @method queryRemote
     * @param {} args
     * @return
     */
    _self.queryRemote = function(args) {
        args = args || {};
        var success = args.success || function() {};
        var error = args.error || function() {
            Ti.API.error("logging.js: queryRemote error resp: " +
                JSON.stringify(resp, null, 4));
        };

        var acsWS = require('ti.cloud.objects');
        var queryObj = {
            perPage: _.isUndefined(args.perPage) ? 1000 : args.perPage,
            objectType: 'cloudLog',
            /**
             * Description
             * @method success
             * @param {} resp
             * @return
             */
            success: function(resp) {
                success(resp);
            },
            /**
             * Description
             * @method error
             * @param {} resp
             * @return
             */
            error: function(resp) {
                error(resp);
            }
        };
        acsWS.queryObject(queryObj);
    };

    /**
     * Return the log collection
     * @method getLogs
     * @return logCollection
     */
    _self.getLogs = function() {
        return logCollection;
    };

    //-------------- PRIVATE METHODS --------------//

    /**
     * This processes log.debug(), log.info(), log.warn(), and log.error() by creating a backbone model
     * then checking the configuration to decide to persist to file and/or persist to a remote location
     * @method log
     * @param {} level
     * @param {} message
     * @param {} data
     * @return
     */
    function log(level, message, data) {
        var logTime = new Date();
        // create a backbone log model
        var logModel = createModel(level, message, data, logTime);

        // @TODO add logLevel.global setting handling to override

        // If level of invoked function is equal to or greater than the config's file/global settings, write to file
        if (LOG_LEVEL[level] >= LOG_LEVEL[config.fileLevel]) {
            //writeLogToFile(level, message, data, logTime);
            writeLogToFile(logModel);
        }
        // Same as above but for remote
        if (LOG_LEVEL[level] >= LOG_LEVEL[Alloy.CFG.logger.remoteLevel] &&
            Alloy.CFG.logger.enabled === true) {
            writeToRemote(level, message, data, logTime);
        }
    }

    /**
     * Handle Backbone Model creation here.
     * @method createModel
     * @param {} level
     * @param {} message
     * @param {} data
     * @param {} time
     * @return {Object} log A model of a log
     */
    function createModel(level, message, data, time) {
        data = data ? data : {};
        //var breadcrumbs = _.isUndefined(Alloy.Globals.Menu) ? '' : Alloy.Globals.Menu.getBreadcrumbs();
        // Create a new backbone model and add it to the collection
        var log = new model({
            level: level,
            message: message,
            data: data,
            time: time //,
                //breadcrumbs: breadcrumbs
        });
        //log.save();
        //_self.logCollection.add(log);
        logCollection.add(log);

        return log;
    }

    /**
     * Write log message to file
     * @method writeLogToFile
     * @param {} level
     * @param {} message
     * @return
     */
    //function writeLogToFile(level, message, data, time) {
    function writeLogToFile(log) {
        //var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'log.txt');
        // Second paramater of write() specifies appending not overwriting
        //logFile.write(level + '|' + message + '|' data + '|' + time '###', true);
        var stringifiedLog = JSON.stringify(log);
        var encodedLog = Ti.Utils.base64encode(stringifiedLog);
        logFile.write(encodedLog + '[logEnd]', true);
    }

    /**
     * Returns log file string
     * @method readLogFile
     * @return MemberExpression
     */
    function readLogFile(file) {
        file = file ? file : logFile;
        return file.read().text;
    }

    /**
     * Returns an array of log models
     * @method formatLogFile
     * @return logArray
     */
    function formatLogFile() {
        var logText = readLogFile();
        var logTmp = logText.split('[logEnd]');
        var logArray = [];
        _.each(logTmp, function(aLog) {
            var decodedLog = Ti.Utils.base64decode(aLog);
            logArray.push(JSON.parse(decodedLog));
        });

        return logArray;
    }

    /**
     * Deletes the old log files
     * @method deleteOldLogFiles
     * @param {} numFilesToKeep
     * @return
     */
    function deleteOldLogFiles(numFilesToKeep) {
        numFilesToKeep = numFilesToKeep || 5;

        // Get a list of the log files to delete.
        var logDir = Ti.Filesystem.getFile(logDirName);
        logFiles = _.initial(_.filter(logDir.getDirectoryListing(),
            function(filename) {
                return filename.indexOf("log-") == 0;
            }).sort(), numFilesToKeep);

        // Delete each of the log files in the list.
        _.each(logFiles, function(filename) {
            var file = Ti.Filesystem.getFile(logDirName,
                filename);
            var deleted = file.deleteFile();
            Ti.API.info("[LOGGER] :: Log file " + file.name + (
                deleted ? " deleted." : " not deleted."
            ));
        });
    }

    /**
     * Trigger a notificaiton on screen
     * @method deleteOldLogFiles
     * @param {Number} fileIndex
     */
    function notify(level, message, icon, click) {
        click = click ? click : function() {};
        var Notifier = Alloy.createWidget(
            'com.caffeinalab.titanium.notifications');
        // Show the widget, and override defaults
        Notifier.show({
            message: level + ": " + message,
            icon: icon ? icon : '/appicon.png',
            pushForce: 10,
            duration: 5000,
            click: click
        });
    }

    /**
     * Get an old log file
     * @method deleteOldLogFiles
     * @param {Number} fileIndex
     * @return
     */
    function getOldLogFiles(numFilesToGet) {
        // Get the MOST recent
        numFilesToGet = numFilesToGet || 1;

        // Generate a list of the log files to get
        var logDir = Ti.Filesystem.getFile(logDirName);
        logFiles = _.initial(_.filter(logDir.getDirectoryListing(),
            function(filename) {
                return filename.indexOf("log-") == 0;
            }).sort(), numFilesToGet);

        // Get each of the log files in the list.
        var numFilesFound = 0;
        var fileTextArray = [];
        _.each(logFiles, function(filename) {
            numFilesFound++;
            var file = Ti.Filesystem.getFile(logDirName,
                filename);
            var fileText = file.read().text();
            // Add the text to the array
            fileTextArray.push({
                fileName: filename,
                fileText: fileText
            });
            log.info("Retrieved " + file.name);
        });

        return {
            length: numFilesFound,
            fileTextArray: fileTextArray
        };
    }

    /**
     * Send log / queue to remote
     * @method writeToRemote
     * @param {} level
     * @param {} message
     * @param {} data
     * @return
     */
    function writeToRemote(level, message, data) {
        remoteProvider = Alloy.CFG.logger.remoteProvider;
        Ti.API.info('[lLOGGER] :: Writing log to remote provider: ' +
            remoteProvider);
        switch (remoteProvider) {
            case "acs":
                //acs(level, message, data);
                break;
                // This will be where to change to interface with our own backend
            case "custom":
                break;
            default:
                alert("You have to edit config.json to supply your remote provider.");
                break;
        }

    }

    /**
     * Send log / queue to remote
     * @method sendEmail
     * @return
     */
    function sendEmail(args) {
        Ti.API.info("[lLOGGER] :: log.event called with args: " + JSON.stringify(
            args));
        var to = args.to ? args.to : false;
        var from = args.from ? args.from : "support@thefleetapp.com"
        // need to implement this
        var sendgrid = require('/utils/tisendgrid')(args.username, args.password);
        sendgrid.send({
            to: args.to,
            from: args.from,
            subject: args.subject,
            text: args.text
        }, function (e) {
            if (e) {
                console.log(e); // Email wasn't sent
                alert("It didn't work!  e = " + JSON.stringify(e, null, 4));
            }
        });
    }

    /**
     * Persist log to remote server
     * @method acs
     * @param {} args
     * @return
     */
    function acs(args) {
        args = args ? args : {};
        var level = args.level ? args.level : 'V';
        var message = args.message ? args.message : '';
        var type = args.type ? args.type : 'general';
        var data = args.data ? args.data : {};

        var acsWS = require('ti.cloud.objects');
        var obj = {
            objectType: type,
            objectFields: {
                level: level,
                message: message,
                appInfo: {
                    appName: Ti.App.name,
                    appVer: Ti.App.version,
                    osname: Ti.Platform.osname,
                    sessionId: Ti.App.getSessionId()
                }
            },

            success: function(resp) {
                _self.info(
                    '[LOGGER] : Created a Cloud Log on ACS',
                    resp);
            },

            error: function(resp) {
                _self.warn(
                    '[LOGGER] : Cloud Log ERROR on ACS',
                    resp);
            }
        };

        acsWS.createObject(obj);
    }

    /**
     * Persist log to custom remote backend
     * @method customRemote
     * @param {Object} args
     * @return
     */
    function customRemote(args) {

    }

    /**
     * If crittercism is setup, initialize it
     * @method customRemote
     * @param {Object} args
     * @return
     */
    function crittercism() {

      if (Alloy.CFG.logger.crittercism) {
        //crittercism = require('logging/crittercism');

        Ti.App.addEventListener('login', setupCrittercism);
      }
    }

    /**
     * Setup Crittercism after user login
     * @method setupCrittercism
     */
    function setupCrittercism() {
        Ti.App.removeEventListener('login', setupCrittercism);
        var username = Alloy.Globals.userInfo.realName;
        crittercism.setUsername(username);

        var tags = Alloy.Globals.userInfo;
        crittercism.setMetaData(tags);
    }

};
