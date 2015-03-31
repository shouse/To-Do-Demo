function init() {
    log.debug("[VideoRecorder] : init");
}

function save(image, imageName, directory) {
    imageName = imageName ? imageName : "photo-";
    directory = directory ? directory : "photos-";
    if (image.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
        log.debug("[VideoRecorder] : captureImage : Camera Success, image = ", image);
        var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, directory);
        imageDir.exists() || imageDir.createDirectory();
        var file = Ti.Filesystem.getFile(imageDir.resolve(), imageName + photoCount + ".png");
        log.debug("[VideoRecorder] : Saving image to = ", imageDir.resolve() + new Date.now() + ".png");
        file.write(image.media);
        log.debug("[VideoRecorder] : Saved image to this location : ", file.nativePath);
    } else alert("We are only supporting images at the moment.");
}

var log = Alloy.Globals.log;

log.info("[VideoRecorder] : Opened Page");

init();

var videoUri = null;

exports.promptGalleryOrCamera = function(args) {
    var defaultOptions = {
        options: [ "Take a Photo", "Gallery" ],
        selectedIndex: 0,
        destructive: 0,
        title: "Take a Photo?"
    };
    var dialogOptions = args.dialogOptions ? args.dialogOptions : defaultOptions;
    args.photoArgs ? args.photoArgs : {};
    var imageName = args.imageName ? args.imageName : "photo-";
    var directory = args.directory ? args.directory : "";
    args.success ? args.success : function() {
        save(image, imageName, directory);
    };
    var dialog = Ti.UI.createOptionDialog(dialogOptions);
    dialog.show();
    dialog.addEventListener("click", function(e) {
        if (0 == e.index) {
            log.debug("[TodoDetail] : captureImage");
            exports.captureImage(save);
        } else {
            log.debug("[TodoDetail] : captureImage");
            exports.fromGallery(save);
        }
    });
};

exports.fromGallery = function(args) {
    alert("args: " + JSON.stringify(args, null, 4));
    var success = args.success ? args.success : function() {};
    var error = args.error ? args.cancel : function() {};
    var cancel = args.cancel ? args.cancel : function() {};
    Ti.Media.openPhotoGallery({
        success: function(event) {
            log.debug("Media Type from Gallerys: " + event.mediaType);
            event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && success(event);
        },
        error: function(err) {
            error(err);
        },
        cancel: cancel,
        mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
    });
};

exports.recordVideoAndroid = function() {
    var intent = Titanium.Android.createIntent({
        action: "android.media.action.VIDEO_CAPTURE"
    });
    Titanium.Android.currentActivity.startActivityForResult(intent, function(e) {
        if (e.error) Ti.UI.createNotification({
            duration: Ti.UI.NOTIFICATION_DURATION_LONG,
            message: "Error: " + e.error
        }).show(); else if (e.resultCode === Titanium.Android.RESULT_OK) {
            videoUri = e.intent.data;
            Ti.UI.createNotification({
                duration: Ti.UI.NOTIFICATION_DURATION_LONG,
                message: "Video captured; now share or save it!"
            }).show();
            shareButton.visible = true;
            saveButton.visible = true;
        } else Ti.UI.createNotification({
            duration: Ti.UI.NOTIFICATION_DURATION_LONG,
            message: "Canceled/Error? Result code: " + e.resultCode
        }).show();
    });
};

exports.saveVideoAndroid = function() {
    var source = Ti.Filesystem.getFile(videoUri);
    var target = Ti.Filesystem.getFile("appdata://sample.3gp");
    source.copy(target.nativePath);
    Ti.UI.createNotification({
        duration: Ti.UI.NOTIFICATION_DURATION_LONG,
        message: "Saved to: " + target.nativePath
    }).show();
};

exports.captureVideo = function() {
    Ti.Media.showCamera({
        mediaTypes: [ Titanium.Media.MEDIA_TYPE_VIDEO ],
        success: function(e) {
            var tempFile = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, new Date().getTime() + "-" + _.random(0, 1e3) + ".mov");
            tempFile.write(e.media);
            exports.compressVideo(tempFile.resolve());
        }
    });
};

exports.compressVideo = function(pathToVideoFile) {
    var trimmer = require("ti.ios.trim");
    trimmer.trimVideo({
        input: pathToVideoFile,
        quality: 1,
        success: function(e) {
            Ti.API.info("SUCCESS:");
            Ti.API.info("path to the compressed file: " + e.videoURL);
        },
        error: function(e) {
            Ti.API.error("ERROR:");
            Ti.API.info(JSON.stringify(e));
        }
    });
};

exports.captureImage = function(args) {
    log.debug("[VideoRecorder] : captureImage", args);
    var success = args.success ? args.success : function() {
        save(args);
    };
    var error = args.cancel ? args.cancel : function(err) {
        if (err.code == Titanium.Media.NO_CAMERA) {
            alert("It appears you do not have support for the camera.");
            log.warn("[VideoRecorder] Image capture is not supported on your device.");
        } else {
            alert("Unexpected error: " + err.code);
            log.warn("[VideoRecorder] Unexpected Camera error: ", err.code);
        }
    };
    var cancel = args.cancel ? args.cancel : function() {
        log.debug("[VideoRecorder] : captureImage : User Cancelled");
    };
    if (false === Titanium.Media.isCameraSupported) {
        log.warn("[VideoRecorder] : captureImage : Camera not supported");
        alert("It appears you do not have support for the camera.");
        return;
    }
    Titanium.Media.showCamera({
        success: success,
        error: error,
        cancel: cancel,
        allowEditing: true,
        saveToPhotoGallery: true,
        mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO, Ti.Media.MEDIA_TYPE_VIDEO ],
        videoMaximumDuration: 1e4,
        videoQuality: Ti.Media.QUALITY_HIGH
    });
};