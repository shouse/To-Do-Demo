exports.hsv2rgb = function(hsv) {
    var h = hsv.h / 60, s = hsv.s / 100, v = hsv.v / 100, hi = Math.floor(h) % 6;
    var f = h - Math.floor(h), p = Math.round(255 * v * (1 - s)), q = Math.round(255 * v * (1 - s * f)), t = Math.round(255 * v * (1 - s * (1 - f)));
    v = Math.round(255 * v);
    switch (hi) {
      case 0:
        return {
            r: v,
            g: t,
            b: p
        };

      case 1:
        return {
            r: q,
            g: v,
            b: p
        };

      case 2:
        return {
            r: p,
            g: v,
            b: t
        };

      case 3:
        return {
            r: p,
            g: q,
            b: v
        };

      case 4:
        return {
            r: t,
            g: p,
            b: v
        };

      case 5:
        return {
            r: v,
            g: p,
            b: q
        };
    }
};

exports.rgb2hsv = function(rgb) {
    var h, s, v, r = rgb.r, g = rgb.g, b = rgb.b, min = Math.min(r, g, b), max = Math.max(r, g, b), delta = max - min;
    s = 0 === max ? 0 : delta / max * 1e3 / 10;
    max === min ? h = 0 : r === max ? h = (g - b) / delta : g === max ? h = 2 + (b - r) / delta : b === max && (h = 4 + (r - g) / delta);
    h = Math.min(60 * h, 360);
    0 > h && (h += 360);
    v = max / 255 * 1e3 / 10;
    return {
        h: h,
        s: s,
        v: v
    };
};

exports.rgb2hex = function(rgb) {
    var hex = "#";
    [ "r", "g", "b" ].forEach(function(c) {
        var h = parseInt(rgb[c], 10).toString(16);
        1 === h.length && (h = "0" + h);
        hex += h;
    });
    return hex;
};

exports.hex2rgb = function(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

exports.hsv2bw = function(hsv) {
    return hsv.v < 75 ? "white" : "black";
};