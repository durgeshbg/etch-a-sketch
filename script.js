let color = 'black';
let boardSize = 750
let itemSize = 30;
let isClicked = false;
const board = document.querySelector('.board');

function createBoard(itemSize) {
    let itemWidth = `${boardSize / itemSize}px`;
    let itemHeigth = `${boardSize / itemSize}px`;

    for (let i = 0; i < itemSize * itemSize; i++) {
        const divItem = document.createElement('div');
        divItem.style.width = itemWidth;
        divItem.style.height = itemHeigth;
        divItem.style.background = "white";
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
    board.childNodes.forEach(
        (boardItem) => (boardItem.style.background = 'white')
    );
}

function resizeBoard() {
    do {
        itemSize = prompt('Enter Size: ');
        if (itemSize > 64) alert('Size too big: Optimal Range 10-64');
        else if (itemSize < 10) alert('Size too small: Optimal Range 10-64');
    } while (itemSize < 10 || itemSize > 64);
    while (board.hasChildNodes()) board.removeChild(board.firstChild);
    document.querySelector(".current-size").textContent = `Current Size: ${itemSize}x${itemSize}`
    createBoard(itemSize);
}

document.querySelectorAll('.pallete-buttons').forEach((button) => {
    button.addEventListener('click', (e) => {
        color = e.target.dataset.color;
    });
});

window.addEventListener('keydown', (e) => {
    if (e.code == 'Space') clearBoard();
});

createBoard(itemSize);
