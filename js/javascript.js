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
/*create a div with a square shape
make 16 rows, and 16 column 
01.possibility no one using css flex display property
other possibilities including float clear, inline block, and css grid.*/
}

const grids = Array.from(document.querySelectorAll('.square'));
  grids.forEach(box => box.addEventListener('mousedown', startColor));

//if the user click it will fire up a function that will change the style color attribute
//after the function called the mousemove will change the color of targeted div.

//start coloring after the first click and stop when the mouse button is released.
function startColor() {
  grids.forEach(grid => grid.addEventListener('mousemove', changeColor));
  grids.forEach(grid => grid.addEventListener('mouseup', () => {
    grids.forEach(grid => grid.removeEventListener('mousemove', changeColor));
    console.log('what happen?')
    })
  );
}
//make a function that will change the color of the grid div if the use click and hover the mouse
//our goal is to make the change feel responsive but not too responsive that the color will spill
//add event listener to the grid div
//hovering addEventListener hint onMouseEnter onMouseLeave
//change color 
function changeColor(e) {
 
 e.target.classList.add('changed');
}
//If it clicked or hover the color change but how do I change the color?
//If clicked change individual div
//individual div class is square let's try to see the event

const today = new Date();
const hourNow = today.getHours();
let greeting;
if (hourNow >= 18) {
  greeting = 'Good evening!';
} else if (hourNow >= 16) {
  greeting = 'Good afternoon!';
} else if (hourNow >= 12) {
  greeting = 'Good day!';
} else if (hourNow >= 6) {
  greeting = 'Good morning!';
} else {
  greeting = 'Aren\'t feeling sleepy yet?';
}

const showMe = document.querySelector('#right');
const welcome = document.createElement('div');
welcome.textContent = greeting;
showMe.insertBefore(welcome, showMe.firstChild);


