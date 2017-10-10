// 1) pickRandomHole
// 2) addMoleToHole
// 3) addClickToHoleWhereMoleIs
// 3) removeMoleFromHole
// 4) removeClickFromHoleWhereMoleWas

$(setup);
//Created a variable to use later.
let $holes = null;
let $score = null;
let $timer = null;
let $startButton = null;
let scoreValue = 0;
let timerLimit = 6;

//Within the setup fucntion I called and assigned hole class.
function setup() {
  $holes = $('.hole');
console.log($holes);
  $score = $('.score');
console.log($score);
  $timer = $('.timer');
console.log($timer);
  $startButton = ('.start');
  $($startButton).on('click', startGame);
}

function startGame() {
  // make start button disappear
  pickRandomHole();
}

//The bottom function will pick a random hole.
function pickRandomHole() {
  const number = Math.floor(Math.random()*$holes.length);
console.log(number);
  const hole = $holes[number];
console.log(hole);
  addMoleToHole(hole);
}

//Now I need to add a mole to the hole.
function addMoleToHole(hole) {
  const mole = $(hole).addClass('mole');
  time();
  //Timeout function removes class and click event.
  setTimeout(function() {
    //removes class if not clicked.
    $(mole).removeClass('mole');
    //removes click event.
    $(mole).off('click');
    if (timerLimit > 0) {
      pickRandomHole();
    } else {
      console.log('game over');
      // make start button reappear

    }
  }, 1000);
  // setIntervalBetweenRandomMole(mole);
  addClickToHoleWhereMoleIs(mole);
}

//Countdown the time
function time() {
  timerLimit--;
  const timer = $timer.html(timerLimit);
  console.log(timerLimit);
  addClickToHoleWhereMoleIs();
}

//Add a click event on the random mole.
function addClickToHoleWhereMoleIs(mole) {
  $(mole).one('click', () => {
    scoreValue++;
  console.log(scoreValue);
    $score.html(scoreValue);
  console.log('Im hit');
    //Remove the click from hole.
    const removeMole = $(mole).removeClass('mole');
  });
}
