function generateGrid(size) {
    const grid = document.querySelector('#grid')
    
    // If any grid squares exist, remove them
    const oldGridSquares = document.querySelectorAll('#grid .grid-row')
    oldGridSquares.forEach((row) => {
        row.remove()
    })

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')

        row.classList.add('grid-row')
        for (let i = 0; i < size; i++) {
            const gridSquare = document.createElement('div')
            
            gridSquare.classList.add('grid-square')

            gridSquare.addEventListener('mouseover', (e) => {
                e.target.classList.add('hover')
            })

            row.appendChild(gridSquare)
        }
        grid.appendChild(row)
    }
}

const newGridButton = document.querySelector('#new-grid')

newGridButton.addEventListener('click', () => {
    let newGridSize = parseInt(prompt('How many squares per size? (max: 100)'))

    if (newGridSize > 100) {
        newGridSize = 100
    }

    generateGrid(newGridSize)
})