function resizeGrid(newGridSize) {
  let blockLength = gridSize / newGridSize; // Calculate block size in pixels
  for (let i = 0; i < newGridSize; i++) {
    for (let j = 0; j < newGridSize; j++) {
      let block = document.createElement("div");
      block.style.height = `${blockLength}px`;
      block.style.width = `${blockLength}px`;
      grid.appendChild(block);
      block.addEventListener("mouseover",()=>{
        block.className = "box";
      })
    }
  }
}

const gridSize = 640;
let grid = document.querySelector(".grid");
let btn = document.querySelector("#btn")
let boxes = document.querySelectorAll(".box")

btn.addEventListener("click",()=>{
  let newSize = parseInt(prompt("New size for grid: "))
  grid.innerHTML = ""
  resizeGrid(newSize);
})

resizeGrid(32);
