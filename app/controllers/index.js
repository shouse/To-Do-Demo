/**
 * This is a TODO list app that is a code challenge!  Follow the commits to learn some best practices!
 * It supports iOS and Android
 * Items have the following attributes:
 * Content, Last Modified Date, Status (Completed|Pending), Image (Optional)
 *
 *
 *
 * 1. Create a TODO list app with the following fields
 * - Content, Last modified date, Status (Completed|Pending), Image (Optional)
 *
 * 3. As a user I should have a way to see at least 2 lists order by how
 * recent the TODO was created/modified:
 * My pending TODOs
 * My completed TODOs
 *
 * 4. As a user I should be able to create a new TODO. All created tasks
 * are marked as pending.
 *
 * 5. As a user I should be able to see when my task was modified in a
 * human readable format.
 *
 * 6. As a user I should be able to edit a TODO.
 *
 * 7. As a user I should be able to search on each of my lists.
 *
 * 8. As a user I should be able to completed a task and it should be
 * moved from one list the other.
 *
 * 9. As a user I should be able to share a TODO task. At least email and
 * SMS is required, FB and TW are a bonus.
 *
 * 10. As a user I should be able to close the app and open it again
 * without losing any TODO tasks. [models/ToDo.js]
 *
 * 11. As a user I should be able to add an image to each task, either
 * from the gallery or directly from the camera.
 *
 * 12. As a user I should be able to see if there is an image displayed
 * as a thumbnail in my list and a way to see the full image in a
 * separate screen.
 *
 * Tips:
 * 1. Try to use native components instead of custom views. i.e. iOS top
 * navigation bar with buttons and Android with action bar and buttons.
 *
 * 2. If you have time add icons and/or make it as intuitive as possible.
 *
 * 3. What would you add to make it a hit on the AppStore?
 *
 * 4. Don't forget to use reusable CommonJS libraries, Alloy Widgets or
 * App Singletons if you think is worth it.

 * @Class Controllers.index
 * @author steven.m.house@gmail.com
**/

var chroma = require('chroma.min');

// Start this bad boy rollin...
init();

/**
 * This is the initialization function
 */
function init() {
    $.index.open();

    // Let's open our ToDo List controller
    var todo = Alloy.createController('TodoList').getView();
    //$.navWindow.open(todo);

    Alloy.Globals.Menu.setMainContent('TodoList');
    // Give it access globally
    //Alloy.Globals.navWindow = $.navWindow;
}

/**
 * Randomly changes colors of app.  Just an experiment
 */
function changeColors() {
    var colorInterval = setInterval(function(){
        var randPropellicsColor = _.sample(Alloy.Globals.colors, 2);
        alert(randPropellicsColor[0]);
        alert(randPropellicsColor[1]);

        var scale = chroma.scale([randPropellicsColor[0], randPropellicsColor[1]]);
        alert(scale(0.5).hex()); // #FF7F7F

    }, 1000);
}
