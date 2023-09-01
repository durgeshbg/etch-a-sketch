const board = document.querySelector('.board');
const divs = Array.from(new Array(16), () => new Array(16));

for (let i = 0; i < 16; i++)
    for (let j = 0; j < 16; j++) divs[i][j] = document.createElement('div');

divs.forEach((divRow) => {
    const boardRow = document.createElement('div');
    boardRow.classList.add('board-row');
    divRow.forEach((divItem) => {
        divItem.classList.add('board-item');
        boardRow.appendChild(divItem);
    });
    board.appendChild(boardRow);
});

board.addEventListener('mouseover', (e) => {
    if (e.target.classList.value === 'board-item') {
        e.target.classList.add('changed');
    }
});
