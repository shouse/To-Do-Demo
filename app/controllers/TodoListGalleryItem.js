/**
 * This is the controller file for "TodoListGalleryItem"
 * It displays a single
 *
 * @class Controller.TodoListGalleryItem
 * @author Steven House
 * @email steven.m.house@gmail.com
 */
// Include logging utility
var log = Alloy.Globals.log;
log.info("Opened TodoListDetails");

var args = arguments[0] || {};
var todo_id = args.todo_id || "";

var todo = Alloy.Collections.instance("ToDo");
var todoItem = _.first(todo.where({ todo_id: todo_id }));

var galleryExists = false;
var checkBox;
var moment = require('moment');

init();

/**
 * Start the controller running
 * @method init
 * @return
 */
function init() {
    setupNav();
    $.imageViewLarge.image = args.image;
}

/**
 * Setup the Nav Bar
 * @method setupNav
 */
function setupNav() {
    Alloy.Globals.Menu.setTitle("Task Image");
    // Add menu
    Alloy.Globals.Menu.setButton({
        button: 'l1',
        image : "/images/navigation/ic_chevron_left_white_48dp.png",
        success: function() {
            log.debug('[Maintain] : Redirecting to HomePage');
            Alloy.Globals.Menu.setMainContent('TodoListGallery', {todo_id: todoItem.get('todo_id')});
        }
    });

    Alloy.Globals.Menu.showButton('l1');
    Alloy.Globals.Menu.hideButton('r1');
    Alloy.Globals.Menu.hideButton('r2');
}