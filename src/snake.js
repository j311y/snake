function Snake() {
  this._snakeDefault = 10;
  this._score = 0;
}


Snake.prototype.defaultSnakeSize = function() {
  return this._snakeDefault;
};

Snake.prototype.defaultScore = function() {
  return this._score;
};