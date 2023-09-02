const board = document.querySelector('.board');
let color = 'black';
let size = 16;
let itemWidth = `${800 / size}px`;
let itemHeigth = `${800 / size}px`;

for (let i = 0; i < size * 16; i++) {
    const divItem = document.createElement('div');
    divItem.style.width = itemWidth;
    divItem.style.height = itemHeigth;
    divItem.addEventListener('mouseover', () => {
        divItem.style.background = color;
    });
    board.appendChild(divItem);
}
