/**
 * This is the controller file for "TodoList".
 *
 * @class Controller.TodoList
 * @author Steven House
 * @email steven.m.house@gmail.com
 */

// Include logging utility
var log = Alloy.Globals.log;
log.info('[TodoList] : Opened Page');


var todo = Alloy.Collections.instance("ToDo");
todo.fetch();

var moment = require('moment');

init();
addEventListeners();

/**
 * Start the controller running
 * @method init
 * @return
 */
function init() {
    //log.debug();
    setupNav();

    log.debug('[TodoList] : Initializing');
    // If there is no existing todo records, get standard set
    if (todo.length > 0) {
        todoSuccess();
    } else {
        getTasks();
    }



    if (Alloy.isTablet) {
        //Alloy.Globals.Menu.setSideContent('TodoListHistory');
    }

}

/**
 * Any cleanup the controller needs
 * @method cleanup
 * @return
 */
$.viewMain.cleanup = function() {
    $.destroy();
    $.off();
};

/**
 * Setup the Nav Bar
 * @method setupNav
 */
function setupNav() {
    Alloy.Globals.Menu.setTitle("ToDo List");
    Alloy.Globals.Menu.setColor("#aaa");

    // Add menu
    Alloy.Globals.Menu.setButton({
        button: 'l1',
        image : "/images/Propelics.Logo.100x100.png",
        success: function() {
            log.debug('[TodoList] : Redirecting to HomePage');
            Alloy.Globals.Menu.showInfoBar({title: "Check out this drawer with nothing in it"});
            Alloy.Globals.Menu.toggleLeftSlider();
        }
    });

    Alloy.Globals.Menu.setButton({
        button: 'r2',
        image: "/images/action/ic_search_white_48dp.png",
        success: function() {
            if ($.search.height == 0) {
                $.search.height = 44;
            } else {
                $.search.height = 0;
            }

        }
    });

    Alloy.Globals.Menu.setButton({
        button: 'r1',
        image: "/images/action/ic_add_white_48dp.png",
        success: function() {
            Alloy.Globals.Menu.setMainContent('TodoListNewEdit');
        }
    });

    Alloy.Globals.Menu.showButton('r1');
    Alloy.Globals.Menu.showButton('r2');
    Alloy.Globals.Menu.showButton('l1');
}

/**
 * Add event listeners for the ListView.
 * 'itemclick' - open detail window
 * 'swipe left' - Set Reminder
 * 'swipe right' - Mark as Done
 * @method addEventListeners
 * @return
 */
function addEventListeners() {

     // Filter: ALL
     //$.viewFilterAll.addEventListener('click', function(e){
     $.labelFilterAll.addEventListener('click', function(e) {
         //$.search.height = '0dp';
         filter(e.source.id);
     });

     // Filter: DONE
     $.labelFilterDone.addEventListener('click', function(e) {
        //$.search.height = '0dp';
        filter(e.source.id);
     });

    // Item Clicked
    $.listViewTodo.addEventListener('itemclick', function(e) {
        log.warn(e.sectionIndex);
        log.warn(e.itemId);
        log.warn(e.itemIndex);
        if (Alloy.isTablet) {
            Alloy.Globals.Menu.setSideContent('TodoListDetail', {todo_id: e.itemId});
        } else {
            // Open our ToDo List Detail controller
            //var todoDetail = Alloy.createController('TodoListDetail', {todo_id: e.itemId}).getView();
            //Alloy.Globals.navWindow.open(todoDetail);
            Alloy.Globals.Menu.setMainContent('TodoListDetail', {todo_id: e.itemId});
        }
    });
}

/**
 * Filter the results of the list view
 * @method filter
 * @param {} item
 * @return
 */
function filter(item) {
    switch (item) {
        case "viewFilterAll":
        case "labelFilterAll":
            var sections = $.listViewTodo.getSections();
            _.each(sections, function(section) {
                $.listViewTodo.deleteSectionAt(0);
            });
            todoSuccess();
            break;
        case "viewFilterDone":
        case "labelFilterDone":
            var sections = $.listViewTodo.getSections();
            _.each(sections, function(section) {
                $.listViewTodo.deleteSectionAt(0);
            });

            var doneCollection = _.where(todo.toJSON(), {status: 1});
            todoSuccess(doneCollection);
            break;
    }
}

/**
 * This checks if todo items have been loaded,
 * then loads from data file or bypass reload
 * @method getTasks
 * @return
 */
function getTasks() {
    // If there are no models in the collection, let's start out with some demo data
    if (todo.length === 0) {
        var todoJSON = require('data/ToDo').getTasks();
        log.debug('[TodoList] : getTasks() : todo = ', todoJSON);

        //Alloy.Collections.ToDo.reset(todoJSON);
        //Alloy.Collections.ToDo.reset(todoJSON);
        _.each(todoJSON, function(item){
            var todoModel = Alloy.createModel("ToDo", item);
            todoModel.save();
        });
        todo.fetch();
    }

    todoSuccess();
}

/**
 * Add the todo records to the List View Section
 * @method todoSuccess
 * @param {} recordsToShow
 * @return
 */
function todoSuccess(recordsToShow) {
    var sortedCollection;

    if (recordsToShow) {
        sortedCollection = recordsToShow;
    } else {
        sortedCollection = _.sortBy(todo.toJSON(),
            function(item) {
                // return item.intervalMileage;
            });
    }

    log.debug('[TodoList] : todoSuccess() : sortedCollection', sortedCollection);

    var data = [];

    // Push data to the List View
    _.each(sortedCollection, function(item) {
        var date = "";
        if (item.dueDateDateTime) {
            date = moment(item.dueDateDateTime).format("MM DD");
        }

        data.push({
            viewStatusColor: {
                backgroundColor: item.status ? "green" : "white"
            },
            imageViewCheckmark: {
                image: item.status ? "/images/navigation/ic_check_black_48dp.png" : "",
                left: 10,
                right:10
            },
            itemTitle: {
                text: item.name,
                font: {
                    fontSize: '18sp'
                },
                left: 5
            },
            itemContent: {
                text: item.content
            },
            labelDueDate: {
                text: date
            },
            properties: {
                itemId: item.todo_id,
                searchableText: item.name,
                backgroundColor: '#fff',
                height: 90
            }
        });

    });

    var listSection = Titanium.UI.createListSection({
        // properties
        items: data,
        //headerView : listSectionHeaderView
        headerTitle: "To-do List"
    });

    $.listViewTodo.appendSection(listSection);
}

/**
 * Delete an item
 * @param e
 */
function deleteItem(e){
    var section = e.section;
    var todo_id = parseInt(e.itemId);
    var itemIndex = e.itemIndex;
    log.warn("deleteItem: " + JSON.stringify(e, null, 4));
    var opts = {
        options: ['Yep!', 'Changed my mind'],
        selectedIndex: 0,
        destructive: 0,
        title: "Do You Want to DELETE This Item?"
    };


     var dialog = Ti.UI.createOptionDialog(opts);
     dialog.show();
     dialog.addEventListener('click', function(e) {
         if (e.index == 0) {
             var todoItem = _.first(todo.where({ todo_id: todo_id }));
             todo.remove(todoItem);
             todoItem.destroy();
             todo.fetch();
             section.deleteItemsAt(itemIndex, 1);
             Alloy.Globals.Menu.showInfoBar({title: "Deleted Task!"});
             return;
         } else {
             Alloy.Globals.Menu.showInfoBar({title: "Not Deleted!"});
         }
     });
}
