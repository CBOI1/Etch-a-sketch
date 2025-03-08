// add 16 div grid to body
let body = document.body;
const GRID_COUNT = 16;

let container = document.querySelector("div.container");
//calculate width and height of each grid cell

function createGrid() {
    let gridCellWidth = Math.floor(container.offsetWidth / GRID_COUNT);
    let gridCellHeight = Math.floor(container.offsetHeight / GRID_COUNT);
    
    for (let i = 0; i < GRID_COUNT * GRID_COUNT; i++) {
        let newDiv = document.createElement("div");
        newDiv.style.height = `${gridCellHeight}px`;
        newDiv.style.width = `${gridCellWidth}px`;
        newDiv.style.border = "1px solid grey";
        container.appendChild(newDiv);
    }
}

createGrid();
