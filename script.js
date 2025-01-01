let color = 'black';
let boardSize = 750;
let itemSize = 200;
let isClicked = false;
const board = document.querySelector('.board');

function createBoard(itemSize) {
  let itemWidth = `${boardSize / itemSize}px`;
  let itemHeigth = `${boardSize / itemSize}px`;

  for (let i = 0; i < itemSize * itemSize; i++) {
    const divItem = document.createElement('div');
    divItem.style.width = itemWidth;
    divItem.style.height = itemHeigth;
    divItem.style.background = 'white';
    divItem.addEventListener('mouseover', () => {
      if (isClicked) divItem.style.background = color;
    });
    divItem.addEventListener('mousedown', () => {
      isClicked = true;
    });
    divItem.addEventListener('mouseup', () => {
      isClicked = false;
    });
    board.appendChild(divItem);
  }
}

function clearBoard() {
  board.childNodes.forEach((boardItem) => (boardItem.style.background = 'white'));
}

document.querySelector('.pallete input').addEventListener('change', (e) => {
  color = e.target.value;
});

window.addEventListener('keydown', (e) => {
  if (e.code == 'Space') clearBoard();
});

createBoard(itemSize);
