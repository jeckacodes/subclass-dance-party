$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = this.attributes['data-dancer-maker-function-name'].nodeValue;
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

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
      // debugger;
      if (i === window.dancers.length - 1) { break; }
      let randX = Math.floor(Math.random() * 1000);
      let randY = Math.floor(Math.random() * 700);
      var circle = function(i, randY, randX) {
        window.dancers[i + 1].setPosition(randY, randX + 100);
        window.dancers[i].setPosition(randY, randX - 100);
        setTimeout(function() {
          // debugger;
          window.dancers[i + 1].setPosition(randY - 100, randX);
          window.dancers[i].setPosition(randY + 100, randX);
        }, 800);
        setTimeout(function() {
          // debugger;
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

