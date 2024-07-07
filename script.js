function generateGrid(size) {
    const grid = document.querySelector('#grid')
    

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

generateGrid(16)