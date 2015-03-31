function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.form/" + s : s.substring(0, index) + "/nl.fokkezb.form/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init(opts) {
        "string" == typeof opts && (opts = {
            config: opts
        });
        opts = deepExtend({}, defaults || {}, opts);
        if (opts.config) if (-1 !== opts.config.indexOf(".json")) opts = deepExtend(opts, JSON.parse(Ti.Filesystem.getFile(opts.config).read().text)); else {
            var cjs = require(opts.config);
            var config;
            if (_.isFunction(cjs)) {
                config = cjs($, opts, function(config) {
                    opts = deepExtend(opts, config);
                    render(opts);
                });
                if (!config) return;
            } else config = cjs;
            opts = deepExtend(opts, config);
        }
        render(opts);
    }
    function render(opts) {
        if (!opts.fieldsets && !opts.fields) throw "Either `opts.fieldsets` or `opts.fields` is required.";
        if (!opts.fieldsets && opts.fields) {
            opts.fieldsets = [ {
                fields: opts.fields,
                section: opts.section,
                legend: opts.legend,
                legendid: opts.legendid
            } ];
            delete opts.fields;
        }
        values = opts.values || {};
        _.each(fieldCtrls, function(fieldCtrl) {
            fieldCtrl.off();
        });
        var tableProp = opts.table || {};
        tableProp.sections = tableProp.sections || [];
        _.each(opts.fieldsets, function(fieldset) {
            var section;
            var sectionProp = fieldset.section || {};
            if ("Ti.UI.TableViewSection" === sectionProp.apiName) section = sectionProp; else {
                sectionProp.classes = sectionProp.classes || [ "section" ];
                section = $.UI.create("TableViewSection", sectionProp);
            }
            fieldset.legend ? section.headerTitle = fieldset.legend : fieldset.legendid && (section.headerTitle = L(fieldset.legendid));
            opts.row && (fieldset.row = _.defaults(fieldset.row || {}, opts.row));
            _.each(fieldset.fields, function(field) {
                if (!field) return;
                if (field.apiName) section.add(field); else {
                    values[field.name] && (field.value = values[field.name]);
                    fieldset.row && (field.row = _.defaults(field.row || {}, fieldset.row));
                    field.form = $;
                    var fieldCtrl;
                    fieldCtrl = field.controller ? Alloy.createController(field.controller, field) : Alloy.createWidget(field.widget || "nl.fokkezb.form", field.type || "text", field);
                    fieldCtrl.on("change", function(e) {
                        $.trigger("change change:" + e.field, e);
                        listener && listener(e);
                    });
                    fieldCtrls[field.name] = fieldCtrl;
                    var row = fieldCtrl.getViewEx({
                        recurse: true
                    });
                    section.add(row);
                }
            });
            tableProp.sections.push(section);
        });
        $.table.applyProperties(tableProp);
        opts.listener && (listener = opts.listener);
        opts.filter && (filter = opts.filter);
    }
    function getValues() {
        _.each(fieldCtrls, function(fieldCtrl, name) {
            values[name] = fieldCtrl.getValue();
        });
        filter && (values = filter(values));
        return values;
    }
    function setValues(values) {
        _.each(values, function(value, name) {
            fieldCtrls[name] && fieldCtrls[name].setValue(value);
        });
    }
    function getField(name) {
        return fieldCtrls[name];
    }
    function isValid() {
        var valid = true;
        _.each(fieldCtrls, function(fieldCtrl) {
            valid = valid && fieldCtrl.isValid();
        });
        return valid;
    }
    function onTableSingletap(e) {
        if (!e.row || !e.row._name) return;
        fieldCtrls[e.row._name].focus(e);
    }
    new (require("alloy/widget"))("nl.fokkezb.form");
    this.__widgetId = "nl.fokkezb.form";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "transparent",
        width: "100%",
        height: Ti.UI.FILL,
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        id: "table"
    });
    $.__views.table && $.addTopLevelView($.__views.table);
    onTableSingletap ? $.__views.table.addEventListener("singletap", onTableSingletap) : __defers["$.__views.table!singletap!onTableSingletap"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var deepExtend = require(WPATH("deepExtend"));
    $.validator = require(WPATH("validator"));
    $.init = init;
    $.getValues = getValues;
    $.setValues = setValues;
    $.isValid = isValid;
    $.getField = getField;
    var defaults;
    var fieldCtrls = {};
    var listener;
    var filter;
    var values = {};
    !function(args) {
        delete args.id;
        delete args.classes;
        delete args.__parentSymbol;
        delete args["$model"];
        delete args.__itemTemplate;
        args.config || args.fieldsets || args.fields ? init(args) : defaults = args;
    }(arguments[0] || {});
    __defers["$.__views.table!singletap!onTableSingletap"] && $.__views.table.addEventListener("singletap", onTableSingletap);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;