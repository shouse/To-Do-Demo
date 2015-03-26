/**
 * This widget displays user's information
 */

var args = arguments[0] || {};

var type = args.type || 'regular';

var userInfo = _.isUndefined(Ti.App.Properties.getObject("userInfo", null)) ?
    'Not Logged In' : Alloy.CFG.drupalConfig.userInfo;

init();
addEventListeners();

/**
 * Start it off
 */
function init() {
    log.info("[WIDGET User Display] : Initializing");
    log.debug("[WIDGET User Display] : User Info", userInfo);

    var imagePath = ''
    //if (!userInfo.picture === null && !userInfo.picture.url === null) {
        //imagePath = userInfo.picture.url;
    //}

    var realName = _.isUndefined(userInfo) ? 'Not Logged In' : userInfo.realname;
    var imageProfilePic = imagePath;
    $.labelUserRealName.text = realName;
    //$.imageProfilePic.image = imageProfilePic;

    if (type === 'regular') {
        displayRegular();
    } else {
        displaySmall();
    }
}

/**
 * Add Event Listeners
 */
function addEventListeners() {
    $.viewProfileSummary.addEventListener('click', function() {
        Alloy.Globals.Menu.setMainContent('UserProfile');
    });
}

/**
 *
 */
function displayRegular() {

}

/**
 *
 */
function displaySmall() {
    $.imageProfilePic.left = 10;
    $.imageProfilePic.top = 10;
    $.imageProfilePic.height = 44;
    $.imageProfilePic.width = 44;
    $.viewProfileSummary.height = 50;
}

$.setSize = function(type) {
    if (type === 'regular') {
        displayRegular();
    } else {
        displaySmall();
    }
};

$.setType = function(type) {
    if (type === 'regular') {
        displayRegular();
    } else if (type == 'medium') {
        $.imageProfilePic.left = 20;
        $.imageProfilePic.height = 75;
        $.imageProfilePic.width = 75;
        $.viewProfileSummary.height = 100;
    } else {
        displaySmall();
    }
};

$.setStyle = function(style) {
    if (style == 'light') {

    } else if (style == 'dark') {
        $.viewUserInfo.color = 'white';
        $.labelUserRealName.color = 'white';
        $.labelUserLocation.color = 'white';
    }
}
