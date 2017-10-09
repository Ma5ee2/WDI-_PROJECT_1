// 1) pickRandomHole
// 2) addMoleToHole
// 3) addClickToHoleWhereMoleIs
// 3) removeMoleFromHole
// 4) removeClickFromHoleWhereMoleWas

$(setup);
//Created a variable to use later
let $holes = null;
// let $score = $('.score');
// let $score = 0;

//Within the setup fucntion I called and assigned hole class.
function setup() {
  $holes = $('.hole');

  pickRandomHole();
}

//The bottom function will pick a random hole
function pickRandomHole() {
  const hole = $holes[Math.floor(Math.random()*$holes.length)];

  addMoleToHole(hole);
}

//Now I need to add a mole to the hole.
function addMoleToHole(hole) {
  const mole = $(hole).addClass('mole');
  //click event to shows random mole.
  $(mole).one('click', addClickToHoleWhereMoleIs);
  setTimeout(function() {
    //removes class if not clicked.
    $(mole).removeClass('mole');
    $(mole).off('click');
    //loops the game.
    // pickRandomHole();
  }, 800);
  addClickToHoleWhereMoleIs(mole);
}

//Add a click event on the random mole.
function addClickToHoleWhereMoleIs(mole) {
  $(mole).one('click', () => {
    console.log('Im hit');
    //Remove the click from hole.
    const removeMole = $(mole).removeClass('mole');
    //Make it randomly re-appear.
    // pickRandomHole();
  });
}
