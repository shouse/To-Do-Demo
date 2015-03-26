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
    { name: "Get Hired with Propellics", content: "Test 1", todo_id: 1},
    { name: "Make Cool Stuff!", content: "Test 2", todo_id: 2}
];
