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
}

function globalSuccessCallback(response) {
    Alloy.Globals.Menu.showInfoBar("Success Response: " + JSON.stringify(response, null, 4));
}

function globalErrorCallback(err, context) {
    Alloy.Globals.Menu.showInfoBar("Error err: " + JSON.stringify(err));
    Alloy.Globals.Menu.showInfoBar("Error context: " + JSON.stringify(context, null, 4));
}

function globalDoneCallback() {}

var log = Alloy.Globals.log;

log.debug("[XHR] : Opened Library");

exports.request = function(args) {
    if (!Alloy.Globals.isOnline()) {
        Alloy.Globals.Menu.showInfoBar("You do not have internet access.");
        error = args.error ? args.error : function() {};
        error();
        return {
            success: false
        };
    }
    log.info("[XHR] : Making a Request", args);
    args = args || {};
    var xhr, url, timeout, data, requestType, contentType, parseJSON, requestHeaders, success, error, done, mock, mockLocation;
    url = args.url ? args.url : null;
    timeout = args.timeout ? args.timeout : 15e3;
    data = args.data ? args.data : {};
    requestType = args.requestType ? args.requestType : "POST";
    contentType = args.contentType ? args.contentType : "application/json";
    parseJSON = args.parseJSON ? args.parseJSON : false;
    requestHeaders = args.headers ? args.headers : {};
    mock = args.mock ? args.mock : false;
    mockLocation = args.mockLocation ? args.mockLocation : false;
    success = args.success ? args.success : globalSuccessCallback;
    error = args.error ? args.error : globalErrorCallback;
    done = args.done ? args.done : globalDoneCallback;
    xhr = Ti.Network.createHTTPClient({
        timeout: timeout,
        onload: function(response) {
            log.info("[XHR] : Success Resp =", this);
            if (200 == this.status) {
                var successResp = this.responseText ? this.responseText : this.responseData;
                try {
                    parseJSON ? successResp = JSON.parse(successResp) : null;
                    success(successResp);
                } catch (err) {
                    Alloy.Globals.Menu.showInfoBar("There was an error communicating with the server");
                    log.warn("[XHR] : Can't Parse JSON Resonse", {
                        error: err,
                        successResp: successResp
                    });
                }
            } else 301 == this.status ? error(response, this) : 401 == this.status ? error(response, this) : 403 == this.status ? error(response, this) : 404 == this.status ? error(response, this) : 500 == this.status ? error(response, this) : 503 == this.status ? error(response, this) : 550 == this.status ? error(response, this) : error(response, this);
            done(response);
        },
        onerror: function(err) {
            log.error("[XHR] : XHR Error : Context =", err);
            log.error("XHR onerror! Context - this = ", this);
            error(err, this);
            done(err);
        }
    });
    xhr.open(requestType, url);
    xhr.setRequestHeader("Content-Type", contentType);
    requestHeaders && _.each(requestHeaders, function(header) {
        xhr.setRequestHeader(header.name, header.value);
    });
    log.debug("[XHR] : XHR =", xhr);
    xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1944.0 Safari/537.36");
    mock ? getDummyData(mockLocation, success, error, done) : "GET" == requestType ? xhr.send() : xhr.send(JSON.stringify(data));
};

exports.set = function(parameter, value) {
    try {
        parameter = value;
        return true;
    } catch (err) {
        Alloy.Globals.Menu.showInfoBar("You are trying to set a parameter that doesn't exist");
        return false;
    }
};

exports.get = function(parameter) {
    try {
        return parameter;
    } catch (err) {
        Alloy.Globals.Menu.showInfoBar("You are trying to get a parameter that doesn't exist");
        return false;
    }
};

exports.makeNew = function(args) {
    exports.createHTTPClient(args);
};