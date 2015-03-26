/**
 * @class Network.HttpClient
 *
 * This is a small library to reuse Ti.Network.createHttpClient
 */

// Include logging utility
var log = Alloy.Globals.log;
log.debug('[XHR] : Opened Library');

// Define common variables
//var xhr, url, timeout, data, requestType, contentType, parseJSON, requestHeaders, success, error, done;

/**
 * Create a titanium XHR request based off of passed arguments.
 * args.url, args.timeout, args.requestType, args.contentType, args.requestHeaders, args.success, args.error
 * @method request
 * @param {Object} args An object with multiple settings in this manner:
 * @return
 */
exports.request = function(args) {
    if (!Alloy.Globals.isOnline()) {
        Alloy.Globals.Menu.showInfoBar('You do not have internet access.');
        error = args.error ? args.error : function() {};
        error();
        return {
            success: false
        };
    }

    log.info('[XHR] : Making a Request', args);
    args = args || {};

    var xhr, url, timeout, data, requestType, contentType, parseJSON,
        requestHeaders, success, error, done, mock, mockLocation;

    // Set XHR params based on arguments.  Default to values if specific args are not present;
    url = args.url ? args.url : null;
    timeout = args.timeout ? args.timeout : 15000;
    data = args.data ? args.data : {};
    requestType = args.requestType ? args.requestType : "POST";
    contentType = args.contentType ? args.contentType : "application/json";
    parseJSON = args.parseJSON ? args.parseJSON : false;
    requestHeaders = args.headers ? args.headers : {};

    // Use Stub / Mock for dummy data?
    mock = args.mock ? args.mock : false;
    mockLocation = args.mockLocation ? args.mockLocation : false;

    // Callbacks
    success = args.success ? args.success : globalSuccessCallback;
    error = args.error ? args.error : globalErrorCallback;
    done = args.done ? args.done : globalDoneCallback;

    xhr = Ti.Network.createHTTPClient({
        timeout: timeout,
        /**
         * Description
         * @method onload
         * @param {} response
         * @return
         */
        onload: function(response) {
            log.info('[XHR] : Success Resp =', this);
            if (this.status == 200) {
                //@TODO Decide how to handle possiblity of both this.responseData and this.responseText
                //success(this.responseData);
                var successResp = this.responseText ? this.responseText : this.responseData;
                try {
                    parseJSON ? successResp = JSON.parse(successResp) : null;
                    success(successResp);
                } catch (err) {
                    Alloy.Globals.Menu.showInfoBar("There was an error communicating with the server");
                    log.warn("[XHR] : Can't Parse JSON Resonse", {error: err, successResp: successResp});
                }

            } else if (this.status == 301) {
                //log.error('XHR 301 Moved Permanently :: ' + this.responseText);
                error(response, this);
            } else if (this.status == 401) {
                //log.error('XHR 401 Unauthorized :: ' + this.responseText);
                error(response, this);
            } else if (this.status == 403) {
                //log.error('XHR 403 Forbidden :: ' + this.responseText);
                error(response, this);
            } else if (this.status == 404) {
                //log.error('XHR 404 Not Found :: this.responseText: ' + this.responseText);
                error(response, this);
            } else if (this.status == 500) {
                //log.error('XHR 500 Internal Server Error :: this.responseText: ' + this.responseText);
                error(response, this);
            } else if (this.status == 503) {
                //log.error('XHR 503 Service Unavailable :: this.responseText: ' + this.responseText);
                error(response, this);
            } else if (this.status == 550) {
                //log.error('XHR 550 Permission Denied :: this.responseText: ' + this.responseText);
                error(response, this);
            } else {
                //log.error('XHR ' + this.status + ' error! Context of this :: ' + JSON.stringify(this));
                error(response, this);
            }
            done(response);
        },
        /**
         * Description
         * @method onerror
         * @param {} err
         * @return
         */
        onerror: function(err) {
            log.error('[XHR] : XHR Error : Context =', err);
            log.error('XHR onerror! Context - this = ', this);
            error(err, this);
            done(err);
        }
    });

    // Return the settings to be sent to the makeRequest object
    //var settings = {xhr: xhr, url: url, timeout: timeout, data: data, requestType: requestType, contentType: contentType, parseJSON: parseJSON, requestHeaders: requestHeaders, success: success, error: error, done: done};
    //exports.makeRequest(settings);
    //return settings;
    xhr.open(requestType, url);
    xhr.setRequestHeader("Content-Type", contentType);

    // Add request headers
    if (requestHeaders) {
        _.each(requestHeaders, function(header) {
            xhr.setRequestHeader(header.name, header.value);
        });
    }

    log.debug('[XHR] : XHR =', xhr);

    xhr.setRequestHeader('User-Agent',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1944.0 Safari/537.36'
    );

    // Handle Mock Data requests
    if (mock) {
        getDummyData(mockLocation, success, error, done);
    } else if (requestType == 'GET') {
        xhr.send();
    } else {
        //@TODO: add capability to either JSON.stringify or NOT
        xhr.send(JSON.stringify(data));
    }

};

/**
 * Used for dummy data in lieu of XHR request.  The dummy file must return a
 * JSON object with the method "exports.toJSON()"
 * @see "app/lib/dummyEnterpriseOrderSearch.js"
 * @method getDummyData
 * @param {String} mockLocation location of dummyData
 * @param {} success
 * @param {} error
 * @param {} done
 * @return
 */
function getDummyData(mockLocation, success, error, done) {
    try {
        var mockData = require(mockLocation).toJSON();
        var resp = {
            status: "success",
            data: mockData
        };
        success(resp);
        done(resp);
    } catch (err) {
        alert("Mock Error: " + JSON.stringify(err));
        error(err);
    }
};


/**
 * This function allows for granular setting xhrSetup variables
 * @method set
 * @param parameter
 * @param value
 * @return
 */
exports.set = function(parameter, value) {
    try {
        parameter = value;
        return true;
    } catch (err) {
        Alloy.Globals.Menu.showInfoBar("You are trying to set a parameter that doesn't exist");
        return false;
    }
};

/**
 * This function allows for granular setting xhrSetup variables
 * @method get
 * @param parameter
 * @return
 */
exports.get = function(parameter) {
    try {
        return parameter;
    } catch (err) {
        Alloy.Globals.Menu.showInfoBar("You are trying to get a parameter that doesn't exist");
        return false;
    }
};

/**
 * Alias for createHTTPClient
 * @method makeNew
 * @param {} args
 * @return
 */
exports.makeNew = function(args) {
    exports.createHTTPClient(args);
};

/**
 * If a success callback isn't supplied this will be called
 * @method globalSuccessCallback
 * @param {Object} response
 * @return
 */
function globalSuccessCallback(response) {
    Alloy.Globals.Menu.showInfoBar("Success Response: " + JSON.stringify(response,
        null, 4));
}

/**
 * If an error callback isn't supplied this will be called
 * @method globalErrorCallback
 * @param {Object} err
 * @param {Object} context
 * @return
 */
function globalErrorCallback(err, context) {
    Alloy.Globals.Menu.showInfoBar("Error err: " + JSON.stringify(err));
    Alloy.Globals.Menu.showInfoBar("Error context: " + JSON.stringify(context, null, 4));
}

/**
 * This is called regardless of success or failure
 * @method globalDoneCallback
 * @param {Object} response
 * @return
 */
function globalDoneCallback(response) {

}
