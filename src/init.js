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
  });

  $('.addLineUp').on('click', function(event) {
    var lineUp = function() {
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].setPosition(300, 400 * i);
      }
    }();
  });

  var mousey = function() {
    for (var i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i].$node).mouseover(function() {
        window.dancers[i].setPosition(500, 700);
      });
    }
  }();
});

