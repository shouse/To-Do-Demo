/**
 * @description Helper functions for camera and gallery functionality
 *
 * @class Controller.Map
 * @author Steven House
 * @email steven.m.house@gmail.com
 */

// Include logging utility
var log = Alloy.Globals.log;
log.info('[Map]: Opened Page');

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