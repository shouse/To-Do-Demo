/**
 * This is the controller file for "TodoListGallery"
 *
 * @class Controller.TodoListGallery
 * @author Steven House
 * @email steven.m.house@gmail.com
 */

// Include logging utility
var log = Alloy.Globals.log;
log.info("Opened TodoListDetails");

var args = arguments[0] || {};
var todo_id = args.todo_id || "";

var todo = Alloy.Collections.instance("ToDo");
var todoItem = _.first(todo.where({ todo_id: todo_id }));

var galleryExists = false;

init();

/**
 * Start this baby runnin...
 * @method init
 */
function init() {
    log.info("[Gallery] Initializing ");

    setupNav();

    if (!todoItem.get('photoCount') !== 0) {
        createGallery();
        galleryExists = true;
    } else {
        $.tdg.height = 0;
        $.tdb.visible = false;
        $.labelBlank.removeClass("h-0");
        $.labelBlank.addClass("h-100");
    }
}

/**
 * Setup the Nav Bar
 * @method setupNav
 */
function setupNav() {
    Alloy.Globals.Menu.setTitle("Task Gallery");
    Alloy.Globals.Menu.setColor("#aaa");

    // Add menu
    Alloy.Globals.Menu.setButton({
        button: 'l1',
        image : "/images/navigation/ic_chevron_left_white_48dp.png",
        success: function() {
            log.debug('[Gallery] : Redirecting to Detail Page');
            Alloy.Globals.Menu.setMainContent('TodoListDetail', {todo_id: todoItem.get('todo_id')});
            //Alloy.Globals.Menu.goBack();
        }
    });

    Alloy.Globals.Menu.setButton({
        button: 'r2',
        image: "/images/action/ic_search_white_48dp.png",
        success: function() {
            if ($.search.height == 0) {
                $.search.height = 44;
            } else {
                $.search.height = 0;
            }

        }
    });

    Alloy.Globals.Menu.setButton({
        button: 'r1',
        image: "/images/action/ic_add_white_48dp.png",
        success: function() {
            require('Camera').promptGalleryOrCamera();
        }
    });

    Alloy.Globals.Menu.showButton('r1');
    Alloy.Globals.Menu.hideButton('r2');
    Alloy.Globals.Menu.showButton('l1');
}

/**
 * This returns an imageView created from the file system
 * @method getPictureView
 * @param {photoCount} count of photos
 * @param {width} width
 * @param {height} height
 * @return {Object} imageView
 */
function getPictureView(photoCount, width, height) {
    log.debug('[Gallery] : getPictureView : photoCount = ', photoCount + ", width = " + width + ", height = " + height);
    // Create the directory if it doesn't exist.  Use the Application Directory and specify /todo for directory
    var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'todo');
    var file = Ti.Filesystem.getFile(imageDir.resolve(), todo_id + photoCount + '.png');

    // Check Filesystem for picture
    if (!file.exists()) {
        log.warn('[TodoListGallery] : No saved pictures found.  Should not see this');
        return false;
    } else {
        var image = file.read();
        log.info('[TodoListGallery] : Retrieved saved picture : ',
            image);

        var imageView = Ti.UI.createImageView({
            image: image,
            width: width,
            height: height,
            borderColor: "white"
        });

        return {view: imageView, file: file};
    }

}

/**
 * Create Gallery of photos / videos
 * @method createGallery
 */
function createGallery() {
    log.debug('[Gallery] : createGallery() : number of images = ', todoItem.get('photoCount'));
    galleryExists = true;

    var photoCount = todoItem.get('photoCount');
    var columns = 0;

    // Bail if no photos, otherwise set the number of columns based on current photo count
    if (photoCount < 1) {
        Alloy.Globals.Menu.showInfoBar({title: "No Photos To Display"});
        log.debug("[Gallery] : createGallery : photoCount === 0");
        return false;
    } else if (photoCount == 1) {
        columns = 1;
    } else if (photoCount == 2) {
        columns = 2;
    } else {
        columns = 3;
    }

    if (columns == 0) {
        return;
    }

    $.tdg.init({
        columns: columns,
        space: 10,
        delayTime: 500,
        //gridBackgroundColor: '#e1e1e1',
        //itemBackgroundColor: '#9fcd4c',
        itemBorderColor: '#eb5d36',
        itemBorderWidth: 3,
        itemBorderRadius: 5,
        onItemClick: openLargeImage
    });

    displayAllPhotos(photoCount);
}

function openLargeImage(image) {
    Alloy.Globals.Menu.setMainContent('TodoListGalleryItem', {image: image, todo_id: todoItem.get('todo_id')});
}

/**
 * Display all photos
 * @param photoCount
 */
function displayAllPhotos(photoCount) {
    var images = [];
    // For each photo count create a photo
    _(photoCount).times(function(n) {
        var imageViewAndFile = getPictureView(n + 1, 150, 150);
        //THIS IS THE DATA THAT WE WANT AVAILABLE FOR THIS ITEM WHEN onItemClick OCCURS
        var itemData = {
            caption: 'Test',
            file: imageViewAndFile.file
        };
        //NOW WE PUSH TO THE ARRAY THE VIEW AND THE DATA
        images.push({
            view: imageViewAndFile.view,
            data: itemData
        });

    });

    //ADD ALL THE ITEMS TO THE GRID
    $.tdg.addGridItems(images);
}

/**
 * Update the gallery and add a menu item
 * @method updateGallery
 */
function updateGallery() {
    log.debug("[Gallery] : Updating Gallery");
    // If gallery doesn't exist create it
    if (!galleryExists) {
        if (!todoItem.get('photoCount') !== 0) {
            createGallery();
            galleryExists = true;
        } else {
            $.tdg.height = 0;
            $.tdb.visible = false;
            $.labelBlank.removeClass("h-0");
            $.labelBlank.addClass("h-100");
        }
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
