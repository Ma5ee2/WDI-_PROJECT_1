$(setup);

let scoreValue = 0;
let timerLimit = 11;


function setup() {
  $timer = $('.timer');
  $holes = $('.hole');
  $timeBoard = $('.time-board');
  $startButton = ('.start');
  $($startButton).on('click', startGame);
  $($holes).on('click', checkForMole);
}

function checkForMole(e) {
  if ($(this).hasClass('mole')) {
    scoreValue++;
    console.log(scoreValue);
    $score.html(scoreValue);
  } else {
    scoreValue--;
    console.log("wasssup");
    $score.html(scoreValue);
  }
}

function pickRandomHole() {
  const number = Math.floor(Math.random() * $holes.length)
  const hole = $holes[number];
  addMoleToHole(hole);
}

function addMoleToHole(hole) {
  const mole = $(hole).addClass('mole');
  console.log(mole);
  timeOut(mole);
}

function timeOut(mole) {
  time();
  setTimeout(function() {
    $(mole).removeClass('mole');
    if (timerLimit > 0) {
      pickRandomHole();
    } else {
      $timeBoard.html('Game over');
      $('.start').show();
    }
  }, 1000);
}

function time() {
  timerLimit--;
  const timer = $timer.html(timerLimit);
}

function startGame() {
  $('.start').hide();
  reset();
  pickRandomHole();
}

function reset() {
  scoreValue = 0;
  timerLimit = 11;
  $timeBoard.html('Time: <span class="timer">15</span></div>');
  $timer = $('.timer');
  $score = $('.score');
}
