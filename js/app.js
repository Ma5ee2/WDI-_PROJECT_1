$(setup);

let scoreValue = 0;
let timerLimit = 11;
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
  }, 1000);
  addClickToHoleWhereMoleIs(mole);
}

function time() {
  timerLimit--;
  const timer = $timer.html(timerLimit);
  addClickToHoleWhereMoleIs();
}

function addClickToHoleWhereMoleIs(mole) {
  $(mole).on('click', () => {
    if (true) {
    scoreValue++;
    $score.html(scoreValue);
  } else {
    scoreValue--;
    $score.html(scoreValue);
    console.log(scoreValue);
  }
  });
}

function reset() {
  scoreValue = 0;
  timerLimit = 11;
  $timeBoard.html('Time: <span class="timer">15</span></div>');
  $timer = $('.timer');
  $score = $('.score');
}
