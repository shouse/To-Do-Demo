function share(args) {
    var Social = require("dk.napp.social");
    console.log("Facebook available: " + Social.isFacebookSupported());
    console.log("Twitter available: " + Social.isTwitterSupported());
    Social.addEventListener("complete", function(e) {
        console.log("complete: " + e.success);
        console.log(e);
        if ("activityView" == e.platform || "activityPopover" == e.platform) switch (e.activity) {
          case Social.ACTIVITY_TWITTER:
            console.log("User is shared on Twitter");
            break;

          case Social.ACTIVITY_CUSTOM:
            console.log("This is a customActivity: " + e.activityName);
        }
    });
    Social.addEventListener("error", function(e) {
        console.log("error:");
        console.log(e);
    });
    Social.addEventListener("cancelled", function(e) {
        console.log("cancelled:");
        console.log(e);
    });
    var payload = {};
    payload.text = args.status;
    args.image && (payload.image = args.image);
    Social.isActivityViewSupported() ? Social.activityView(payload) : alert("Sorry...your phone appears to be old-ish...sorry");
}

exports.share = share;