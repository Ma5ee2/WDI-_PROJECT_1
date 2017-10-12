$(setup);

let scoreValue = 0;
let timerLimit = 11;


function setup() {
  $timer = $('.timer');
  $holes = $('.hole');
  $timeBoard = $('.time-board');
  $scoreBoard = $('.score-board');
  $startButton = $('.start');
  $($startButton).on('click', startGame);
  $($holes).on('click', checkForMole);
  $(window).on('load', audio);
}

function checkForMole(e) {
  if ($(this).hasClass('mole dead-mole')) {
    scoreValue += 5;
    $score.html(scoreValue);
    const smashAudio = new Audio('sounds/smash.wav').play();
  } else {
    scoreValue -= 8;
    $score.html(scoreValue);
    const missAudio = new Audio('sounds/miss.wav').play();
  }
}

function pickRandomHole() {
  const number = Math.floor(Math.random() * $holes.length)
  const hole = $holes[number];
  addMoleToHole(hole);
}

function addMoleToHole(hole) {
  const mole = $(hole).addClass('mole');
  const hitMole = $(hole).addClass('dead-mole');
  timeOut(mole, hitMole);
}

function timeOut(mole, hitMole) {
  time();
  setTimeout(function() {
    $(mole).removeClass('mole');
    $(hitMole).removeClass('dead-mole');
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

function audio() {
  const backgroundAudio = new Audio('sounds/background.wav');
  backgroundAudio.play();
}

function startGame() {
  $('.start').hide();
  reset();
  pickRandomHole();
}

function reset() {
  scoreValue = 0;
  timerLimit = 11;
  $holes = $('.hole');
  $timeBoard.html('Time: <span class="timer">15</span></div>');
  $timer = $('.timer');
  $score = $('.score');
  $timeBoard = $('.time-board');
}
