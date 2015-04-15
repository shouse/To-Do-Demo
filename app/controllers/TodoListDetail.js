/**
 * This is the controller file for "TodoDetail"
 *
 * @class Controller.TodoListDetail
 * @author Steven House
 * @email steven.m.house@gmail.com
 */

// Include logging utility
var log = Alloy.Globals.log;
log.info("Opened TodoListDetails");

var menu = Alloy.Globals.Menu;

var args = arguments[0] || {};
var todo_id = args.todo_id || "";

var todo = Alloy.Collections.instance("ToDo");

var todoItem = _.first(todo.where({ todo_id: parseInt(todo_id) }));

var galleryExists = false;
var checkbox;
var moment = require('moment');

init();

/**
 * Start the controller running
 * @method init
 * @return
 */
function init() {
    setupNav();
    addEventListeners();
    addCheckbox();

    $.labelTitle.text = todoItem.get("name").toUpperCase();

    if (todoItem.get("content") && todoItem.get("content").length > 0) {
        $.labelContent.text = todoItem.get("content");
        $.viewContentContainer.height = Ti.UI.SIZE;
    } else {
        $.viewContentContainer.height = 0;
    }

    if (hasDueDate()) {
        $.labelDueDate.text = "Due " + moment(todoItem.get('dueDateDateTime')).fromNow();
    }

    if (hasReminder()) {
        var reminderDate = todoItem.get('reminderDateTime');
        $.labelReminder.text = "Reminder set: " + moment(reminderDate).fromNow();
    }
}

/**
 * Any cleanup the controller needs
 * @method cleanup
 * @return
 */
$.viewMain.cleanup = function() {
    $.destroy();
    $.off();
};

/**
 * Setup the Nav Bar
 * @method setupNav
 */
function setupNav() {
    menu.setTitle("Detail View");
    // Add menu
    menu.setButton({
        button: 'l1',
        image : "/images/navigation/ic_chevron_left_white_48dp.png",
        success: function() {
            log.debug('[Maintain] : Redirecting to HomePage');
            menu.setMainContent('TodoList');
        }
    });

    // Add menu
    menu.setButton({
        button: 'r1',
        image : "/images/action/ic_mode_edit_white_48dp.png",
        success: function() {
            log.debug('[Maintain] : Redirecting to Edit Page');
            menu.setMainContent('TodoListNewEdit', {todo_id: todoItem.get('todo_id')});
        }
    });

    menu.showButton('l1');
    menu.showButton('r1');
    menu.hideButton('r2');
}

/**
 * Add event listeners for the ListView.
 * @method addEventListeners
 * @return
 */
function addEventListeners() {
    // Set A Due Date
    $.viewDueDate.addEventListener('click', setDueDate);

    // Capture a photo
    $.viewPhoto.addEventListener('click', captureImage);

    // Share the task
    $.viewShare.addEventListener('click', shareTask);

    // Share the task
    $.viewGallery.addEventListener('click', function(){
        menu.setMainContent('TodoListGallery', {todo_id: todoItem.get("todo_id")});
    });

    // Schedule a reminder
    $.viewSetReminder.addEventListener('click', setReminder);

    $.viewTags.addEventListener('click', setTags);
}

/**
 * This sets the Local Notification for the reminder
 * @method setLocalNotification
 */
function setLocalNotification() {
    // @TODO normalize between iOS and Android
    var dateString = todoItem.get('dueDateDateTime') ? " is due at " + moment(todoItem.get('dueDateDateTime')).format('l') : "";
    var notifyArgs = {
        alertBody: "Task Reminder: " + todoItem.get('name') + dateString,
        badge: 1,
        data: {
            taskName : todoItem.get('name'),
            taskDesc : todoItem.get('content'),
            taskDue : todoItem.get('due'),
            itemId : todoItem.get('todo_id')
        }
    };

    var notify = require('localNotify');
    notify.schedule(notifyArgs);
}

/**
 * Add a checkbox
 * @method checkboxStuff
 */
function addCheckbox() {
    checkbox = Alloy.createWidget("sh.checkbox", {height: 35, width: 35, value: todoItem.get("status")});
    //checkbox.value = false;

    // Create a handler for the change event.
    checkbox.on('change', function(e) {
        //toggleStatus(checkbox.value);
        toggleStatus();
    });
    // Add the checkbox to the view.
    $.viewCheckboxContainer.add(checkbox.getView());
}

/**
 * Handles the done click event listener
 * @method done
 * @return
 */
function toggleStatus() {
    log.warn("[Task Details] toggling status to " + !todoItem.get("status"));
    if (todoItem.get("status") === 0){
        todoItem.set({
            status: 1,
            completedDateTime: new Date().toISOString(),
            lastModifiedDateTime: new Date().toISOString()
        });
        menu.showInfoBar({title: "Keep Up The Good Work!"});
    } else {
        todoItem.set({
            status: 0,
            completedDateTime: undefined,
            lastModifiedDateTime: new Date().toISOString()
        });
    }

    todoItem.save();
    todo.fetch();
    log.warn("TODO: ", todo);
}

/**
 * @method setTags
 */
