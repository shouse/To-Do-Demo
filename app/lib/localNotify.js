/**
 * This library provides helper funcitons for doing Cross Platform local notifications.
 * The goal is to normalize the functions from iOS to Android and
 * to have a reusable, full-featured Local Notification solution
 *
 * @class Util.LocalNotify
 */

var androidNotificaiton;
var iosNotification;

// Android
var service;

init();

/**
 * Start this bad boy running
 * @method init
 */
function init(args) {
    if (OS_ANDROID) {
        //localNotifyAndroid(args);
    } else {
        // Check if the device is running iOS 8 or later, before registering for local notifications
        if (parseInt(Ti.Platform.version.split(".")[0]) >= 8) {
            Ti.App.iOS.registerUserNotificationSettings({
                types: [
                    Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
                    Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
                    Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
                ]
            });
        }
        addEventListenersIOS();
        //localNotifyIOS(args);
    }
}

/**
 * Add Local Notification Event Listener for iOS
 * @method addEventListenersIOS
 */
function addEventListenersIOS() {
    //@TODO Do we need to remove this at any time?

    // listen for a local notification event
    Ti.App.iOS.addEventListener('notification',function(e) {
        //@TODO If app is not active then ...
        log.info("[LocalNotify] Local Notification: " + JSON.stringify(e, null, 4));
        Alloy.Globals.Menu.showInfoBar({title: e.alertBody});

        if (Alloy.isTablet) {
            Alloy.Globals.Menu.setMainContent('TodoList');
            Alloy.Globals.Menu.setSideContent('TodoListDetail', {todo_id: e.userInfo.itemId});
        } else {
            // Open our ToDo List Detail controller
            Alloy.Globals.Menu.setMainContent('TodoListDetail', {todo_id: e.userInfo.itemId});
        }
    });
}

/**
 * Do Android Local Notifications
 * @see https://wiki.appcelerator.org/display/guides2/Android+Notifications
 * @method localNotifyAndroid
 */
function localNotifyAndroid(args) {
    args = args ? args : {};
    var contentTitle = args.contentTitle ? args.contentTitle : "Notification";
    var contentText = args.contentText ? args.contentText : "Notification Description";
    var number = args.number? args.number : 1;
    var when = args.when? args.when : new Date();
    var sound = args.sound ? args.sound : false;
    var notificationObj = {
        contentTitle: contentTitle,
        contentText : contentText,
        // Blank intent that will remove the notification when the user taps it
        // Do not override the default value of the 'flags' property
        contentIntent: Ti.Android.createPendingIntent({intent: Ti.Android.createIntent({})}),
        // Image file located at /platform/android/res/drawable/warn.png
        icon: Ti.App.Android.R.drawable.warn,
        number: number,
        when: when
    }

    if (sound) {
        // Sound file located at /platform/android/res/raw/sound.wav
        //sound: Ti.Filesystem.getResRawDirectory() + 'sound.wav'
        notificationObj.sound = sound;
    }

    androidNotificaiton = Titanium.Android.createNotification();
}

/**
 * Schedule a Native Android Alarm / Service using the Android Alarm Manager
 * @method scheduleAndroidNative
 */
function scheduleAndroidNative(args) {
    //@TODO Use args instead of hardcoded
    //Import bencoding alarmmanager module into our Titanium App
    var alarmModule = require('bencoding.alarmmanager');
    var alarmManager = alarmModule.createAlarmManager();

    var isRunning = Ti.App.Properties.getBool("service_running", false);//get service running bool status
    if (isRunning) {
        Ti.API.info('service is running');
        alert("service is running");
    } else {
        Ti.API.info('service is not running');
        alert('service is not running');
        alarmManager.addAlarmService({
            //your service name as in AndroidManifest.xml
            service : 'com.stevenhouse.todo.notificationService',
            hour : new Date().getHours(),
            repeat : 'daily'
        });
    }
}

/**
 * Do iOS Local Notifications
 * @see http://docs.appcelerator.com/titanium/3.0/#!/guide/iOS_Local_Notifications
 * @method localNotifyIOS
 */
