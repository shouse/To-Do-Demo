/**
 * This is the controller file for "LogDetail"
 *
 * @class Widget.Logger.LogDetail
 * @author Steven House ,steven.m.house@gmail.com.
 */

_ = require('alloy/underscore')._;
var moment = require('moment');

// Include logging utility
var log = Alloy.Globals.log;

// Get the message for the log
var args = arguments[0] || {};
var message = args.message;

var logs = log.getLogs();
var currentLog = logs.findWhere({
    message: message
}).toJSON();

init();
addEventListeners();

/**
 * Start the controller running
 * @method init
 * @return
 */
function init() {
    var colors = {
        E: '#EE0000',
        W: '#E48743',
        I: '#EEEEEE',
        D: '#00DD00'
    };
    $.viewLogType.backgroundColor = colors[currentLog.level] || '#FFF';
    $.labelLogType.text = currentLog.level;
    $.labelDescription.text = currentLog.message;
    $.labelDate.text = moment(currentLog.time).format(
        'MMMM Do YYYY, h:mm:ss a');

    $.labelDetail.text = JSON.stringify(currentLog.data, null, 4);
}

/**
 * Any cleanup the controller needs
 * @method cleanup
 * @return
 */
$.viewMain.cleanup = function() {
    log.info('[LogDetail] : Cleanup');
    $.destroy();
    $.off();
};

/**
 * Add event listeners for the ListView.
 * @method addEventListeners
 * @return
 */
function addEventListeners() {

}
