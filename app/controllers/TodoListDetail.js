/**
 * This is the controller file for "TodoDetail"
 *
 * @class Controller.TodoDetail
 * @author Steven House
 * @email steven.m.house@gmail.com
 */

// Include logging utility
var log = Alloy.Globals.log;
log.info("Opened TodoListDetails");

var args = arguments[0] || {};
var itemId = args.itemId || "";

var todo = Alloy.Collections.instance("ToDo");
var todoItem = _.first(todo.where({ todo_id: itemId }));

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

    $.labelTitle.text = todoItem.get("name").toUpperCase();

    if (isDone()) {
        log.debug('[TodoDetail] : Initializing : Completed');
        $.viewDone.height = 44;
        //$.viewPhoto.height = 0;
        $.addClass($.viewDone, 'bgDarkGreen');
    }

    if (hasReminder()) {
        log.debug('[TodoDetail] : Initializing : Completed');

        $.viewAptTime.height = 44;
        $.viewScheduleApt.height = 0;
        $.addClass($.viewScheduleApt, 'bgDarkGreen');

        var reminderDate = todoItem.get('reminderDateTime');

        var dateText = moment.utc(reminderDate).fromNow();
        $.labelReminder.text = dateText;
        // + reminderDate;
    }

    if (hasDueDate()) {
        log.debug('[TodoDetail] : Initializing : Completed');

        $.viewAptTime.height = 44;
        $.viewScheduleApt.height = 0;
        $.addClass($.viewScheduleApt, 'bgDarkGreen');

        var dueDate = todoItem.get('dueDateDateTime');

        var dateText = moment.utc(reminderDate).fromNow();
        $.labelReminder.text = dateText;
    }

    if (todoItem.get("content") && todoItem.get("content").length > 0) {
        $.labelContent.text = todoItem.get("content");
        $.viewContentContainer.height = Ti.UI.SIZE;
    } else {
        $.viewContentContainer.height = 0;
    }

    // @TODO Figure out why this is needed.  The nav widget should handle it
    //$.windowTodoDetail.open();

}

/**
 * Setup the Nav Bar
 * @method setupNav
 */
function setupNav() {
    // Add menu
    Alloy.Globals.Menu.setButton({
        button: 'l1',
        image : "/images/navigation/ic_chevron_left_white_48dp.png",
        success: function() {
            log.debug('[Maintain] : Redirecting to HomePage');
            Alloy.Globals.Menu.setMainContent('TodoList');
        }
    });

    // Add menu
    Alloy.Globals.Menu.setButton({
        button: 'r1',
        image : "/images/action/ic_mode_edit_white_48dp.png",
        success: function() {
            log.debug('[Maintain] : Redirecting to Edit Page');
            Alloy.Globals.Menu.setMainContent('TodoListNewEdit', {todoId: todoItem.get('todo_id')});
        }
    });

    Alloy.Globals.Menu.showButton('l1');
    Alloy.Globals.Menu.showButton('r1');
    Alloy.Globals.Menu.showButton('r2');
}

/**
 * Add event listeners for the ListView.
 * @method addEventListeners
 * @return
 */
function addEventListeners() {
    // Mark as Done
    $.viewDone.addEventListener('click', done);

    // Set A Due Date
    $.viewDueDate.addEventListener('click', setDueDate);

    // Set Reminder
    $.viewScheduleApt.addEventListener('click', setReminder);

    // Capture a photo
    $.viewPhoto.addEventListener('click', captureImage);

    // Share the task
    $.viewShare.addEventListener('click', shareTask);

    // Share the task
    $.viewGallery.addEventListener('click', showItemGallery);
}

/**
 * Handles the done click event listener
 * @method done
 * @return
 */
function done() {
    //$.addClass($.viewDone, 'bgDarkGreen');

    log.warn("todoItem ", todoItem);

    todoItem.set({
        status: true,
        completedDateTime: new Date().toISOString()
    });
    todoItem.save();

    todo.fetch();

    Alloy.Globals.Menu.showInfoBar({title: "Keep Up The Good Work!"});
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
 * @method setReminder
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
                    Allog.Globals.Menu.showInfoBar("Due Date NOT Set");
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
                title: 'Set Reminder for ' + calendarView.value.month +
                '/' + calendarView.value.day + '/' +
                calendarView.value.year + ' ?'
            };

            var dialog = Ti.UI.createOptionDialog(opts);
            dialog.show();
            dialog.addEventListener('click', function(e) {
                if (e.index == 0) {
                    saveDate(d.dateValue, "Reminder");
                } else {
                    Allog.Globals.Menu.showInfoBar("Reminder NOT Set");
                }

                $.viewMain.remove(calendarView);
            });

            $.viewRow.height = Ti.UI.FILL;

        });
    }

}

