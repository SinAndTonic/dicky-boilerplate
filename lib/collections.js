Coffee = new Mongo.Collection('coffee');

var Schemas = {};

Schemas.Coffee = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 200

	}
});

Orders = new Mongo.Collection('orders');

Schemas.Orders = new SimpleSchema({
	"customer.$":{
		type: Object
	}
});