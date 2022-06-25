const gridContainer = document.querySelector('.grid');
const buttons = Array.from(document.querySelectorAll('.buttons button'));
let color = '#f7f4e9;';
//select the grid container
createGrid(16);
//make 16 rows, and 16 column 

function createGrid(num) {
  num = num * num;
  for (let i = 0; i <num ; i++) {
    const grid = document.createElement('div');
    grid.classList.add('square')
    grid.style.border = '1px solid black';
    gridContainer.appendChild(grid);
//Create new div elements
  };
}

const grids = Array.from(document.querySelectorAll('.square'));
  grids.forEach(box => box.addEventListener('mousedown', startColor));
//if the user click it will fire up a function that will start the color change.

function startColor() {
  let start = grids.forEach(grid => grid.addEventListener('mousemove', changeColor));
  grids.forEach(grid => grid.addEventListener('mouseup', () => {
    grids.forEach(grid => grid.removeEventListener('mousemove', changeColor));
  
//start coloring when mouse is moving and stop when the mouse button is released.
    })
  );
}
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('chosen');
}

buttons.forEach(button => button.addEventListener('click', pickColor))
buttons.forEach(button => button.addEventListener('click', () => {
  button.classList.add('chosen');
}))
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
//remove the border change

function pickColor(e) {
  let targetColor = e.target.className;
  console.log(color);
  if (targetColor === 'yellow') {
    color = '#eba63f';
  } else if (targetColor === 'green') {
    color = '#438945';
  } else if (targetColor === 'blue') {
    color = '#3cbcc3'
  } else if (targetColor === 'reset') {
    grids.forEach(grid => grid.style.backgroundColor = '#f7f4e9');
    color = '#f7f4e9;';
  } else {
    color = color;
  }
}
function changeColor(e) {
 
 e.target.style.backgroundColor = color;
//change the color of individual grid div
}

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
//Show interactive greeting message


