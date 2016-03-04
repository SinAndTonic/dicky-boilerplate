Meteor.subscribe("coffee");

Template.Home.helpers({
	displayCoffee: function(){
		return Coffee.find();
	}
});