/**
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

    todoItem.set({ reminderDateTime: d });
    todoItem.save();

    //Alloy.Globals.toast.show("Reminder set!");
    Alloy.Globals.Menu.showInfoBar({title: type + " set for " + moment(d).fromNow() + " from now"});
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
    require('com.alcoapps.socialshare').share({
        status                  : "I'd like to share my To-Do task with you!\n\n" + todoItem.get('name'),
        //image                   : fileToShare.nativePath,
        androidDialogTitle      : 'Sharing is caring!!!'
    });
}

/**
 * Show Item Gallery
 * @method showItemGallery
 */
function showItemGallery() {

}

/**
 * Save a photo to the SD card
 * @method savePhoto
 */
function savePhoto(image) {
    alert(JSON.stringify(image, null, 4));
    if (image.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {

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

        var file = Ti.Filesystem.getFile(imageDir.resolve(), itemId +
        photoCount + '.png');

        log.debug("[TodoDetail] : Saving image to = ", imageDir.resolve() +
        itemId + photoCount + '.png');

        // Write to storage
        file.write(image.media);

        todoItem.set({
            hasPhoto: true,
            photoCount: photoCount
        });
        todoItem.save();

        log.debug('[TodoDetail] : Saved image to this location : ',
            file.nativePath);

        updateGallery();

    } else {
        alert('We are only supporting images at the moment.');

        todoItem.set({
            hasVideo: true
        });
        todoItem.save();
    }
}

/**
 * This returns an imageView created from the file system
 * @method getPictureView
 * @param {photoCount}
 * @param {width}
 * @param {height}
 * @return {Object} imageView
 */
function getPictureView(photoCount, width, height) {
    log.debug('[TodoDetail] : getPictureView : photoCount = ',
        photoCount + ", width = " + width + ", height = " + height);
    // Create the directory if it doesn't exist
    var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'todo');
    var file = Ti.Filesystem.getFile(imageDir.resolve(), itemId + photoCount + '.png');

    if (!file.exists()) {
        log.warn(
            '[TodoDetail] : No saved pictures found.  Should not see this'
        );
        return false;
    } else {
        var image = file.read();
        log.info('[TodoDetail] : Retrieved saved picture : ',
            image);

        var imageView = Ti.UI.createImageView({
            image: image,
            width: width,
            height: height,
            borderColor: "white"
        });

        //$.viewMain.add(imageView);
        return imageView;
    }

}

/**
 * Create Gallery of photos / videos
 * @method createGallery
 */
function createGallery() {
    log.debug('[TodoDetail] : createGallery() : image number = ', todoItem.get('photoCount'));
    galleryExists = true;

    var photoCount = todoItem.get('photoCount');
    var images = [];
    var columns = 0;

    // Bail if no photos
    if (photoCount < 1) {
        log.debug("[TodoDetail] : createGallery : photoCount === 0");
        return false;
    } else if (photoCount == 1) {
        columns = 1;
    } else if (photoCount == 2) {
        columns = 2;
    } else {
        columns = 3;
    }

    $.tdg.init({
        columns: columns,
        space: 5,
        delayTime: 500,
        gridBackgroundColor: '#e1e1e1',
        itemBackgroundColor: '#9fcd4c',
        itemBorderColor: '#6fb442',
        itemBorderWidth: 0,
        itemBorderRadius: 3
    });

    // For each photo count create a photo
    _(photoCount).times(function(n) {
        //THIS IS THE DATA THAT WE WANT AVAILABLE FOR THIS ITEM WHEN onItemClick OCCURS
        var itemData = {
            caption: 'Test'
        };

        var imageView = getPictureView(n + 1, 150, 150);

        //NOW WE PUSH TO THE ARRAY THE VIEW AND THE DATA
        images.push({
            view: imageView,
            data: itemData
        });
    });

    //ADD ALL THE ITEMS TO THE GRID
    $.tdg.addGridItems(images);

    $.tdg.setOnItemClick(function(e){
        alert('Selected Item: ' + JSON.stringify(e, null, 4));
    });
}

/**
 * Update the gallery and add a menu item
 * @method updateGallery
 */
function updateGallery() {
    log.debug("[TodoDetail] : Updating Gallery");
    // If gallery doesn't exist create it
    if (!galleryExists) {
        createGallery();
        return
    }

    // If gallery does exist add the first item
    var imageView = getPictureView(1, 150, 150);

    $.tdg.addGridItems({
        view: imageView,
        data: {
            caption: 'Test'
        }
    });

}

function deleteItem(itemId) {
    // delete from model

    // refresh page
}