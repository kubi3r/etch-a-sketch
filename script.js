// Generate grid of 16x16 divs

const grid = document.querySelector('#grid')

for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.classList.add('grid-square')

        grid.appendChild(gridSquare)
    }
}