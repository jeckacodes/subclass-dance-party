var AstonSalsaDancer = function(top, left, timeBetweenSteps) {
  SalsaDancer.call(this, top, left, timeBetweenSteps);
};

AstonSalsaDancer.prototype = Object.create(SalsaDancer.prototype);
AstonSalsaDancer.prototype.constructor = AstonSalsaDancer;

AstonSalsaDancer.prototype.pastStep = SalsaDancer.prototype.step;

AstonSalsaDancer.prototype.step = function() {
  this.$node.blur();
  this.pastStep();
};