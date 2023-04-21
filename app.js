const grid = document.querySelector('.grid');
const uiContainer = document.querySelector('.ui')
const resizeBtn = document.createElement('button');
const colorPicker = document.createElement('input')
colorPicker.setAttribute('type', 'color')
resizeBtn.textContent = 'Resize'
resizeBtn.addEventListener('click', changeSize)

uiContainer.append(resizeBtn, colorPicker)
drawGrid(grid, 16);

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
    const pencilColor = (color) => {
        return (e) => {
            e.target.style.backgroundColor = color;
        }
    };
    let isDrawing = false;

    pixels.forEach(pixel => {
        pixel.addEventListener('mousedown', () => {
            isDrawing = true;
        })

        pixel.addEventListener('mouseup', () => {
            isDrawing = false;
        })

        pixel.addEventListener('click', (e) => {
            pencilColor(colorPicker.value)(e)
        })

        pixel.addEventListener('mousemove', (e) => {
            if (isDrawing) {
                pencilColor(colorPicker.value)(e);
            }
        })
    })
}

function changeSize() {
    let newSize = parseInt(prompt("What size would you like the grid to be? (1-100)", 16));
    if (newSize > 100 || newSize == null) newSize = 16

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }

    drawGrid(grid, newSize);
    draw()
}

draw();