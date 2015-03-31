exports.image = "images/hsvg.png";

exports.pc2hsv = function(pc) {
    var third = 100 / 3;
    return {
        h: Math.round(pc.x / 100 * 359),
        s: pc.y < third ? 100 : Math.max(0, Math.round(100 - 100 * (pc.y - third) / third)),
        v: pc.y < third ? Math.round(100 * pc.y / third) : pc.y > 2 * third ? Math.round(100 - 100 * (pc.y - 2 * third) / third) : 100
    };
};

exports.hsv2pc = function(hsv) {
    var y3p;
    y3p = hsv.s > 0 ? hsv.b < 100 ? hsv.b : 200 - hsv.s : 300 - hsv.b;
    return {
        x: Math.round(100 * hsv.h / 359),
        y: Math.round(100 * y3p / 300)
    };
};