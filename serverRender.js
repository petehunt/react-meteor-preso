Meteor.Router.add({
  '/staticPage': function() {
    var board = new Board("Pete's game");
    var response;
    React.renderComponentToString(renderBoard(board), function(markup) {
      response = (
        '<html><head><title>Static page</title><link rel="stylesheet" href="/styles.css" /></head><body>' +
          markup +
          '</body></html>'
      );
    });
    return response;
  }
});