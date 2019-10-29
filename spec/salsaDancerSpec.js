describe('salsaDancer', function() {

  var salsaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    salsaDancer = new SalsaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(salsaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fadeIn and fadeOut', function() {
    sinon.spy(salsaDancer.$node, 'fadeIn');
    sinon.spy(salsaDancer.$node, 'fadeOut');
    salsaDancer.step();
    expect(salsaDancer.$node.fadeIn.called).to.be.true;
    expect(salsaDancer.$node.fadeOut.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(salsaDancer, 'step');
      expect(salsaDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(salsaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(salsaDancer.step.callCount).to.be.equal(2);
    });
  });
});
