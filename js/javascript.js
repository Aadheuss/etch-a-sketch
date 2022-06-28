const gridContainer = document.querySelector('.grid');
const bigContainer = document.querySelector('.big-container');
const buttons = Array.from(document.querySelectorAll('.buttons button'));
const slider = document.getElementById("myRange");
const output = document.getElementById("output");
let color = '#f7f4e9;';
//select the grid container

gridContainer.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

gridContainer.addEventListener('drop', (e) => {
  e.preventDefault()
})
createGrid(16);

output.innerHTML = slider.value + 'x' + slider.value; 
// Display the default slider value
//slider that will change the createGrid value
slider.oninput = function() {
  
  output.innerHTML = this.value + 'x' + this.value;
  createGrid(this.value);
  console.log(grids);
// Update the current slider value (each time you drag the slider handle)
}

function createGrid(num) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  for (let i = 0; i < num * num; i++) {
    const grid = document.createElement('div');
    grid.classList.add('square')
    grid.style.border = '0.001px solid #ffffff';
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    gridContainer.appendChild(grid);
    };

    const grids = Array.from(document.querySelectorAll('.square'));
  grids.forEach(box => box.addEventListener('mousedown', startColor));
//if the user click it will fire up a function that will start the color change.

  function startColor() {
    grids.forEach(grid => grid.addEventListener('mousemove', changeColor));
    grids.forEach(grid => grid.addEventListener('mouseup', () => {
      grids.forEach(grid => grid.removeEventListener('mousemove', changeColor));
//start coloring when mouse is moving and stop when the mouse button is released.
      })
    )
    bigContainer.addEventListener('mouseleave', () => {
      grids.forEach(grid => grid.removeEventListener('mousemove', changeColor));
      }
    )

  }
//Create new div elements
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
 e.target.style.borderColor = color;
//change the color of individual grid div
}

//slider output value
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

const showMe = document.querySelector('#right div');
const welcome = document.createElement('div');
welcome.textContent = greeting;
showMe.insertBefore(welcome, showMe.firstChild);
//Show interactive greeting message


