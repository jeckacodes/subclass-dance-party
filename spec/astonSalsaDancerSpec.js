describe('astonSalsaDancer', function() {

  var astonSalsaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    astonSalsaDancer = new AstonSalsaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(astonSalsaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blur', function() {
    sinon.spy(astonSalsaDancer.$node, 'blur');
    astonSalsaDancer.step();
    expect(astonSalsaDancer.$node.blur.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(astonSalsaDancer, 'step');
      expect(astonSalsaDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(astonSalsaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(astonSalsaDancer.step.callCount).to.be.equal(2);
    });
  });
});
