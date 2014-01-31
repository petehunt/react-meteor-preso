if (Meteor.isClient) {
  Meteor.startup(function() {
    function render() {
      React.renderComponent(renderBoard(board), document.body);
    }

    board = new Board("Pete's game", render);

    render();
  });
}
