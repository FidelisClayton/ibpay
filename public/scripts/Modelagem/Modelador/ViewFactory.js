var ViewFactory = {
	view: {},
	setView: function(form,name,view) {
		if(this.view[form]) {
			this.view[form][name] = view;	
		} else {
			this.view[form] = {};
			this.view[form][name] = view;	
		}
	},
	getView: function(form,name) {
		return this.view[form][name];
	}
}