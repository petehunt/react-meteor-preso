if (Meteor.isClient) {
  Meteor.startup(function() {
    Deps.autorun(function() {
      board = new Board('hello');

      React.renderComponent(renderBoard(board), document.body);
    });
  });
}
