Meteor.publish("coffee", function () {
    return Coffee.find();
  });