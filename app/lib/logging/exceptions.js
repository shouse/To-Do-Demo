/**
 * @class Logging.exceptions
 * This class is a framework for handling run time exceptions.
 * @author Sprint <steven.m.house@gmail.com>
 */

init();

/**
 * Do any necessary initialization here
 * @method init
 */
function init() {
    // ...
}

/**
 * Parse a JS Run-time Exception.  i.e. Titanium's Red Screen Of Death
 * @method parseExcpetion
 * @param {Object} e An object containing exception information
 */
exports.parseException = function(e) {
    // Figure out how to handle Android... something wasn't working...
    if (Titanium.Platform.name == 'android') {
        //parseAndroidException(e);
    } else {
        parseIosException(e);
    }

};


/**
 * Parse iOS run time exceptions
 * @method parseIosException
 */
function parseIosException(e) {
    try {
        if (e.backtrace) {
            var backTrace = generateBactraceArrayIos(e.backtrace);

            Alloy.Globals.log.error("[EXCEPTION] " + e.name + " => " + e.message, {
                error: e.name + " => " + e.message,
                location: "Line => " + e.line + "File => " +
                    backTrace.btFirst,
                backtrace: backTrace.btString
            });
            Alloy.Globals.log.warn("e.message! ", {
                e: e
            });
        }

    } catch (err) {
        if (err) {
            alert('Caught Exception error: ' + JSON.stringify(err, null, 4));
        }

    }
}

/**
 * Parse Android run time exceptions
 * @method parseAndroidException
 */
function parseAndroidException(e) {
    /*
    android: message, lineOffset, line, title, lineSource, sourceName
    */
    Alloy.Globals.log.error("[EXCEPTION] ", e);
    alert("Exception Occured:\n" + JSON.stringify(e, null, 4));

    Alloy.Globals.log.error("[EXCEPTION] " + e.name + " => " + e.message, {
        error: e.title + " => " + e.message,
        location: "File: " + e.sourceName + "Line #: " + e.line,
        logcat: generateBactraceArrayAndroid()


    });

    return;
}

/**
 * A different handler for Android
 * @method generateBactraceArrayAndroid
 */
function generateBactraceArrayAndroid() {
    //Let's get the logcat to attach
    var Logger = require("yy.logcatcher");

    var logcat = Logger.getDeviceLogs();
    //var logcat = "(7051)asdfasdfasdf asldfkj alyseirajklsdf (7051)asdfasdfasdf asldfkj alyseirajklsdf (7051)asdfasdfasdf asldfkj alyseirajklsdf (7051)asdfasdfasdf asldfkj alyseirajklsdf";

    var re = /(\([0-9]{1,6})/g;
    var matches = logcat.split(re);

    //
    _.each(matches, function(match) {
        alert(match);
    });

    return {
        logArray: matches,
        logString: logcat,
        logFirst: matches[0]
    };
}


/**
 * Generate an backtrace array
 * @method generateBactraceArray
 */
function generateBactraceArrayIos(backtrace) {

    var backtraceArray = backtrace.split("#");
    var backTraceNewString = '';
    var firstFile = true;
    var firstString;

    _.each(backtraceArray, function(filename, index) {
        if (filename === '' || !filename) {

        } else {
            var errIndex = filename.substring(0, 2);
            var fileLong = filename.substring(filename.indexOf(
                "file" +
                6), filename.length - 2);
            var fileShort = fileLong.substring(filename.indexOf(
                    "alloy"),
                fileLong.length - 2);
            backTraceNewString = backTraceNewString + "#" +
                errIndex + ": " + fileShort + "\n";

            if (firstFile) {
                firstString = backTraceNewString;
                firstFile = false;
            }
        }

    });

    return {
        btArray: backtraceArray,
        btString: backTraceNewString,
        btFirst: firstString
    };
}

/**
 * Parse a JS Run-time Exception.  i.e. Titanium's Red Screen Of Death
 * @method parseExcpetion
 */
function displayException(e) {

}
