let color = 'black';
// let size = prompt("Enter grid size: ");
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

document.querySelectorAll('.pallete-buttons').forEach((button) => {
    button.addEventListener('click', (e) => {
        color = e.target.dataset.color;
    });
});

createBoard(size);

window.addEventListener('keydown', (e) => {
    if (e.code == 'Space') clearBoard();
});