function localNotifyIOS() {
    iosNotification = require('bencoding.localnotify');

    // Check if the device is running iOS 8 or later, before registering for local notifications
    if (parseInt(Ti.Platform.version.split(".")[0]) >= 8) {
        Ti.App.iOS.registerUserNotificationSettings({
            types: [
                Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
                Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
                Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
            ]
        });
    }

}

/**
 * Send notifications
 * @method send
 */
exports.send = function() {
    if (OS_ANDROID) {
        sendAndroid();
    } else {
        sendIOS();
    }
}

/**
 * Send Android notification
 */
function sendAndroid() {
    androidNotificaiton.send();
}

/**
 * Send iOS notification
 */
function sendIOS() {

}

exports.schedule = function(args){
    if (OS_ANDROID) {
        //scheduleAndroid();
        scheduleAndroidNative(args);
    } else {
        scheduleIOS(args);
    }
}

/**
 * Create an Android Service Intent
 */
function createServiceIntent() {
    var notificationServiceArgs = {
        interval: 30000,
        //serviceUrl: "localNotify.js",
        serviceUrl: "notificationService.js",
        extras: [
            {name:'taskName', value: 'To-Do'},
            {name:'taskDesc', value: 'Something to-do'},
            {name:'taskDue', value: new Date()}
        ]
    };

    require("createService").createServiceAndroid(notificationServiceArgs);
}

/**
 * Schedule Android notifications
 * @scheduleAndroid
 */
function scheduleAndroid() {
    // Retrieves a reference to the service and its intent
    service = Ti.Android.currentService;
    serviceIntent = service.getIntent();
    // Information passed in from the intent
    timestamp = new Date(serviceIntent.getStringExtra('timestamp'));
    // Wait for right moment to create and send the notification
    if (new Date() > timestamp) {
        // Create a notification
        localNotifyAndroid();
        // Send the notification
        Ti.Android.NotificationManager.notify(1, androidNotificaiton);
        // Stop the service once the notification is sent
        Ti.Android.stopService(serviceIntent);
    }
}

/**
 * Schedule iOS notifications
 * @scheduleIOS
 */
function scheduleIOS(args) {
    args = args ? args : {};

    //alert("[localNotify] scheduleIOS args: " + JSON.stringify(args, null, 4));

    // Alert will display 'slide to update' instead of 'slide to view' or 'Update' instead of 'Open' in the alert dialog
    var alertAction = args.alertAction ? args.alertAction : 'update';
    // Alert will display the following message
    var alertBody = args.alertBody ? args.alertBody : "Notification"
    // The badge value in the icon will be changed to 1
    var badge = args.badge ? args.badge : false;
    // Alert will be sent in three seconds
    var date = args.date ? args.date : new Date(new Date().getTime() + 10000);
    // The sound file to be played
    var sound = args.sound ? args.sound : false;
    // The following data object is passed to the application
    var userInfo = args.data ? args.data : {}
    var notificationObj = {
        alertAction: alertAction,
        alertBody: alertBody,
        date: date,
        userInfo: userInfo
    };

    if (badge) {
        notificationObj.badge = badge;
    }
    if (sound) {
        notificationObj.sound = sound;
    }
    // The following code snippet schedules an alert to be sent within specified time
    iosNotification = Ti.App.iOS.scheduleLocalNotification(notificationObj);

}

/**
 * Update Android notification
 * @method updateNotificationAndroid
 */
function updateNotificationAndroid() {
    // Update the title and message but keep the existing intent
    notification.setLatestEventInfo('Wake me up', 'Before you go go', notification.contentIntent);
}

/**
 * @method monitorLocalNotificationsIOS
 */
function monitorLocalNotificationsIOS() {
    // Fired when the application receives an incoming local notification when it's in the foreground
    Ti.App.iOS.addEventListener('notification', function(e) {

        // Process custom data
        if (e.userInfo && "url" in e.userInfo){
            httpGetRequest(e.userInfo.url);
        }

        // Reset the badge value
        if (e.badge > 0) {
            Ti.App.iOS.scheduleLocalNotification({
                date: new Date(new Date().getTime()),
                badge: -1
            });
        }
    });
}

