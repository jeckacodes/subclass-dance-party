$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = this.attributes['data-dancer-maker-function-name'].nodeValue;

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $(dancer.$node).attr('dancerType', dancerMakerFunctionName);
    $('body').append(dancer.$node);

    window.dancers.push(dancer);

    mousey(dancer);
  });

  var mousey = function(dancer) {
    $(dancer.$node).mouseover(function(event) {
      dancer.setPosition(400, 550);
    });
  };

  $('.addLineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(300, 400 * i);
    }
  });

  $('.superDance').on('click', function(event) {

    for (let i = 0; i < window.dancers.length; i += 2) {
      if (i === window.dancers.length - 1) { break; }
      let randX = Math.floor(Math.random() * 1000);
      let randY = Math.floor(Math.random() * 700);

      var circle = function(i, randY, randX) {
        window.dancers[i + 1].setPosition(randY, randX + 100);
        window.dancers[i].setPosition(randY, randX - 100);
        setTimeout(function() {
          window.dancers[i + 1].setPosition(randY - 100, randX);
          window.dancers[i].setPosition(randY + 100, randX);
        }, 800);
        setTimeout(function() {
          window.dancers[i + 1].setPosition(randY, randX - 100);
          window.dancers[i].setPosition(randY, randX + 100);
        }, 1600);
        setTimeout(function() {
          window.dancers[i + 1].setPosition(randY + 100, randX);
          window.dancers[i].setPosition(randY - 100, randX);
        }, 2400);
        setTimeout(function() {
          window.dancers[i + 1].setPosition(randY, randX + 100);
          window.dancers[i].setPosition(randY, randX - 100);
        }, 3200);
        setTimeout(function() {
          circle(i, randY, randX);
        }, 3200);
      };

      circle(i, randY, randX);
    }
  });

});

