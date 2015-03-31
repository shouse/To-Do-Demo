var _ = require("alloy/underscore")._;

var Alloy = require("alloy");

var Backbone = require("alloy/backbone");

_.str = require("underscore.string.min");

_.mixin(_.str.exports());

_.mixin({
    compactObject: function(obj) {
        _.each(obj, function(value, key) {
            value || delete obj[key];
        });
        return obj;
    }
});

exports.Logger = function() {
    function log(level, message, data) {
        var logTime = new Date();
        var logModel = createModel(level, message, data, logTime);
        LOG_LEVEL[level] >= LOG_LEVEL[config.fileLevel] && writeLogToFile(logModel);
        LOG_LEVEL[level] >= LOG_LEVEL[Alloy.CFG.logger.remoteLevel] && true === Alloy.CFG.logger.enabled && writeToRemote(level, message, data, logTime);
    }
    function createModel(level, message, data, time) {
        data = data ? data : {};
        var log = new model({
            level: level,
            message: message,
            data: data,
            time: time
        });
        logCollection.add(log);
        return log;
    }
    function writeLogToFile(log) {
        var stringifiedLog = JSON.stringify(log);
        var encodedLog = Ti.Utils.base64encode(stringifiedLog);
        logFile.write(encodedLog + "[logEnd]", true);
    }
    function websocketSetup() {
        var wsURI = Alloy.CFG.logger.webSocketURI ? Alloy.CFG.logger.webSocketURI : false;
        if (!wsURI) {
            alert("Provide a websocket URI in config.json");
            return;
        }
        tiws = require("net.iamyellow.tiws").createWS();
        tiws.addEventListener("open", function() {
            alert("opened");
            _self.info("Websocket opened");
            socketConnected = true;
            websocketSendMessage("THIS IS A TEST MESSAGE FROM TITANIUM");
        });
        tiws.addEventListener("close", function(ev) {
            Ti.API.info(ev);
            socketConnected = false;
        });
        tiws.addEventListener("error", function(ev) {
            Ti.API.error(ev);
        });
        tiws.addEventListener("message", function(ev) {
            Ti.API.log(ev);
            alert("WS Message: " + JSON.stringify(ev, null, 4));
        });
        tiws.open(wsURI);
    }
    function websocketSendMessage(message) {
        true === socketConnected && tiws.send(message);
    }
    function deleteOldLogFiles(numFilesToKeep) {
        numFilesToKeep = numFilesToKeep || 5;
        var logDir = Ti.Filesystem.getFile(logDirName);
        logFiles = _.initial(_.filter(logDir.getDirectoryListing(), function(filename) {
            return 0 == filename.indexOf("log-");
        }).sort(), numFilesToKeep);
        _.each(logFiles, function(filename) {
            var file = Ti.Filesystem.getFile(logDirName, filename);
            var deleted = file.deleteFile();
            Ti.API.info("[LOGGER] :: Log file " + file.name + (deleted ? " deleted." : " not deleted."));
        });
    }
    function writeToRemote() {
        remoteProvider = Alloy.CFG.logger.remoteProvider;
        Ti.API.info("[lLOGGER] :: Writing log to remote provider: " + remoteProvider);
        switch (remoteProvider) {
          case "acs":
            break;

          case "custom":
            break;

          default:
            alert("You have to edit config.json to supply your remote provider.");
        }
    }
    function acs(args) {
        args = args ? args : {};
        var level = args.level ? args.level : "V";
        var message = args.message ? args.message : "";
        var type = args.type ? args.type : "general";
        args.data ? args.data : {};
        var acsWS = require("ti.cloud.objects");
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
                _self.info("[LOGGER] : Created a Cloud Log on ACS", resp);
            },
            error: function(resp) {
                _self.warn("[LOGGER] : Cloud Log ERROR on ACS", resp);
            }
        };
        acsWS.createObject(obj);
    }
    function crittercism() {
        Alloy.CFG.logger.crittercism && Ti.App.addEventListener("login", setupCrittercism);
    }
    function setupCrittercism() {
        Ti.App.removeEventListener("login", setupCrittercism);
        var username = Alloy.Globals.userInfo.realName;
        crittercism.setUsername(username);
        var tags = Alloy.Globals.userInfo;
        crittercism.setMetaData(tags);
    }
    Ti.API.info("[LOGGER] :: Loaded");
    _self = this;
    _self.version = .1;
    var logCollection;
    var crittercism;
    var config = require("alloy").CFG.logger;
    var LOG_LEVEL = {
        OFF: 0,
        ALL: 1,
        TRACE: 2,
        DEBUG: 3,
        INFO: 4,
        WARN: 5,
        ERROR: 6,
        EVENT: 7,
        O: 0,
        A: 1,
        T: 2,
        D: 3,
        I: 4,
        W: 5,
        E: 6,
        V: 7
    };
    var logDirName = Titanium.Filesystem.applicationDataDirectory;
    var logFileName = "log-" + new Date().getTime() + ".txt";
    var logFile = Ti.Filesystem.getFile(logDirName, logFileName);
    deleteOldLogFiles();
    var tiws;
    var socketConnected = false;
    var collection = Backbone.Collection.extend({
        comparator: function(model) {
            return model.get("title");
        }
    });
    var model = Backbone.Model.extend({
        adapter: {
            type: "properties"
        }
    });
    _self.init = function() {
        logCollection = new collection();
        crittercism();
        true === Alloy.CFG.logger.webSocket && websocketSetup();
    };
    _self.reset = function() {
        logCollection.reset();
    };
    _self.setSource = function($) {
        ($.__widgetId ? "widgets/" + $.__widgetId + "/" : "") + "controllers/" + $.__controllerPath;
    };
    _self.getSource = function() {
    };
    _self.debug = function(message, data) {
        data = data || "";
        Ti.API.debug("[LOGGER] :: " + message + data);
        log("D", message, data);
    };
    _self.info = function(message, data) {
        data = data || "";
        Ti.API.info("[LOGGER] :: " + message + JSON.stringify(data, null, 4));
        log("I", message, data);
    };
    _self.warn = function(message, data) {
        data = data || "";
        Ti.API.warn("[LOGGER] :: " + message + JSON.stringify(data, null, 4));
        log("W", message, data);
    };
    _self.error = function(message, data) {
        data = data || "";
        Ti.API.error("[LOGGER] :: " + message + JSON.stringify(data, null, 4));
        _.isUndefined(Alloy.Globals.Menu) || (data.breadcrumbs = Alloy.Globals.Menu.getBreadcrumbs());
        log("E", message, data);
        Alloy.Globals.Menu.showInfoBar({
            title: "ERROR: " + message
        });
    };
    _self.event = function(args) {
        Ti.API.info("[LOGGER] :: log.event called with args: " + JSON.stringify(args, null, 4));
        args = args || {};
        var level = args.level ? args.level : "V";
        var message = args.message ? args.message : "";
        var type = args.type ? args.type : "event";
        args.eventId ? args.eventId : false;
        var remote = args.remote ? args.remote : false;
        var feature = void 0 !== args.feature ? args.feature : false;
        var noun = args.noun ? args.noun : "";
        var action = args.action ? args.action : "";
        var type = args.type ? args.type : "";
        var image = args.image ? args.image : "";
        var description = args.description ? args.description : "";
        "" === message && (message = noun + " " + action + " " + description + ".");
        var data = {
            message: message,
            noun: noun,
            action: action,
            type: type,
            image: image,
            description: description
        };
        true === remote && acs({
            level: level,
            message: message,
            type: type
        });
        log(level, message, data);
        feature && Ti.Analytics.featureEvent(message);
        analytics;
    };
    _self.backtrace = function(level, number) {
        number = number ? number : "all";
        level = level ? level : "ALL";
        _self.debug("[LOGGER] Getting Backtrace for last " + number + " " + level + " logs");
        return "all" === number ? logCollection.where({
            level: level
        }) : _.first(logCollection.where({
            level: level
        }), number);
    };
    _self.queryRemote = function(args) {
        args = args || {};
        var success = args.success || function() {};
        var error = args.error || function() {
            Ti.API.error("logging.js: queryRemote error resp: " + JSON.stringify(resp, null, 4));
        };
        var acsWS = require("ti.cloud.objects");
        var queryObj = {
            perPage: _.isUndefined(args.perPage) ? 1e3 : args.perPage,
            objectType: "cloudLog",
            success: function(resp) {
                success(resp);
            },
            error: function(resp) {
                error(resp);
            }
        };
        acsWS.queryObject(queryObj);
    };
    _self.getLogs = function() {
        return logCollection;
    };
};