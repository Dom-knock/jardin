const garden = document.getElementById("garden");
const addPlantBtn = document.getElementById("addPlantBtn");
const waterAllBtn = document.getElementById("waterAllBtn");
const clearGardenBtn = document.getElementById("clearGardenBtn");

let plantCount = 0;

function createPlant() {
  plantCount++;

  const plant = document.createElement("div");
  plant.classList.add("plant", "level-1");
  plant.dataset.level = "1";

  const maxX = garden.clientWidth - 80;
  const minY = garden.clientHeight * 0.48;
  const maxY = garden.clientHeight - 130;

  const x = Math.random() * maxX;
  const y = minY + Math.random() * (maxY - minY);

  plant.style.left = `${x}px`;
  plant.style.top = `${y}px`;

  plant.innerHTML = `
    <div class="flower">🌸</div>
    <div class="leaves">
      <div class="leaf left"></div>
      <div class="leaf right"></div>
    </div>
    <div class="stem"></div>
    <div class="plant-label">Plante ${plantCount}</div>
  `;

  plant.addEventListener("click", () => {
    waterPlant(plant);
  });

  garden.appendChild(plant);
}

function waterPlant(plant) {
  let level = parseInt(plant.dataset.level, 10);

  if (level < 3) {
    level++;
    plant.dataset.level = level.toString();
    plant.classList.remove("level-1", "level-2", "level-3");
    plant.classList.add(`level-${level}`);
  } else {
    plant.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.12)" },
        { transform: "scale(1)" }
      ],
      {
        duration: 400
      }
    );
  }
}

function waterAllPlants() {
  const plants = document.querySelectorAll(".plant");
  plants.forEach((plant) => waterPlant(plant));
}

function clearGarden() {
  garden.innerHTML = "";
  plantCount = 0;
}

addPlantBtn.addEventListener("click", createPlant);
waterAllBtn.addEventListener("click", waterAllPlants);
clearGardenBtn.addEventListener("click", clearGarden);