function setTags() {
    alert('Not Implemented yet.');
}

/**
 * @method getTags
 */
function getTags() {

}

/**
 * See if is Done
 * @method isDone
 */
function isDone() {
    return todoItem.get('status');
}

/**
 * Checks if item has dueDate and changes UI based on this
 * @method hasDueDate
 */
function hasDueDate() {
    return todoItem.get('dueDateDateTime');
}

/**
 * Checks if item has dueDate and changes UI based on this
 * @method hasDueDate
 */
function hasReminder() {
    return todoItem.get('reminderDateTime');
}

/**
 * Checks if item has photos and changes UI based on this
 * @method hasPhoto
 */
function hasPhoto() {
    return todoItem.get('hasPhoto');
}

/**
 * Invoke the calendar module to set a date
 * @method setDueDate
 * @return
 */
function setDueDate() {
    log.debug('[TodoDetail] : setDueDate');

    if (Ti.Platform.osname === 'android') {
        var now = new Date();
        var month = now.getUTCMonth() + 1;
        var day = now.getUTCDate();
        var year = now.getUTCFullYear();

        var Dialogs = require("yy.tidialogs");
        // Create the dialog

        // value property is priority
        var picker = Dialogs.createDatePicker({
            okButtonTitle: 'Set',         // <-- optional, default "Done"
            cancelButtonTitle: 'Cancel',  // <-- optional, default "Cancel"
            value: new Date(),            // <-- optional
            day: day,                     // <-- optional
            month: month,                 // <-- optional - java/javascript month, i.e. August
            year: year                    // <-- optional
        });

        // Add the click listener
        picker.addEventListener('click',function(e){
            if (!e.cancel) {
                saveDate(e.value, "Due Date");
            } else {
                // Android Cancel Date
            }
        });

        // Cancel listener
        picker.addEventListener('cancel', function() {
            Ti.API.info("dialog was cancelled");
        });

        // open it
        picker.show();
    }
    // iOS will use different date picker
    else {
        $.viewRow.height = 0;

        var calendar = require('ti.sq');

        var now = new Date();
        var month = now.getUTCMonth() + 1;
        var day = now.getUTCDate();
        var year = now.getUTCFullYear();

        var minYear = year - 1;
        var maxYear = year + 1;

        var calValue = {
            month: month,
            day: day,
            year: year
        };
        var calMin = {
            month: month,
            day: day,
            year: minYear
        };
        var calMax = {
            month: month,
            day: day,
            year: maxYear
        };

        var calendarView = calendar.createView({
            height: Ti.UI.FILL,
            width: Ti.UI.FILL,
            top: 0,
            left: 10,
            right: 10,
            //bottom: 65,
            pagingEnabled: true,
            value: {
                month: month,
                day: day,
                year: year
            },
            min: {
                month: month,
                day: 1,
                year: year
            },
            max: {
                month: month,
                day: day,
                year: maxYear
            }
        });

        $.viewMain.add(calendarView);

        calendarView.addEventListener('dateChanged', function(d) {
            var opts = {
                options: ['Yep!', 'Changed my mind'],
                selectedIndex: 0,
                destructive: 0,
                title: 'Set Due Date for ' + calendarView.value.month +
                '/' + calendarView.value.day + '/' +
                calendarView.value.year + ' ?'
            };

            var dialog = Ti.UI.createOptionDialog(opts);
            dialog.show();
            dialog.addEventListener('click', function(e) {
                if (e.index == 0) {
                    saveDate(d.dateValue, "Due Date");
                } else {
                    menu.showInfoBar("Due Date NOT Set");
                }

                $.viewMain.remove(calendarView);
            });

            $.viewRow.height = Ti.UI.FILL;

        });
    }

}

/**
 * Invoke the calendar module to set a date
 * @method setReminder
 * @return
 */
