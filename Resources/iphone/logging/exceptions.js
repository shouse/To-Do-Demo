function init() {}

function parseIosException(e) {
    try {
        if (e.backtrace) {
            var backTrace = generateBactraceArrayIos(e.backtrace);
            Alloy.Globals.log.error("[EXCEPTION] " + e.name + " => " + e.message, {
                error: e.name + " => " + e.message,
                location: "Line => " + e.line + "File => " + backTrace.btFirst,
                backtrace: backTrace.btString
            });
            Alloy.Globals.log.warn("e.message! ", {
                e: e
            });
        }
    } catch (err) {
        err && alert("Caught Exception error: " + JSON.stringify(err, null, 4));
    }
}

function parseAndroidException(e) {
    Alloy.Globals.log.error("[EXCEPTION] ", e);
    alert("Exception Occured:\n" + JSON.stringify(e, null, 4));
    Alloy.Globals.log.error("[EXCEPTION] " + e.name + " => " + e.message, {
        error: e.title + " => " + e.message,
        location: "File: " + e.sourceName + "Line #: " + e.line,
        logcat: generateBactraceArrayAndroid()
    });
    return;
}

function generateBactraceArrayAndroid() {
    var Logger = require("yy.logcatcher");
    var logcat = Logger.getDeviceLogs();
    var re = /(\([0-9]{1,6})/g;
    var matches = logcat.split(re);
    _.each(matches, function(match) {
        alert(match);
    });
    return {
        logArray: matches,
        logString: logcat,
        logFirst: matches[0]
    };
}

function generateBactraceArrayIos(backtrace) {
    var backtraceArray = backtrace.split("#");
    var backTraceNewString = "";
    var firstFile = true;
    var firstString;
    _.each(backtraceArray, function(filename) {
        if ("" !== filename && filename) {
            var errIndex = filename.substring(0, 2);
            var fileLong = filename.substring(filename.indexOf("file6"), filename.length - 2);
            var fileShort = fileLong.substring(filename.indexOf("alloy"), fileLong.length - 2);
            backTraceNewString = backTraceNewString + "#" + errIndex + ": " + fileShort + "\n";
            if (firstFile) {
                firstString = backTraceNewString;
                firstFile = false;
            }
        } else ;
    });
    return {
        btArray: backtraceArray,
        btString: backTraceNewString,
        btFirst: firstString
    };
}

function displayException() {}

init();

exports.parseException = function(e) {
    parseIosException(e);
};