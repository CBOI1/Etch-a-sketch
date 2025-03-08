// add 16 div grid to body
let body = document.body;
const DEFAULT_GRID_COUNT = 100;

let container = document.querySelector("div.container");
//calculate width and height of each grid cell

function createGrid(grid_count) {
    let gridCellWidth = container.offsetWidth / grid_count;
    let gridCellHeight = container.offsetHeight / grid_count;
    
    for (let i = 0; i < grid_count * grid_count; i++) {
        let newDiv = document.createElement("div");
        newDiv.style.height = `${gridCellHeight}px`;
        newDiv.style.width = `${gridCellWidth}px`;
        newDiv.style.border = "0.1px solid grey";
        newDiv.addEventListener("mouseleave", e => {
            const classes = e.target.classList;
            if (!classes.contains("colored")) {
                classes.add("colored");
            }
        })
        container.appendChild(newDiv);
    }
}

const gridButton = document.querySelector("#grid-button");
gridButton.addEventListener("click", e => {
    let userInput = +prompt("Enter grid cell count dimension (only 1 dimension)", 50)
    if (Number.isInteger(userInput)) {
        userInput = Math.min(Math.max(userInput, 16), 100);
        //clear the grid 
        while (container.childNodes.length > 0) {
            container.removeChild(container.firstChild);
        }
        createGrid(userInput);
    }
})

createGrid(DEFAULT_GRID_COUNT);


