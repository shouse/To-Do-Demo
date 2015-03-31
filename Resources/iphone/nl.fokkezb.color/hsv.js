exports.image = "images/hsv.png";

exports.pc2hsv = function(pc) {
    return {
        h: Math.round(pc.x / 100 * 359),
        s: pc.y < 50 ? 100 : Math.round(2 * (100 - pc.y)),
        v: pc.y > 50 ? 100 : Math.round(2 * pc.y)
    };
};

exports.hsv2pc = function(hsv) {
    return {
        x: Math.round(100 * hsv.h / 359),
        y: Math.round(hsv.s < 100 ? 100 - hsv.s / 2 : hsv.b / 2)
    };
};