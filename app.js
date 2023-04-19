window.onload = function(){
    const grid = document.querySelector('.grid')
    drawGrid(grid, 16);
}

function drawGrid (container, size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            container.appendChild(document.createElement('div'))
        }
    }
    return container;
}