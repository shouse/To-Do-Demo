exports.image = "images/ghsv.png";

exports.pc2hsv = function(pc) {
    var third = 100 / 3;
    if (pc.y < third) {
        s = 0;
        v = Math.round(100 - 3 * pc.y);
    } else if (pc.y < 2 * third) {
        s = 100;
        v = Math.round(3 * (pc.y - third));
    } else {
        s = Math.round(100 - 3 * (pc.y - third - third));
        v = 100;
    }
    return {
        h: Math.round(pc.x / 100 * 359),
        s: s,
        v: v
    };
};

exports.hsv2pc = function(hsv) {
    var y3p;
    y3p = hsv.s > 0 ? hsv.b < 100 ? 100 + hsv.b : 300 - hsv.s : 100 - hsv.b;
    return {
        x: Math.round(100 * hsv.h / 359),
        y: Math.round(100 * y3p / 300)
    };
};