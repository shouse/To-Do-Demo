// Set the Default Service Interval
var SERVICE_INTERVAL_DEFAULT = 30 * 1000;

/**
 * Create a Background Service on Android
 * @method createServiceAndroid
 */
exports.createServiceAndroid = function(args) {
    args = args ? args : {};
    var extras = args.extras ? args.extras : false;
    var interval = args.interval ? args.interval : SERVICE_INTERVAL_DEFAULT;
    var serviceUrl = args.serviceUrl ? args.serviceUrl : false;
    var intent = Ti.Android.createServiceIntent({
        url : serviceUrl
    });

    intent.putExtra('interval', interval);

    if (extras) {
        _.each(extras, function(extra) {
            intent.putExtra(extra.name, extra.value);
        });
    }

    Ti.Android.startService(intent);
}