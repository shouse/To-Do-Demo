var moment = require("moment");
exports.definition = {

	config : {
		"columns" : {
			"todo_id"	            : "INTEGER PRIMARY KEY AUTOINCREMENT",
			"name"                  : "TEXT",
            "content"			    : "TEXT",
			"status"			    : "BOOLEAN",
			"createdDateTime"       : "TEXT",
			"lastModifiedDateTime"	: "TEXT",
			"reminderDateTime"	    : "TEXT",
            "dueDateDateTime"	    : "INTEGER",
			"hasPhoto"			    : "BOOLEAN",
			"photoCount"		    : "INTEGER",
            "categories"            : "TEXT"
	    },
		"defaults" : {
			"content"               : "",
            "status"                : false,
			"dueDateDateTime" 	    : false,
            "reminderDateTime" 	    : false,
            "lastModifiedDateTime"	: moment().format(),
			"hasPhoto"			    : false,
			"hasVideo"			    : false,
			"photoCount"		    : 0
		},
		"adapter" : {
			"idAttribute": "todo_id",
			"type" : "sql",
			"collection_name" : "ToDo"
		}
	},

	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions go here
		});

		return Model;
	},

	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			/*
			initialize : function() {
				//this.bindAll(this);
				_.bindAll(this);
				this.setElement(this.at(0));
			},
			comparator : function(model) {
				return model.get("id");
			},
			getElement : function() {
				return this.currentElement;
			},
			setElement : function(model) {
				this.currentElement = model;
			},
			next : function() {
				this.setElement(this.at(this.indexOf(this.getElement()) + 1));
				alert('next\n: ' + JSON.stringify(this));
				return this;
			},
			prev : function() {
				alert('prev');
				this.setElement(this.at(this.indexOf(this.getElement()) - 1));
				return this;
			}
			*/
		});
		// end extend

		return Collection;
	}
};
