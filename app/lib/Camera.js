/**
 * This handles the camera and related functions.  It handles video as well
 * @class Util.Camera
 * @author Steven House <steven.m.house@gmail.com>
 *
 * This goal of this library is to provide a pretty comprehensive and reusable utility library
 * for dealing with the camera for photos and videos and persisting them to the filesystem
 *
 * @TODO Make it work :D  It's close to fully functional but it still needs to have a few bugs run out
 * @TODO  Submit a pull request!
 */

// Access Global Logging Utility
var log = Alloy.Globals.log;
log.info('[VideoRecorder] : Opened Page');

init();
/**
 * Initialize the Bluetooth library.  Ensure it's only Android that's calling
 * @method init
 */
function init() {
    log.debug('[VideoRecorder] : init');
}

/**
 * We'll use the following variable to keep track of the result of our recording action.
 */
var videoUri = null;

/**
 * Ask user if they want supply media from gallery or camera
 * @method promptGalleryOrCamera
 */
exports.promptGalleryOrCamera = function(args) {

    var defaultOptions = {
        options: ['Take a Photo', 'Gallery'],
        selectedIndex: 0,
        destructive: 0,
        title: 'Take a Photo?'
    };

    var dialogOptions = args.dialogOptions ? args.dialogOptions : defaultOptions;

    var photoArgs = args.photoArgs ? args.photoArgs : {};
    var imageName = args.imageName ? args.imageName : 'photo-';
    var directory = args.directory ? args.directory : ''
    var success = args.success ? args.success : function() {
        save(image, imageName, directory);
    };


    // open alert dialog
    var dialog = Ti.UI.createOptionDialog(dialogOptions);
    dialog.show();
    dialog.addEventListener('click', function(e) {
        if (e.index == 0) {
            log.debug('[TodoDetail] : captureImage');
            exports.captureImage(save);
        } else {
            log.debug('[TodoDetail] : captureImage');
            exports.fromGallery(save);
        }
    });
};

/**
 * Get images from Gallery
 * @method fromGallery
 */
exports.fromGallery = function(args) {
    alert("args: " + JSON.stringify(args, null, 4));
    var success = args.success ? args.success : function(){};
    var error = args.error ? args.cancel : function(){};
    var cancel = args.cancel ? args.cancel : function(){};
    Ti.Media.openPhotoGallery({
        success:function(event) {
            log.debug('Media Type from Gallerys: '+ event.mediaType);
            if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                success(event);
            }
        },
        error:function(err) {
            error(err);
        },
        cancel: cancel,
        mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
    });
};

/**
 * This records video in Android by opening up an intent
 */
exports.recordVideoAndroid = function() {
    // http://developer.android.com/reference/android/provider/MediaStore.html
    var intent = Titanium.Android.createIntent({ action: 'android.media.action.VIDEO_CAPTURE' });
    Titanium.Android.currentActivity.startActivityForResult(intent, function(e) {
        if (e.error) {
            Ti.UI.createNotification({
                duration: Ti.UI.NOTIFICATION_DURATION_LONG,
                message: 'Error: ' + e.error
            }).show();
        } else {
            if (e.resultCode === Titanium.Android.RESULT_OK) {
                videoUri = e.intent.data;
                Ti.UI.createNotification({
                    duration: Ti.UI.NOTIFICATION_DURATION_LONG,
                    message: 'Video captured; now share or save it!'
                }).show();
                // note that this isn't a physical file! it's a URI in to the MediaStore.
                shareButton.visible = true;
                saveButton.visible = true;
            } else {
                Ti.UI.createNotification({
                    duration: Ti.UI.NOTIFICATION_DURATION_LONG,
                    message: 'Canceled/Error? Result code: ' + e.resultCode
                }).show();
            }
        }
    });
};


/**
 * When they click this, we'll save the video to the SDCard and tell the user where to find it.
 */
exports.saveVideoAndroid = function() {
    var source = Ti.Filesystem.getFile(videoUri);
    var target = Ti.Filesystem.getFile('appdata://sample.3gp');
    // note: source.exists() will return false, because this is a URI into the MediaStore.
    // BUT we can still call "copy" to save the data to an actual file
    source.copy(target.nativePath);

    Ti.UI.createNotification({
        duration: Ti.UI.NOTIFICATION_DURATION_LONG,
        message: 'Saved to: ' + target.nativePath
    }).show();
};

/**
 * Capture video
 * @param args
 */
exports.captureVideo = function(args) {
    Ti.Media.showCamera({
        mediaTypes: [Titanium.Media.MEDIA_TYPE_VIDEO],
        success: function(e) {
            var tempFile = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, new Date().getTime() +'-'+ _.random(0,1000) +'.mov');
            tempFile.write(e.media);

            exports.compressVideo(tempFile.resolve());
        }
    });
};

/**
 *
 * @param pathToVideoFile
 */
exports.compressVideo = function (pathToVideoFile) {
    var trimmer = require('ti.ios.trim');
    trimmer.trimVideo({
        input: pathToVideoFile,
        quality: 1, // use 1 for high compression or 2 for medium compression
        success: function(e) {
            Ti.API.info('SUCCESS:');
            Ti.API.info('path to the compressed file: '+ e.videoURL);
        },
        error: function(e) {
            Ti.API.error('ERROR:');
            Ti.API.info(JSON.stringify(e));
        }
    });
};

/**
 * This invokes the camera
 * @param {args}
 * @method captureImage
 * @return
 */
exports.captureImage = function(args){
    log.debug('[VideoRecorder] : captureImage', args);

    var success = args.success ? args.success : function() {
        save(args)
    };
    var error = args.cancel ? args.cancel : function(err){
        if (err.code == Titanium.Media.NO_CAMERA) {
            alert('It appears you do not have support for the camera.');
            log.warn('[VideoRecorder] Image capture is not supported on your device.');
        } else {
            alert('Unexpected error: ' + err.code);
            log.warn('[VideoRecorder] Unexpected Camera error: ', err.code);
        }
    };
    var cancel = args.cancel ? args.cancel : function(){
        log.debug('[VideoRecorder] : captureImage : User Cancelled');
    };

    if (Titanium.Media.isCameraSupported === false) {
        log.warn('[VideoRecorder] : captureImage : Camera not supported');
        alert('It appears you do not have support for the camera.');
        return;
    }

    Titanium.Media.showCamera({
        success: success,
        error: error,
        cancel: cancel,
        allowEditing: true,
        saveToPhotoGallery: true,
        mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO, Ti.Media.MEDIA_TYPE_VIDEO],
        videoMaximumDuration: 10000,
        videoQuality: Ti.Media.QUALITY_HIGH
    });
}

/**
 * Save a photo to the SD card
 * @param {Blob} image
 * @param {String} imageName
 * @param {String} directory
 * @method savePhoto
 */
function save(image, imageName, directory) {
    imageName = imageName ? imageName : 'photo-'
    directory = directory ? directory : 'photos-'
    if (image.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
        log.debug('[VideoRecorder] : captureImage : Camera Success, image = ', image);

        // This part should be skipped to the existing function
        var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, directory);
        if (!imageDir.exists()) {
            imageDir.createDirectory();
        }

        var file = Ti.Filesystem.getFile(imageDir.resolve(), imageName + photoCount + '.png');

        log.debug("[VideoRecorder] : Saving image to = ", imageDir.resolve() + new Date.now() + '.png');

        // Write to storage
        file.write(image.media);

        log.debug('[VideoRecorder] : Saved image to this location : ', file.nativePath);
    } else {
        alert('We are only supporting images at the moment.');
    }
}
