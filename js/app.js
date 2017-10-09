// $(() => {
//   //Declare variables.
//   const $holes = $('.hole');
//   // let $score   = $('.score');
//   // let $timer   = $('.timer');
//   // const $start = $('.start');
//
//   // Declare the click event.
//   // $holes.on('click', hole);
//   //
//   //
//   // function hole(e) {
//   //   Remembers last hole clicked.
//   //   const $clickedMole = $(e.target);
//   //
//   // }
//
//   // Random mole in hole function.
//
//   function randomHole($holes) {
//     const randomMole = Math.floor(Math.random() * $holes);
//     const hole = $holes[randomHole];
//     console.log(hole);
//   }
// });

// 1) pickRandomHole
// 2) addMoleToHole
// 3) addClickToHoleWhereMoleIs
// 3) removeMoleFromHole
// 4) removeClickFromHoleWhereMoleWas

$(setup);

let $holes = null;
console.log($holes);

function setup() {
  $holes = $('.hole');
  pickRandomHole();
}

function pickRandomHole() {
const hole = $holes[Math.floor(Math.random()*$holes.length)];
addMoleToHole();
}

function addMoleToHole() {

}
