var Formulario = {
	objectForm: function(data) {
		objectForm = {};

		angular.forEach(data.groups,function(groupsValue,groupsName) {
			objectForm[groupsName] = {};
			angular.forEach(groupsValue,function(entitysValue,entitysName) {
				angular.forEach(entitysValue,function(entity_object,entity_name) {
					if(entity_object) {
						angular.forEach(entity_object.attributes,function(attributes_value,attribute_name) {
							if(attribute_name!="asDefined") {
								var view = attributes_value.view;
								if(view.show) {
									var attribute_view = {};
									attribute_view[attribute_name] = view;
									objectForm[groupsName][view.segment] = {};
									objectForm[groupsName][view.segment][entity_name] = attribute_view;
								}
							}
						});	
					}
				});
			});
		});

		console.log(objectForm);
		return objectForm;
	},
	buildSegment: function(entityName,attributes) {
		var response = {};
		// console.log(entityName,attributes);

		angular.forEach(attributes, function(attribute_value, attribute_name) {
			var view = ViewFactory.getView(attribute_name);
			if(view) {
				if(view.show) {
					response[view.segment] = {};
					response[view.segment][entityName] = [];
					response[view.segment][entityName].push(view);
				}
			}
		});

		return response;
	},
};