/**
 * Cancel Local Notifications
 * @method cancelLocalNotificationsIOS
 */
function cancelLocalNotificationIOS() {
    // Either one of these methods will cancel the notification
    notification.cancel();

    /*
    var notification = Ti.App.iOS.scheduleLocalNotification({
        // Create an ID for the notification
        userInfo: {"id": "foo"},
        alertBody: "Test? Test?",
        date: new Date(new Date().getTime() + 3000)
    });
    Ti.App.iOS.cancelLocalNotification("foo");
    */
}

/**
 * Cancel Local Notification for Android
 * @method cancelLocalNotificationAndroid
 * @param type
 */
function cancelLocalNotificationAndroid(type) {
    type = type ? type : "all";
    if (type == "all") {
        // Remove all notifications sent by the application
        Titanium.Android.NotificationManager.cancelAll();
    } else {
        // Remove a specific notification sent by the application
        Titanium.Android.NotificationManager.cancel(1);
    }
}

/**
 * @method createServiceAndroid
 */
function createServiceAndroid() {
    var intent = Ti.Android.createServiceIntent({
        url : 'localNotify.js'
    });
    intent.putExtra('title' , 'Richard III');
    intent.putExtra('message' , 'Now is the winter of our discontent...');
    intent.putExtra('timestamp', new Date(new Date().getTime() + 30 * 1000));
    intent.putExtra('interval', 5000);
    Ti.Android.startService(intent);
}
/**
 Other ANDROID customizations
 defaults: Set to one of the following constants or bitwise-OR the values together to use the device's default notification settings:
    Titanium.Android.DEFAULT_ALL: Use all of the device's default settings.
    Titanium.Android.DEFAULT_SOUND: Use the device's default notification sound.
    Titanium.Android.DEFAULT_VIBRATE: Use the device's default vibrate setting.
    Titanium.Android.DEFAULT_LIGHTS: Use the device's default LED setting.
 deleteIntent: Intent to execute if the user taps the clear all notifications button in the notification drawer.
 flags: Additional flags to set on the notification to modify its behavior.  Set to one of the following constants or bitwise-OR the constants together:
    Titanium.Android.FLAG_AUTO_CANCEL: Clear the notification if the user taps it. Requires that the contentIntent property to be set or else the notification will not be cleared.
    Titanium.Android.FLAG_INSISTENT: Repeat the sound until the notification is canceled or removed from the notification drawer.
    Titanium.Android.FLAG_NO_CLEAR: Do not remove the notification from the notification drawer if the user taps the remove all notification button.
    Titanium.Android.FLAG_ONGOING_EVENT: Indicates if the notification is in reference to an ongoing event.
    Titanium.Android.FLAG_ONLY_ALERT_ONCE: If the notification is present in the notification drawer, do no replay the sound, vibrate or flash the LED again.
    Titanium.Android.FLAG_SHOW_LIGHTS: Set if you want to use the LED with the notification.  Need to also set the notification's LED properties.  Note that most devices will not allow you to control the LED.
 priority: set to one of the following constants to determine where the notification is displayed in the drawer.  Requires Titanium SDK 4.0.0 and greater and only works on devices running Android 4.1 and greater.
    Titanium.Android.PRIORITY_MAX: Use for urgent or time-critical notifications, for example, turn-by-turn directions or emergency alerts.  Notifications will appear at the very top of the notification drawer.
    Titanium.Android.PRIORITY_HIGH: Use for high priority notifications like real-time chat messages.
    Titanium.Android.PRIORITY_DEFAULT: Default priority if it does no fit into another priority category.
    Titanium.Android.PRIORITY_LOW: Use for low priority notifications like software updates.
    Titanium.Android.PRIORITY_MIN: Use for expired events.  Note that the user will not be alerted to the notification (sound, vibration, etc.) and a notification icon will not appear in the status bar, but the notification will appear in the drawer.
    tickerText: Text to display in the status bar when the notification first appears. This features does not work on devices running Android 5.0 (API 21) and later.
 */