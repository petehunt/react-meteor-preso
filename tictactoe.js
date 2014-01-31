if (Meteor.isClient) {

  var previousBoards = [];

  replay = function() {
    var i = 0;
    function tick() {
      if (i >= previousBoards.length) {
        return;
      }
      React.renderComponent(renderBoard(previousBoards[i]), document.body);
      i++;
      setTimeout(tick, 1000);
    }
    tick();
  };

  Meteor.startup(function() {
    Deps.autorun(function() {
      board = new Board("Pete's game");
      previousBoards.push(board);
      React.renderComponent(renderBoard(board), document.body);
    });
  });
}
