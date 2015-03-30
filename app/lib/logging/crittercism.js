/**
 * This integrates crittercism with Titanium and with our logging platform.
 * @class Logging.crittercism
 */

var Crittercism = require('crittercism'); // Initialize the Crittercism module

log.warn("Crittercism:\n" + JSON.stringify(Crittercism, null, 4));

// Start it up!
var app_id;
var crumbCount = 0;
init()

/**
 *
 * @method init
 */
function init() {
  if (Ti.Platform.osname == 'android'){
    app_id = Alloy.CFG.logger.crittercismIOSAppId;
  } else {
    app_id = Alloy.CFG.logger.crittercismAndroidAppId;
  }

  // Initialize the library
  Crittercism.start({
    appID: app_id,
    customAppVersion: "testing_version_1", // Optional (Available on Android Only - Will be ignored on iOS)
    setLogcatReportingEnabled: true // Optional (Available on Android Only - Will be ignored on iOS)
  });

}

/**
 * Set this Users Name (can be used to lookup a user in Crittercism)
 * This can be set at any time and setting it again will override the last username
 */
exports.setUsername = function(userName) {
  Crittercism.setUsername(userName);
}

/**
 * Set metadata for the user.
 * This can be set at any time and setting it again will override the previous value
 * @method setMetaData
 * @param {Object} tags Array of objects with structure {tag_name: tag_value}
 */
exports.setMetaData = function(tags) {
  //var tags = {
    //tag_1: "tag_1_value",
    //tag_2: false,
    //test_3: ""
  //}
  Crittercism.setMetaData(tags);
}

/**
 * Test the response to a crash by causing one
 * NOTE: It's possible that this doesn't crash the app 100% of the time :(
 * @method causeCrash
 */
exports.causeCrash = function(){
  Crittercism.crash("[Testing a crash]");
}

/**
 * Test the response to a handled exception by causing one
 * @method logHandledException
 */
exports.logHandledException = function(name, reason){
  Crittercism.logHandledException({
    name: name ? name : "SAMPLE EXCEPTION",
    reason: reason ? reason : "Testing an exception"
  });
}

/**
 * Test the response to a handled exception by causing one
 * @method leaveBreadCrumb
 */
exports.leaveBreadCrumb = function(message) {
  crumb_count += 1;
  var breadcrumb = "[" + crumb_count + "] " + message;
  Crittercism.leaveBreadcrumb(breadcrumb);
}
