/**
 * This is the main controller for the logger widget
 * @Class Widget.Logger
 * @author Steven House ,steven.house@sprint.com.
 *
 */

_ = require('alloy/underscore')._;
var moment = require('moment');
// Include logging utility
var log = Alloy.Globals.log;

addEventListeners();
updateListView();

/**
 * Add event listeners;
 */
function addEventListeners() {
    $.buttonFilterAll.addEventListener('click', function() {
        updateListView();
    });
    $.buttonFilterDebug.addEventListener('click', function() {
        updateListView('D');
    });
    $.buttonFilterInfo.addEventListener('click', function() {
        updateListView('I');
    });
    $.buttonFilterWarn.addEventListener('click', function() {
        updateListView('W');
    });
    $.buttonFilterError.addEventListener('click', function() {
        updateListView('E');
    });
}

/**
 * Show more info
 * @method listViewItemClick
 * @param {e} itemClicked
 */
function listViewItemClick(e) {
    //alert(e.itemId);
    // Open the detail page / pane for the log information
    var detail = Widget.createController('LogDetail', {
        message: e.itemId
    }).getView();

    if (Alloy.isTablet) {
        $.viewContainerMain.width = "50%";
        $.viewDetailTablet.add(detail);
    } else {
        // @TODO Set the back botton
        $.viewDetail.add(detail);
        $.viewDetail.height = Ti.UI.FILL;
    }
}

/**
 * Display the SEs
 * @method updateListView
 */
function updateListView(level) {
    level = _.isUndefined(level) ? 'all' : level;
    levels = ['D', 'I', 'W', 'E'];

    //var logs = log.logCollection.toJSON();
    var logs = log.getLogs();
    logs = logs.toJSON();

    var logsToDisplay = _.filter(logs, function(log) {
        return (level == 'all') || levels.indexOf(log.level) >=
            levels.indexOf(level);
    });

    logsToDisplay = _(logsToDisplay).sortBy(function(log) {
        return log.time;
    }).reverse();

    var colors = {
        E: '#EE0000',
        W: '#E48743',
        I: '#EEEEEE',
        D: '#00DD00'
    };

    // Create an array of ListDataItems.
    var data = _.map(logsToDisplay, function(log) {
        return {
            template: 'templateMain',
            labelLogType: {
                text: log.level,
                backgroundColor: colors[log.level] || '#FFF'
            },
            labelDescription: {
                text: log.message
            },
            labelDate: {
                text: moment(log.time).fromNow()
            },
            properties: {
                searchableText: log.message,
                itemId: log.message
            }
        };
    });

    // Create the ListSection to use from the array of ListDataItems.
    var listSection = Titanium.UI.createListSection({
        items: data
    });

    $.listView.sections = [listSection];
}

/**
 * Display the Remote Logs
 */
function updateListViewRemote(logs) {
    var level = "E";
    //level = _.isUndefined(level) ? 'all' : level;
    levels = ['D', 'I', 'W', 'E'];

    //var logs = log.logCollection.toJSON();

    var logsToDisplay = _.filter(logs, function(log) {
        return (level == 'all') || levels.indexOf(log.level) >=
            levels.indexOf(level);
    });

    logsToDisplay = _(logsToDisplay).sortBy(function(log) {
        return log.created_at;
    }).reverse();

    var colors = {
        E: '#EE0000',
        W: '#E48743',
        I: '#EEEEEE',
        D: '#00DD00'
    };

    // Create an array of ListDataItems.
    var data = _.map(logsToDisplay, function(log) {
        return {
            template: 'templateRemote',
            labelLogType: {
                text: log.level,
                backgroundColor: colors[log.level] || '#FFF'
            },
            labelDescription: {
                text: log.message
            },
            labelDate: {
                //text: moment(log.created_at).format(
                //'MMMM Do YYYY, h:mm:ss a')

                text: moment(log.created_at).fromNow()
            },
            labelExtra: {
                text: log.appName + " ver: " + log.appVer +
                    ", ADID: " + log.adid
            },
            properties: {
                searchableText: log.message,
                itemId: log.message
            }
        };
    });

    // Create the ListSection to use from the array of ListDataItems.
    var listSection = Titanium.UI.createListSection({
        items: data
    });

    $.listView.sections = [listSection];
}

/**
 * Delete the local logs.
 * @method deleteLogs
 */
function deleteLogs() {
    // Delete the local logs.
    log.reset();
    // Update the view.
    updateListView();
    // Change the window title to reflect what is displayed.
    $.labelTitle.text = 'Local Device Log';
}

/**
 * This toggles the display between local and remote logs.
 * @method toggleLocalRemote
 */
function toggleLocalRemote() {
    switch ($.labelTitle.text) {
        case 'Local Device Log':
            // Switch to remote logs.
            log.queryRemote({
                success: function(resp) {
                    // Time to display logs
                    updateListViewRemote(resp.cloudLog);
                },
                error: function(resp) {
                    log.error(
                        'logging.js: queryRemote error resp: ' +
                        JSON.stringify(resp, null, 4));
                }
            });

            // Change the window title to reflect what is displayed.
            $.labelTitle.text = 'Remote Device Log';
            break;

        case 'Remote Device Log':
            // Switch to local logs.
            updateListView();

            // Change the window title to reflect what is displayed.
            $.labelTitle.text = 'Local Device Log';
            break;
    }
}

/**
 * This invokes the Login window to slide up, covering the other display.
 * It currently accepts args but doesn't do anything with them
 * @method show
 * @param {Object} args
 */
exports.show = function(args) {
    args = args || {};
    var title = 'Local Device Log';

    if (OS_ANDROID) {
        $.labelTitle.text = title;

        $.win.orientationModes = [Ti.UI.PORTRAIT];
        $.win.open({
            modal: true,
            navBarHidden: true,
            animated: true,
            activityEnterAnimation: Ti.App.Android.R.anim.slide_in_bot,
            activityExitAnimation: Ti.App.Android.R.anim.slide_out_bot
        });
    } else {
        $.win.title = title;

        $.win.open({
            modal: true,
            navBarHidden: false,
            animated: true,
            modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN,
            modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL
        });
    }

    updateListView('I');
};

/**
 * This dismisses the Logging window
 * @method dismiss
 */
function dismiss() {
    if (OS_ANDROID) {
        $.win.close({
            animated: true,
            activityEnterAnimation: Ti.App.Android.R.anim.slide_in_bot,
            activityExitAnimation: Ti.App.Android.R.anim.slide_out_bot
        });
    } else {
        $.win.close({
            animated: true
        });
    }
}
