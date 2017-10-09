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
//Created a variable to use later
let $holes = null;

//Within the setup fucntion I called and assigned hole class.
function setup() {
  $holes = $('.hole');
  console.log($holes);

  pickRandomHole();
}
//The bottom function will pick a random hole
function pickRandomHole() {
  let hole = $holes[Math.floor(Math.random()*$holes.length)];

  addMoleToHole(hole);
}
//Now I need to add a mole to the hole.
function addMoleToHole(hole) {
  const mole = $(hole).addClass('mole');

  addClickToHoleWhereMoleIs(mole);
}

function addClickToHoleWhereMoleIs(mole) {

}
