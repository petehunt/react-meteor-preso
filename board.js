BoardData = new Meteor.Collection('BoardData');

Board = function(name) {
  this.data = BoardData.findOne({name: name});

  if (!this.data) {
    BoardData.insert({
      name: name,
      moves: {},
      turn: 'x'
    });
    this.data = BoardData.findOne({name: name});
  }
};

Board.prototype.move = function(x, y) {
  if (this.get(x, y)) {
    throw new Error('Someone already moved there!');
  }

  var set = {};

  set['moves.' + x + ',' + y] = this.data.turn;
  set.turn = this.data.turn === 'x' ? 'y' : 'x';

  BoardData.update(this.data._id, {
    $set: set
  });
};

Board.prototype.get = function(x, y) {
  return this.data.moves[x + ',' + y];
};

Board.prototype.reset = function() {
  this.data.moves = {};
  BoardData.update(this.data._id, {$set: {moves: {}}});
};