let color = 'black';
let size = 16;
let board = document.querySelector('.board');

function createBoard(size) {
    let itemWidth = `${800 / size}px`;
    let itemHeigth = `${800 / size}px`;

    for (let i = 0; i < size * size; i++) {
        const divItem = document.createElement('div');
        divItem.style.width = itemWidth;
        divItem.style.height = itemHeigth;
        divItem.addEventListener('mouseover', () => {
            divItem.style.background = color;
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
        size = prompt("Enter size: ");
        if (size > 64) alert("Size too big: Optimal Range 10-64");
        else if(size < 10) alert("Size too small: Optimal Range 10-64")
    } while (size < 10 || size > 64)
    clearBoard();
    createBoard(size);
}


createBoard(size);

document.querySelectorAll('.pallete-buttons').forEach((button) => {
    button.addEventListener('click', (e) => {
        color = e.target.dataset.color;
    });
});

window.addEventListener('keydown', (e) => {
    if (e.code == 'Space') clearBoard();
});
