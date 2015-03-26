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
var itemId = args.itemId || "";

var todo = Alloy.Collections.instance("ToDo");
var todoItem = _.first(todo.where({ name: itemId }));

var galleryExists = false;

init();

/**
 * Start this baby runnin...
 * @method init
 */
function init() {
    log.info("[TodoListGallery] Initializing ");

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
        log.warn('[TodoDetail] : No saved pictures found.  Should not see this');
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

    if (todoItem.get('hasPhoto')) {
        createGallery();
        galleryExists = true;
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

