var AstonSalsaDancer = function(top, left, timeBetweenSteps) {
  SalsaDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

AstonSalsaDancer.prototype = Object.create(SalsaDancer.prototype);
AstonSalsaDancer.prototype.constructor = AstonSalsaDancer;

AstonSalsaDancer.prototype.pastStep = SalsaDancer.prototype.step;

// AstonSalsaDancer.prototype.oldOldStep = Dancer.prototype.step;

AstonSalsaDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // debugger;
  this.$node.blur();
  this.pastStep();
  // this.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};