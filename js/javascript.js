const gridContainer = document.querySelector('.grid');
//select the grid container
createGrid(16);

function createGrid(num) {
  num = num * num;
  for (let i = 0; i <num ; i++) {
    const grid = document.createElement('div');
    grid.classList.add('square')
    grid.style.border = '1px solid black';
    gridContainer.appendChild(grid);
  };
  const grids = Array.from(document.querySelectorAll('.square'));
  grids.forEach(box => box.addEventListener('click', () => startColor(grids)))
/*create a div with a square shape
make 16 rows, and 16 column 
01.possibility no one using css flex display property
other possibilities including float clear, inline block, and css grid.*/
}

//start coloring after the first click and stop when the mouse button is released.
function startColor(passIn) {
  passIn.forEach(grid => grid.addEventListener('mousedown', changeColor.bind(null, grid), false));
}
//make a function that will change the color of the grid div if the use click and hover the mouse
//our goal is to make the change feel responsive but not too responsive that the color will spill
//add event listener to the grid div
//hovering addEventListener hint onMouseEnter onMouseLeave
//change color 
function changeColor(changeMe, passMe) {
 changeMe.classList.add('changed');
}

