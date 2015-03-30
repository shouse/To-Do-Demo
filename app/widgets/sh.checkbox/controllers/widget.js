/**
 * Checkbox with a label.
 */
var dimensions =  [ "left", "top", "right", "bottom", "center", "width", "height" ];

// Allow parameters to be brought in through the parent tss file.
var args = arguments[0] || {};

_.extend($.label, _.chain(args).omit("value").omit(dimensions).value());
_.extend($.container, _.pick(args, dimensions));

// Listener for the click event.
function checkboxClick(e) {
	// Toggle the checkbox value.
	$.value = !($.value);
	// Fire the change event.
	$.trigger('change', {value: $.value});
}

Object.defineProperty($, "enabled", {
	get: function() {
		return $._enabled;
	},
	set: function(enabled) {
		$._enabled = enabled;
		$.checkbox.touchEnabled = $.label.touchEnabled = enabled;
	}
});

Object.defineProperty($, "visible", {
	get: function() {
		return $.container.visible;
	},
	set: function(visible) {
		$.container.visible = visible;
	}
});

Object.defineProperty($, "value", {
	get: function() {
		return $._value;
	},
	set: function(value) {
		$._value = value;
		$.checkbox.image = value ? WPATH("ic_done_black_48dp.png") : "";
	}
});

Object.defineProperty($, "text", {
	get: function() {
		return $.label.text;
	},
	set: function(text) {
		$.label.text = text;
	}
});

// Default value to false (checkbox not checked).
$.value = _.isUndefined(args.value) ? false : args.value;
