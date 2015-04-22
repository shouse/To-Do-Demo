/**
 * This
 */

var service = Ti.Android.currentService;
var serviceIntent = service.getIntent();
var timestamp = new Date(serviceIntent.getStringExtra('timestamp'));

var taskName = serviceIntent.getStringExtra('taskName');
var taskDesc = serviceIntent.getStringExtra('taskDesc');
var taskDue = serviceIntent.getStringExtra('taskDue')

/*
{name:'taskName', value: 'To-Do'},
{name:'taskDesc', value: 'Something to-do'},
{name:'taskDue', value: new Date()}
*/