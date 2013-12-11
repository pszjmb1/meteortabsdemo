if (Meteor.isClient) {
  Template.tabs.rendered = function() {
    $( "#tabs" ).tabs();
  }
}
