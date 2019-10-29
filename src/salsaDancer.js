var SalsaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

SalsaDancer.prototype = Object.create(Dancer.prototype);
SalsaDancer.prototype.constructor = SalsaDancer;

SalsaDancer.prototype.oldStep = Dancer.prototype.step;

SalsaDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // debugger;
  this.$node.fadeIn();
  this.$node.fadeOut();
  this.oldStep();
  // this.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};