function setReminder() {
    log.debug('[TodoDetail] : setReminder');

    var now = new Date();
    var month = now.getUTCMonth() + 1;
    var day = now.getUTCDate();
    var year = now.getUTCFullYear();

    if (Ti.Platform.osname === 'android') {
        var Dialogs = require("yy.tidialogs");
        // Create the dialog

        // value property is priority
        var picker = Dialogs.createDatePicker({
            okButtonTitle: 'Set',         // <-- optional, default "Done"
            cancelButtonTitle: 'Cancel',  // <-- optional, default "Cancel"
            value: new Date(),            // <-- optional
            day: day,                     // <-- optional
            month: month,                 // <-- optional - java/javascript month, i.e. August
            year: year                    // <-- optional
        });

        // Add the click listener
        picker.addEventListener('click',function(e){
            if (!e.cancel) {
                saveDate(e.value, "Reminder");
            } else {
                // Android Cancel Date
            }
        });

        // Cancel listener
        picker.addEventListener('cancel', function() {
            log.info("dialog was cancelled");
        });

        // open it
        picker.show();
    }
    // iOS will use different date picker
    else {
        $.viewRow.height = 0;

        var calendar = require('ti.sq');

        var minYear = year - 1;
        var maxYear = year + 1;

        var calValue = {
            month: month,
            day: day,
            year: year
        };
        var calMin = {
            month: month,
            day: day,
            year: minYear
        };
        var calMax = {
            month: month,
            day: day,
            year: maxYear
        };

        var calendarView = calendar.createView({
            height: Ti.UI.FILL,
            width: Ti.UI.FILL,
            top: 0,
            left: 10,
            right: 10,
            //bottom: 65,
            pagingEnabled: true,
            value: {
                month: month,
                day: day,
                year: year
            },
            min: {
                month: month,
                day: 1,
                year: year
            },
            max: {
                month: month,
                day: day,
                year: maxYear
            }
        });

        $.viewMain.add(calendarView);

        calendarView.addEventListener('dateChanged', function(d) {
            var opts = {
                options: ['Yep!', 'Changed my mind'],
                selectedIndex: 0,
                destructive: 0,
                title: 'Set Reminder for ' + calendarView.value.month +
                '/' + calendarView.value.day + '/' +
                calendarView.value.year + ' ?'
            };

            var dialog = Ti.UI.createOptionDialog(opts);
            dialog.show();
            dialog.addEventListener('click', function(e) {
                if (e.index == 0) {
                    saveDate(d.dateValue, "Reminder");
                    setLocalNotification();
                } else {
                    menu.showInfoBar("Reminder NOT Set");
                }

                $.viewMain.remove(calendarView);
            });

            $.viewRow.height = Ti.UI.FILL;

        });
    }

}

/**
 * Save the date of a Due Date or Reminder
 * @method saveDate
 */
function saveDate(d, type) {
    log.debug("[TodoDetail] Set a " + type +  " for  : dateChanged = ", d);
    log.event({
        type: 'todo',
        action: 'set a ' + type + ' for',
        description: todoItem.get('name') + " " + moment(d).fromNow(),
        eventId: todoItem.get('name')
    });

    if (type === "Reminder") {
        todoItem.set({ reminderDateTime: moment(d).format() });
    } else {
        todoItem.set({ dueDateDateTime: moment(d).format() });
    }

    todoItem.save();
    todo.fetch();

    if (type === "Reminder") {
        $.labelReminder.text = "Reminder " + moment(d).fromNow();
    } else {
        $.labelDueDate.text = "Due " + moment(d).fromNow();
    }


    //Alloy.Globals.toast.show("Reminder set!");
    menu.showInfoBar({title: type + " set " + moment(d).fromNow() + " from now"});
}

/**
 * This invokes the camera
 * @method captureImage
 * @return
 */
function captureImage() {
    // open alert dialog
    var opts = {
        options: ['Take a Photo', 'Gallery'],
        selectedIndex: 0,
        destructive: 0,
        title: 'Where do you want to find picture?'
    };

    var dialog = Ti.UI.createOptionDialog(opts);
    dialog.show();
    dialog.addEventListener('click', function(e) {
        if (e.index == 0) {
            log.debug('[TodoDetail] : captureImage');
            var camera = require('Camera');
            camera.captureImage({success: savePhoto});
        } else {
            log.debug('[TodoDetail] : captureImage');
            require('getUserGallery').fromGallery({success: savePhoto});
        }

        //$.viewMain.remove(calendarView);
    });

}

/**
 * Share a task with native share capability
 * @shareTask
 */
function shareTask() {
    var shareObj = {
        status: "I'd like to share my To-Do task with you!\n\n" + todoItem.get('name') + "\n" +
        todoItem.get('content')
    };
    if (hasDueDate()) {
        shareObj.status += "\n\nDue " + moment(todoItem.get('dueDateDateTime')).fromNow();
    }
    if (todoItem.get("photoCount")) {
        //shareObj.image = '';
    }
    if (OS_ANDROID) {
        shareObj.androidDialogTitle = 'Share ' + todoItem.get('name');
    }
    require('com.alcoapps.socialshare').share(shareObj);
}

/**
 * Save a photo to the SD card
 * @method savePhoto
 */
function savePhoto(image) {
    if (image.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {

        log.event({
            type: 'todo',
            action: 'captured',
            description: 'an image for' + todoItem.get('name'),
            eventId: todoItem.get('name')
        });

        log.debug('[TodoDetail] : captureImage : Camera Success, image = ', JSON.stringify(image, null, 4));

        // This part should be skipped to the existing function
        var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'todo');
        if (!imageDir.exists()) {
            imageDir.createDirectory();
        }

        // Add +1 to the existing photoCount
        var photoCount = todoItem.get('photoCount') + 1;

        var file = Ti.Filesystem.getFile(imageDir.resolve(), todo_id + photoCount + '.png');

        log.debug("[TodoDetail] : Saving image to = ", imageDir.resolve() + todo_id + photoCount + '.png');

        // Write to storage
        file.write(image.media);

        todoItem.set({
            hasPhoto: true,
            photoCount: photoCount
        });
        todoItem.save();

        log.debug('[TodoDetail] : Saved image to this location : ', file.nativePath);

    } else {
        alert('We are only supporting images at the moment.');

        todoItem.set({
            hasVideo: true
        });
        todoItem.save();
    }

    todo.fetch();
}
