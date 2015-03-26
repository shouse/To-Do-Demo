/**
 * This is the controller file for "TodoListNew".
 *
 * @class Controller.TodoList
 * @author Steven House
 * @email steven.m.house@gmail.com
 */

// Include logging utility
var log = Alloy.Globals.log;
log.info('[TodoList] : Opened Page');

var args = arguments[0] || {};
var todo_id = args.todo_id || false;

var todo = Alloy.Collections.instance("ToDo");
var todoItem;

init();
addEventListeners();

/**
 * Start the controller running
 * @method init
 * @return
 */
function init() {
    log.debug('[TodoListNewEdit] : Initializing');
    setupNav();

    if (todo_id) {
        editItem();
    }

    if (Alloy.isTablet) {
        //Alloy.Globals.Menu.setSideContent('TodoListHistory');
    }

}

/**
 * Setup the Nav Bar
 * @method setupNav
 */
function setupNav() {
    Alloy.Globals.Menu.setTitle("New Task");

    // Add menu
    Alloy.Globals.Menu.setButton({
        button: 'l1',
        image : "/images/navigation/ic_cancel_white_48dp.png",
        success: function() {
            log.debug('[Maintain] : User Selected Cancel');
            // open alert dialog
            var opts = {
                options: ['Yes', 'Oops!'],
                selectedIndex: 0,
                destructive: 0,
                title: 'Do You Really Want to Cancel??'
            };

            var dialog = Ti.UI.createOptionDialog(opts);
            dialog.show();
            dialog.addEventListener('click', function(e) {
                if (e.index == 0) {
                    Alloy.Globals.Menu.setMainContent('TodoList');
                }
            });
        }
    });

    Alloy.Globals.Menu.setButton({
        button: 'r1',
        image: "/images/navigation/ic_check_white_48dp.png",
        success: addNewItem
    });

    Alloy.Globals.Menu.showButton('r1');
    Alloy.Globals.Menu.hideButton('r2');
    Alloy.Globals.Menu.showButton('l1');
}

/**
 * Add event listeners for the form
 * @method addEventListeners
 */
function addEventListeners() {

}

/**
 * Add a new custom item to the todo list
 * @method addNewItem
 */
function addNewItem() {
    log.debug('[TodoList] : addNewItem');

    var formValues = getFormValues();
    var id;
    // Edit or create new
    if (todo_id) {
        todoItem.set(formValues);
        todoItem.save();
        id = todo_id;
    } else {
        var newModel = Alloy.createModel("ToDo", formValues);
        newModel.save();
        id = newModel.todo_id;
    }

    // Make sure the collection is current
    todo.fetch();

    //alert("Saved this model: " + JSON.stringify(newModel, null, 4));

    Alloy.Globals.Menu.setMainContent('TodoListDetail', {todo_id: id});

};

/**
 * Add a new custom item to the todo list
 * @method addNewItem
 */
function editItem() {
    todoItem = _.first(todo.where({ todo_id: todo_id }));
    log.debug('[TodoListNewEdit] : Editing todo Item', todoItem);

    // Set the title to Edit
    Alloy.Globals.Menu.setTitle("Edit Task");

    $.textFieldName.value = todoItem.get('name');
    $.textFieldContent.value = todoItem.get('content');

};

/**
 * Get the form values
 * @method getFormValues
 */
function getFormValues() {

    if ($.textFieldName.value.length == 0) {
        alert("Name is required");
        return;
    }
    var formValues = {
        name: $.textFieldName.value,
        content: $.textFieldContent.value ? $.textFieldContent.value : ''
    };

    return formValues;
}
