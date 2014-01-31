Board = function(name, onChange) {
  this.name = name;
  this.moves = {};
  this.turn = 'x';
  this.onChange = onChange;
};

Board.prototype.move = function(x, y) {
  if (this.get(x, y)) {
    throw new Error('Someone already moved there!');
  }

  this.moves[x + ',' + y] = this.turn;
  this.turn = this.turn === 'x' ? 'o' : 'x';

  this.onChange();
};

Board.prototype.get = function(x, y) {
  return this.moves[x + ',' + y];
};

Board.prototype.reset = function() {
  this.moves = {};
  this.onChange();
};