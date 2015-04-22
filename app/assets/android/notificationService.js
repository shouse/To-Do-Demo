/**
 * This file is responsible for Android Service invocation
 * @Class Services.notificationService
 * @author Steven House <steven.m.house@gmail.com>
 * @see Following from http://stackoverflow.com/questions/8404596/appcelerator-titanium-localnotification-for-android
 */

var service = Ti.Android.currentService;
var serviceIntent = service.getIntent();

var taskName = serviceIntent.getStringExtra('taskName');
var taskDesc = serviceIntent.getStringExtra('taskDesc');
var taskDue = serviceIntent.getStringExtra('taskDue');

Ti.App.fireEvent('notificationService', {taskName: taskname, taskDesc: taskDesc, taskDue: taskDue});

setNotification();

Ti.Android.stopService(serviceIntent);

/**
 * Set Notification for Android
 * @TODO Can this be moved to a lib file?  I don't know if it's accessable then
 * @param alarm
 */
function setNotification(alarm) {
    var activity = Ti.Android.currentActivity;
    var intent = Ti.Android.createIntent({
        action : Ti.Android.ACTION_MAIN,
        className : 'com.stevenhouse.todo.TodoActivity',
        flags : Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED | Ti.Android.FLAG_ACTIVITY_SINGLE_TOP
    });
    intent.addCategory(Titanium.Android.CATEGORY_LAUNCHER);

    var pending = Ti.Android.createPendingIntent({
        activity : activity,
        intent : intent,
        type : Ti.Android.PENDING_INTENT_FOR_ACTIVITY,
        flags : Ti.Android.FLAG_ACTIVITY_NO_HISTORY
    });

    var notificationOptions = {
        contentIntent : pending,
        contentTitle : 'Whats Today - Featured Event',
        contentText : 'Tap to see todays featured event',
        tickerText : 'Whats Today Event Notification!',
        //when : new Date().getTime(),
        icon : Ti.App.Android.R.drawable.appicon,
        flags : Titanium.Android.FLAG_AUTO_CANCEL | Titanium.Android.FLAG_SHOW_LIGHTS | Titanium.Android.FLAG_INSISTENT,
        sound : Titanium.Android.NotificationManager.DEFAULT_SOUND
    };

    var notification = Ti.Android.createNotification(notificationOptions);
    Ti.Android.NotificationManager.notify(1, notification);
    Ti.App.Properties.setBool("service_running", true);

    Ti.Media.vibrate([0, 100, 100, 200, 100, 100, 200, 100, 100, 200]);
}