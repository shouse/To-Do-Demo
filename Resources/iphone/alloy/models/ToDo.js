var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            todo_id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            name: "TEXT",
            content: "TEXT",
            status: "BOOLEAN",
            createdDateTime: "TEXT",
            lastModifiedDateTime: "TEXT",
            reminderDateTime: "TEXT",
            dueDateDateTime: "TEXT",
            hasPhoto: "BOOLEAN",
            photoCount: "INTEGER"
        },
        defaults: {
            content: "test",
            status: false,
            reminderDateTime: false,
            lastModifiedDateTime: new Date(),
            hasPhoto: false,
            hasVideo: false,
            photoCount: 0
        },
        adapter: {
            idAttribute: "todo_id",
            type: "sql",
            collection_name: "ToDo"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("ToDo", exports.definition, []);

collection = Alloy.C("ToDo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;