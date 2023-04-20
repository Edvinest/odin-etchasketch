const grid = document.querySelector('.grid');
const uiContainer = document.querySelector('.ui')
const resizeBtn = document.createElement('button');
resizeBtn.textContent = 'Resize'
resizeBtn.addEventListener('click', changeSize)

uiContainer.appendChild(resizeBtn)
const gridSize = changeSize;
drawGrid(grid, gridSize);

function drawGrid(container, size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.style.backgroundColor = 'white'
        container.appendChild(gridElement)
    }
    return container;
}

function draw() {
    const pixels = document.querySelectorAll('.grid div');

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseleave', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    })
}

function changeSize(){
    let newSize = prompt("What size would you like the grid to be? (1-100)", 16);
    if (newSize > 100 || newSize == null) newSize = 16
    return newSize;
}

draw();