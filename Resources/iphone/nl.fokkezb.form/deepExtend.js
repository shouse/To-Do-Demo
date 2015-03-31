var deepExtend = module.exports = function() {
    if (arguments.length < 1 || "object" != typeof arguments[0]) return false;
    if (arguments.length < 2) return arguments[0];
    var target = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    var key, val, src, clone;
    args.forEach(function(obj) {
        if ("object" != typeof obj) return;
        for (key in obj) {
            if (!(key in obj)) continue;
            src = target[key];
            val = obj[key];
            if (val === target) continue;
            if ("object" != typeof val || null === val || val.apiName) {
                target[key] = val;
                continue;
            }
            if (val instanceof Date) {
                target[key] = new Date(val);
                continue;
            }
            if ("object" != typeof src || null === src) {
                clone = Array.isArray(val) ? [] : {};
                target[key] = deepExtend(clone, val);
                continue;
            }
            clone = Array.isArray(val) ? Array.isArray(src) ? src : [] : Array.isArray(src) ? {} : src;
            target[key] = deepExtend(clone, val);
        }
    });
    return target;
};