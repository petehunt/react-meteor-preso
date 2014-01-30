if (Meteor.isClient) {
  Meteor.startup(function() {
    Deps.autorun(function() {
      board = new Board("Pete's game");
    });
  });
}
