var SalsaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SalsaDancer.prototype = Object.create(Dancer.prototype);
SalsaDancer.prototype.constructor = SalsaDancer;

SalsaDancer.prototype.oldStep = Dancer.prototype.step;

SalsaDancer.prototype.step = function() {
  this.$node.fadeIn();
  this.$node.fadeOut();
  this.oldStep();
};