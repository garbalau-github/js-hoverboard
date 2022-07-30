const container = document.getElementById('container');
const buttonDefaultColors = document.getElementById('button-default');
const buttonGitColors = document.getElementById('button-git');
const buttonCleanMode = document.getElementById('button-clean-mode');
const buttonDefaultMode = document.getElementById('button-default-mode');
const SQUARES = 1500;

let isCleaning = false;
let colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const populateSquares = () => {
  for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    if (isCleaning) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber < 1) {
        square.style.backgroundColor = 'brown';
      }
    }

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
  }
};
populateSquares();

const setColor = (element) => {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  // element.style.background = '#1d1d1d';
  // element.style.boxShadow = '0 0 2px #000';
};

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const renderSquares = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  populateSquares();
};

buttonDefaultMode.classList.add('selected');
buttonDefaultColors.classList.add('selected');

buttonDefaultColors.addEventListener('click', () => {
  buttonGitColors.classList.remove('selected');
  buttonDefaultColors.classList.add('selected');
  colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
});

buttonGitColors.addEventListener('click', () => {
  buttonDefaultColors.classList.remove('selected');
  buttonGitColors.classList.add('selected');
  colors = ['#9be9a8', '#40c463', '#30a14e', '#216e39'];
});

buttonCleanMode.addEventListener('click', () => {
  buttonDefaultMode.classList.remove('selected');
  buttonCleanMode.classList.add('selected');
  isCleaning = true;
  renderSquares();
});

buttonDefaultMode.addEventListener('click', () => {
  buttonDefaultMode.classList.add('selected');
  buttonCleanMode.classList.remove('selected');
  isCleaning = false;
  renderSquares();
});
