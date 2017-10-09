$(() =>{

//Declare variable to access all the holes.

const $li = $('.holes');


//Declare the click event.
$li.on('click', hole);

function hole(e) {
  const $clickedMole = $(e.target);
  console.log($clickedMole);
}






});
