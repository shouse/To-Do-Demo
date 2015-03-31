!function(name, definition) {
    "undefined" != typeof module ? module.exports = definition() : "function" == typeof define && "object" == typeof define.amd ? define(definition) : this[name] = definition();
}("validator", function(validator) {
    "use strict";
    function merge(obj, defaults) {
        obj = obj || {};
        for (var key in defaults) "undefined" == typeof obj[key] && (obj[key] = defaults[key]);
        return obj;
    }
    validator = {
        version: "3.16.0"
    };
    var email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/, isbn13Maybe = /^(?:[0-9]{13})$/;
    var ipv4Maybe = /^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/, ipv6 = /^::|^::1|^([a-fA-F0-9]{1,4}::?){1,7}([a-fA-F0-9]{1,4})$/;
    var uuid = {
        "3": /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        "4": /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        "5": /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };
    var alpha = /^[a-zA-Z]+$/, alphanumeric = /^[a-zA-Z0-9]+$/, numeric = /^-?[0-9]+$/, int = /^(?:-?(?:0|[1-9][0-9]*))$/, float = /^(?:-?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/, hexadecimal = /^[0-9a-fA-F]+$/, hexcolor = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    var ascii = /^[\x00-\x7F]+$/, multibyte = /[^\x00-\x7F]/, fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/, halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
    var base64 = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/;
    validator.extend = function(name, fn) {
        validator[name] = function() {
            var args = Array.prototype.slice.call(arguments);
            args[0] = validator.toString(args[0]);
            return fn.apply(validator, args);
        };
    };
    validator.init = function() {
        for (var name in validator) {
            if ("function" != typeof validator[name] || "toString" === name || "toDate" === name || "extend" === name || "init" === name) continue;
            validator.extend(name, validator[name]);
        }
    };
    validator.toString = function(input) {
        "object" == typeof input && null !== input && input.toString ? input = input.toString() : null === input || "undefined" == typeof input || isNaN(input) && !input.length ? input = "" : "string" != typeof input && (input += "");
        return input;
    };
    validator.toDate = function(date) {
        if ("[object Date]" === Object.prototype.toString.call(date)) return date;
        date = Date.parse(date);
        return isNaN(date) ? null : new Date(date);
    };
    validator.toFloat = function(str) {
        return parseFloat(str);
    };
    validator.toInt = function(str, radix) {
        return parseInt(str, radix || 10);
    };
    validator.toBoolean = function(str, strict) {
        if (strict) return "1" === str || "true" === str;
        return "0" !== str && "false" !== str && "" !== str;
    };
    validator.equals = function(str, comparison) {
        return str === validator.toString(comparison);
    };
    validator.contains = function(str, elem) {
        return str.indexOf(validator.toString(elem)) >= 0;
    };
    validator.matches = function(str, pattern, modifiers) {
        "[object RegExp]" !== Object.prototype.toString.call(pattern) && (pattern = new RegExp(pattern, modifiers));
        return pattern.test(str);
    };
    validator.isEmail = function(str) {
        return email.test(str);
    };
    var default_url_options = {
        protocols: [ "http", "https", "ftp" ],
        require_tld: true,
        require_protocol: false,
        allow_underscores: false
    };
    validator.isURL = function(str, options) {
        if (!str || str.length >= 2083) return false;
        options = merge(options, default_url_options);
        var separators = "-?-?" + (options.allow_underscores ? "_?" : "");
        var url = new RegExp("^(?!mailto:)(?:(?:" + options.protocols.join("|") + ")://)" + (options.require_protocol ? "" : "?") + "(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:www.)?)?(?:(?:[a-z\\u00a1-\\uffff0-9]+" + separators + ")*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+" + separators + ")*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (options.require_tld ? "" : "?") + ")|localhost)(?::(\\d{1,5}))?(?:(?:/|\\?|#)[^\\s]*)?$", "i");
        var match = str.match(url), port = match ? match[1] : 0;
        return !!(match && (!port || port > 0 && 65535 >= port));
    };
    validator.isIP = function(str, version) {
        version = validator.toString(version);
        if (!version) return validator.isIP(str, 4) || validator.isIP(str, 6);
        if ("4" === version) {
            if (!ipv4Maybe.test(str)) return false;
            var parts = str.split(".").sort();
            return parts[3] <= 255;
        }
        return "6" === version && ipv6.test(str);
    };
    validator.isAlpha = function(str) {
        return alpha.test(str);
    };
    validator.isAlphanumeric = function(str) {
        return alphanumeric.test(str);
    };
    validator.isNumeric = function(str) {
        return numeric.test(str);
    };
    validator.isHexadecimal = function(str) {
        return hexadecimal.test(str);
    };
    validator.isHexColor = function(str) {
        return hexcolor.test(str);
    };
    validator.isLowercase = function(str) {
        return str === str.toLowerCase();
    };
    validator.isUppercase = function(str) {
        return str === str.toUpperCase();
    };
    validator.isInt = function(str) {
        return int.test(str);
    };
    validator.isFloat = function(str) {
        return "" !== str && float.test(str);
    };
    validator.isDivisibleBy = function(str, num) {
        return validator.toFloat(str) % validator.toInt(num) === 0;
    };
    validator.isNull = function(str) {
        return 0 === str.length;
    };
    validator.isLength = function(str, min, max) {
        var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
        var len = str.length - surrogatePairs.length;
        return len >= min && ("undefined" == typeof max || max >= len);
    };
    validator.isByteLength = function(str, min, max) {
        return str.length >= min && ("undefined" == typeof max || str.length <= max);
    };
    validator.isUUID = function(str, version) {
        var pattern = uuid[version ? version : "all"];
        return pattern && pattern.test(str);
    };
    validator.isDate = function(str) {
        return !isNaN(Date.parse(str));
    };
    validator.isAfter = function(str, date) {
        var comparison = validator.toDate(date || new Date()), original = validator.toDate(str);
        return !!(original && comparison && original > comparison);
    };
    validator.isBefore = function(str, date) {
        var comparison = validator.toDate(date || new Date()), original = validator.toDate(str);
        return original && comparison && comparison > original;
    };
    validator.isIn = function(str, options) {
        if (!options || "function" != typeof options.indexOf) return false;
        if ("[object Array]" === Object.prototype.toString.call(options)) {
            var array = [];
            for (var i = 0, len = options.length; len > i; i++) array[i] = validator.toString(options[i]);
            options = array;
        }
        return options.indexOf(str) >= 0;
    };
    validator.isCreditCard = function(str) {
        var sanitized = str.replace(/[^0-9]+/g, "");
        if (!creditCard.test(sanitized)) return false;
        var digit, tmpNum, shouldDouble, sum = 0;
        for (var i = sanitized.length - 1; i >= 0; i--) {
            digit = sanitized.substring(i, i + 1);
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                sum += tmpNum >= 10 ? tmpNum % 10 + 1 : tmpNum;
            } else sum += tmpNum;
            shouldDouble = !shouldDouble;
        }
        return !!(sum % 10 === 0 ? sanitized : false);
    };
    validator.isISBN = function(str, version) {
        version = validator.toString(version);
        if (!version) return validator.isISBN(str, 10) || validator.isISBN(str, 13);
        var i, sanitized = str.replace(/[\s-]+/g, ""), checksum = 0;
        if ("10" === version) {
            if (!isbn10Maybe.test(sanitized)) return false;
            for (i = 0; 9 > i; i++) checksum += (i + 1) * sanitized.charAt(i);
            checksum += "X" === sanitized.charAt(9) ? 100 : 10 * sanitized.charAt(9);
            if (checksum % 11 === 0) return !!sanitized;
        } else if ("13" === version) {
            if (!isbn13Maybe.test(sanitized)) return false;
            var factor = [ 1, 3 ];
            for (i = 0; 12 > i; i++) checksum += factor[i % 2] * sanitized.charAt(i);
            if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) return !!sanitized;
        }
        return false;
    };
    validator.isJSON = function(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };
    validator.isMultibyte = function(str) {
        return multibyte.test(str);
    };
    validator.isAscii = function(str) {
        return ascii.test(str);
    };
    validator.isFullWidth = function(str) {
        return fullWidth.test(str);
    };
    validator.isHalfWidth = function(str) {
        return halfWidth.test(str);
    };
    validator.isVariableWidth = function(str) {
        return fullWidth.test(str) && halfWidth.test(str);
    };
    validator.isSurrogatePair = function(str) {
        return surrogatePair.test(str);
    };
    validator.isBase64 = function(str) {
        return base64.test(str);
    };
    validator.ltrim = function(str, chars) {
        var pattern = chars ? new RegExp("^[" + chars + "]+", "g") : /^\s+/g;
        return str.replace(pattern, "");
    };
    validator.rtrim = function(str, chars) {
        var pattern = chars ? new RegExp("[" + chars + "]+$", "g") : /\s+$/g;
        return str.replace(pattern, "");
    };
    validator.trim = function(str, chars) {
        var pattern = chars ? new RegExp("^[" + chars + "]+|[" + chars + "]+$", "g") : /^\s+|\s+$/g;
        return str.replace(pattern, "");
    };
    validator.escape = function(str) {
        return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    validator.stripLow = function(str, keep_new_lines) {
        var chars = keep_new_lines ? "\x00-	\f-" : "\x00-";
        return validator.blacklist(str, chars);
    };
    validator.whitelist = function(str, chars) {
        return str.replace(new RegExp("[^" + chars + "]+", "g"), "");
    };
    validator.blacklist = function(str, chars) {
        return str.replace(new RegExp("[" + chars + "]+", "g"), "");
    };
    validator.init();
    return validator;
});