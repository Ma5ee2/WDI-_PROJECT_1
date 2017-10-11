$(setup);

let scoreValue = 0;
let timerLimit = 5;
let $timeBoard;

function setup() {
  $holes = $('.hole');
  $timeBoard = $('.time-board');
  $startButton = ('.start');
  $($startButton).on('click', startGame);
}

function startGame() {
  $('.start').hide();
  reset();
  pickRandomHole();
}

function pickRandomHole() {
  const number = Math.floor(Math.random() * $holes.length)
  const hole = $holes[number];
  addMoleToHole(hole);
}

function addMoleToHole(hole) {
  const mole = $(hole).addClass('mole');
  time();
  setTimeout(function() {
    $(mole).removeClass('mole');
    $(mole).off('click');
    if (timerLimit > 0) {
      pickRandomHole();
    } else {
      $timeBoard.html('Game over');
      $('.start').show();
    }
  }, 800);
  addClickToHoleWhereMoleIs(mole);
}

function time() {
  timerLimit--;
  const timer = $timer.html(timerLimit);
  addClickToHoleWhereMoleIs();
}

function addClickToHoleWhereMoleIs(mole) {
  $(mole).one('click', () => {
    if (true) {
    scoreValue++;
    $score.html(scoreValue);
    const removeMole = $(mole).removeClass('mole');
  });
}

function reset() {
  scoreValue = 0;
  timerLimit = 5;
  $timeBoard.html('Time: <span class="timer">15</span></div>');
  $timer = $('.timer');
  $score = $('.score');
}
