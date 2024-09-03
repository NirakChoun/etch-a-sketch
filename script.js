const container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let j = 1; j <= 16; j++) {
        const col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);
    }
}

container.addEventListener("mouseover", (event) => {
    const col = event.target;
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    if (col.classList[0] === "col") {
        col.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        setTimeout(() => {
            col.style.backgroundColor = "";
        }, 1000);
    }
})

function setGrid() {
    let grid;
    do {
        grid = parseInt(prompt("Enter the number of squares per side for the new grid: "));
        if (grid > 100) {
            alert("The maximum grid is 100x100!");
        } else if (grid === 0) {
            alert("Grid can't be 0x0!");
        }
    } while (grid > 100 || grid === 0);
    
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 1; i <= grid; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    
        for (let j = 1; j <= grid; j++) {
            const col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
        }
    }
}





