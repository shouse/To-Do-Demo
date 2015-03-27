/**
 * This is the a library for retrieving sample ToDo tasks
 *
 * @class Lib.Data.ToDo
 * @author Steven House
 * @email steven.m.house@gmail.com
 */

//saveToCollection();

/**
 * Get all ToDo Sample items
 * @method getSymptoms
 * @return symptoms
 */
exports.getTasks = function() {
    return tasks;
}

var tasks = [
    { name: "Make a To Do App", content: "There's so many things to do... just grep a software project :)", status: 1, todo_id: 1},
    { name: "Get your dream job!", content: "Test 2", todo_id: 2},
    { name: "Make lots of cool stuff.", content: "Take a look at my resume!", status: 1, todo_id: 3},
    { name: "Make lots MORE cool stuff.", content: "We all want to do this... and if you don't you have a 94% you are not currently reading this.!", status: 0},
    { name: "Profit!", content: "Smells like the beach and tastes like excellence.", status: 0, todo_id: 4},
];
