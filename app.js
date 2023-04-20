window.onload = function(){
    const grid = document.querySelector('.grid');
    drawGrid(grid, 16);
}

function drawGrid (container, size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
            container.appendChild(document.createElement('div'))
    }
    return container;
}