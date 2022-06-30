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
// Display the default slider value
//slider that will change the createGrid value
output.innerHTML = 16 + 'x' + 16;
console.log(this.value);
slider.oninput = function() {
  output.innerHTML = this.value + 'x' + this.value;
  createGrid(this.value);
// Update the current slider value (each time you drag the slider handle)
//slider output value
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

  grids.forEach(grid => grid.addEventListener('mousedown', startColor));
  grids.forEach(grid => grid.addEventListener('touchmove', startColor));
//if the user click it will fire up a function that will start the color change.

  function startColor() {
    grids.forEach(grid => grid.addEventListener('mousemove', changeColor));
    grids.forEach(grid => grid.addEventListener('touchmove', changeColor));
//start coloring
    grids.forEach(grid => grid.addEventListener('mouseup', () => {
      grids.forEach(grid => grid.removeEventListener('mousemove', changeColor));
      })
    )
    grids.forEach(grid => grid.addEventListener('touchend', () => {
      grids.forEach(grid => grid.removeEventListener('touchmove', changeColor));
//start coloring when mouse is moving and stop when the mouse button is released.
//start coloring when the screen is touched and stop when touch ends.
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
  let resetBC = Array.from(document.querySelectorAll('.square'));
  if (targetColor !== 'rainbow') {
    resetBC.forEach(child => child.removeEventListener('mousemove', rainbowColor));
    resetBC.forEach(child => child.removeEventListener('touchmove', rainbowColor));
  }
  if (targetColor === 'opacity on') {
    resetBC.forEach(child => child.removeEventListener('mouseenter', addOpacity));
    resetBC.forEach(child => child.removeEventListener('touchmove', addOpacity));
    e.target.classList.remove('on');
  }
  
  if (buttons[2].className !== 'opacity on' && targetColor !== 'opacity') {
    resetBC.forEach(child => child.addEventListener('mousemove', fullOpacity));
    resetBC.forEach(child => child.addEventListener('touchmove', fullOpacity));
    console.log('I\'m running');
  }

  if (targetColor === 'random') {
    rainbowColor();
  } else if (targetColor === 'reset') {
    const currentSize = Number(slider.value);
    createGrid(currentSize);
    resetBC.forEach(child => child.removeEventListener('mouseenter', addOpacity));
    resetBC.forEach(child => child.removeEventListener('touchmove', addOpacity));
    buttons[2].classList.remove('on');
  } else if (targetColor === 'rainbow') {
    resetBC.forEach(child => child.addEventListener('mousemove', rainbowColor));
    resetBC.forEach(child => child.addEventListener('touchmove', rainbowColor));
  } else if (targetColor === 'opacity') {
    resetBC.forEach(child => child.removeEventListener('mousemove', fullOpacity));
    resetBC.forEach(child => child.removeEventListener('touchmove', fullOpacity));
    if (targetColor !== 'on') {
      e.target.classList.add('on');
      resetBC.forEach(child => child.addEventListener('mouseenter', addOpacity));
      resetBC.forEach(child => child.addEventListener('touchmove', addOpacity));
    }
  } else {
    color = color;
  }
}
 
function addOpacity(e) {
  if (e.type === 'mouseenter') {
    let opacity = Number(e.target.style.opacity);
    if (opacity <= 0.9) {
      e.target.style.opacity = opacity += 0.1;
    }
  } else {
    offsetX = e.touches[0].clientX;
    offsetY = e.touches[0].clientY;
    const realTarget = document.elementFromPoint(offsetX, offsetY);
    let opacity = Number(realTarget.style.opacity)
    if (realTarget.className === 'square') {
      if (opacity <= 0.9) {
        realTarget.style.opacity = opacity += 0.1;
      }
    }
  }
}

function rainbowColor(e) {
  let r = Math.floor(Math.random() * 100) + '%';
  let g = Math.floor(Math.random() * 100) + '%';
  let b = Math.floor(Math.random() * 100) + '%';
  let rgb = [r, g, b].toString();
  color = `rgb(${rgb})`;

}

function fullOpacity(e) {
  if (e.type === 'mousemove') {
    e.target.style.opacity = null;
  } else {
     offsetX = e.touches[0].clientX;
     offsetY = e.touches[0].clientY;
     const realTarget = document.elementFromPoint(offsetX, offsetY);
     if (realTarget.className === 'square') {
       realTarget.style.opacity = null;
    }
  }
}

function changeColor(e) {
 if (e.type === 'mousemove') {
 e.target.style.backgroundColor = color;
 e.target.style.borderColor = color;
 }
 else {
  offsetX = e.touches[0].clientX;
  offsetY = e.touches[0].clientY;
  const realTarget = document.elementFromPoint(offsetX, offsetY);
  if (realTarget.className === 'square') {
    realTarget.style.backgroundColor = color;
    realTarget.style.borderColor = color;
  }
}

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

const showMe = document.querySelector('#right div');
const welcome = document.createElement('div');
welcome.textContent = greeting;
showMe.insertBefore(welcome, showMe.firstChild);
//Show interactive greeting message


