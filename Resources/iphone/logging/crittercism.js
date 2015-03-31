function init() {
    app_id = "android" == Ti.Platform.osname ? Alloy.CFG.logger.crittercismIOSAppId : Alloy.CFG.logger.crittercismAndroidAppId;
    Crittercism.start({
        appID: app_id,
        customAppVersion: "testing_version_1",
        setLogcatReportingEnabled: true
    });
}

var Crittercism = require("crittercism");

log.warn("Crittercism:\n" + JSON.stringify(Crittercism, null, 4));

var app_id;

var crumbCount = 0;

init();

exports.setUsername = function(userName) {
    Crittercism.setUsername(userName);
};

exports.setMetaData = function(tags) {
    Crittercism.setMetaData(tags);
};

exports.causeCrash = function() {
    Crittercism.crash("[Testing a crash]");
};

exports.logHandledException = function(name, reason) {
    Crittercism.logHandledException({
        name: name ? name : "SAMPLE EXCEPTION",
        reason: reason ? reason : "Testing an exception"
    });
};

exports.leaveBreadCrumb = function(message) {
    crumb_count += 1;
    var breadcrumb = "[" + crumb_count + "] " + message;
    Crittercism.leaveBreadcrumb(breadcrumb);
};