const garden = document.getElementById("garden");//On récupère l'élément du jardin pour y ajouter les plantes et gérer les interactions.
const addPlantBtn = document.getElementById("addPlantBtn");//On récupère le bouton pour ajouter une plante et lui associer une fonction de création de plante.
const waterAllBtn = document.getElementById("waterAllBtn");// 
const clearGardenBtn = document.getElementById("clearGardenBtn");//On récupère les boutons pour arroser toutes les plantes et pour nettoyer le jardin, et leur associer des fonctions respectives.

let plantCount = 0;//On initialise le compteur de plantes.

function createPlant() {//Cette fonction est appelée lorsqu'on clique sur le bouton "Ajouter une plante". Elle crée une nouvelle plante avec des caractéristiques aléatoires et l'ajoute au jardin.
  plantCount++;//On incrémente le compteur de plantes pour donner un numéro unique à chaque plante.

  const plant = document.createElement("div");//On crée un nouvel élément div qui représentera la plante dans le jardin.
  plant.classList.add("plant", "level-1");//On ajoute les classes CSS "plant" et "level-1" à l'élément pour lui donner un style de base et indiquer qu'elle commence au niveau 1.
  plant.dataset.level = "1";//On stocke le niveau de la plante dans un attribut de données personnalisé pour pouvoir le gérer facilement lors de l'arrosage.

  const maxX = garden.clientWidth - 80;// On calcule les limites de positionnement pour la plante afin qu'elle ne dépasse pas les bords du jardin. La largeur de la plante est prise en compte pour éviter qu'elle ne soit partiellement hors du jardin.
  const minY = garden.clientHeight * 0.48;// On définit une limite inférieure pour la position verticale de la plante afin qu'elle ne soit pas trop basse dans le jardin, laissant de l'espace pour les autres éléments visuels.
  const maxY = garden.clientHeight - 130;// 

  const x = Math.random() * maxX;// On génère une coordonnée x aléatoire pour la position de la plante dans le jardin, en respectant la limite maximale définie précédemment.
  const y = minY + Math.random() * (maxY - minY);// On génère des coordonnées aléatoires pour la position de la plante dans le jardin, en respectant les limites définies précédemment.

  plant.style.left = `${x}px`;// On positionne la plante à l'aide de styles CSS en utilisant les coordonnées x et y générées aléatoirement.
  plant.style.top = `${y}px`;// On positionne la plante à l'aide de styles CSS en utilisant les coordonnées x et y générées aléatoirement.

  // On définit le contenu HTML de la plante, qui comprend une fleur, des feuilles, une tige et une étiquette avec le numéro de la plante. Cela permet de donner un aspect visuel à la plante dans le jardin.
  plant.innerHTML = `
    <div class="flower">🌸</div>
    <div class="leaves">
      <div class="leaf left"></div>
      <div class="leaf right"></div>
    </div>
    <div class="stem"></div>
    <div class="plant-label">Plante ${plantCount}</div>
  `;

  plant.addEventListener("click", () => {// On ajoute un écouteur d'événement de clic à la plante pour permettre à l'utilisateur de l'arroser en cliquant dessus. Lorsque la plante est cliquée, la fonction waterPlant est appelée pour augmenter son niveau ou déclencher une animation si elle est déjà au niveau maximum.
    waterPlant(plant);// On appelle la fonction waterPlant en passant la plante cliquée comme argument pour gérer l'arrosage de cette plante spécifique.
  });

  garden.appendChild(plant);// On ajoute la plante nouvellement créée au jardin en tant qu'enfant de l'élément du jardin, ce qui la rend visible à l'utilisateur.
}

function waterPlant(plant) {// Cette fonction est appelée lorsqu'une plante est cliquée pour être arrosée. Elle vérifie le niveau actuel de la plante et l'augmente si elle n'est pas encore au niveau maximum, ou déclenche une animation si elle est déjà au niveau maximum.
  let level = parseInt(plant.dataset.level, 10);// On récupère le niveau actuel de la plante à partir de l'attribut de données personnalisé et le convertit en entier pour pouvoir le manipuler.

  if (level < 3) {// Si le niveau de la plante est inférieur à 3, on l'augmente de 1 pour faire pousser la plante.
    level++;// On incrémente le niveau de la plante pour indiquer qu'elle a poussé d'un niveau.
    plant.dataset.level = level.toString();// On met à jour l'attribut de données personnalisé avec le nouveau niveau de la plante pour pouvoir le gérer lors des prochains arrosages.
    plant.classList.remove("level-1", "level-2", "level-3");// On supprime les classes CSS de niveau précédentes pour éviter les conflits de styles lorsque la plante change de niveau.
    plant.classList.add(`level-${level}`);// On ajoute la classe CSS correspondant au nouveau niveau de la plante pour lui donner le style approprié à son niveau de croissance.
  } else {
    plant.animate(// Si la plante est déjà au niveau maximum (niveau 3), on déclenche une animation de rebond pour indiquer que la plante est pleinement épanouie et ne peut pas pousser davantage.
      [
        { transform: "scale(1)" },// L'animation commence avec la plante à sa taille normale.
        { transform: "scale(1.12)" },// La plante s'agrandit légèrement pour créer un effet de rebond, indiquant que la plante est pleinement épanouie.
        { transform: "scale(1)" }// L'animation se termine avec la plante revenant à sa taille normale, créant un effet de rebond pour indiquer que la plante est pleinement épanouie.
      ],
      {
        duration: 400// La durée totale de l'animation est de 400 millisecondes, ce qui permet de créer un effet de rebond rapide et fluide.
      }
    );
  }
}

function waterAllPlants() {// Cette fonction est appelée lorsqu'on clique sur le bouton "Arroser toutes les plantes". Elle parcourt toutes les plantes présentes dans le jardin et les arrose en appelant la fonction waterPlant pour chacune d'entre elles, ce qui permet de faire pousser toutes les plantes en même temps ou de déclencher l'animation de rebond si elles sont déjà au niveau maximum.
  const plants = document.querySelectorAll(".plant");// On sélectionne tous les éléments du jardin qui ont la classe "plant" pour obtenir une liste de toutes les plantes présentes dans le jardin.
  plants.forEach((plant) => waterPlant(plant));// On parcourt la liste de plantes et on appelle la fonction waterPlant pour chaque plante, ce qui permet de les arroser toutes en même temps ou de déclencher l'animation de rebond si elles sont déjà au niveau maximum.
}

function clearGarden() {// Cette fonction est appelée lorsqu'on clique sur le bouton "Nettoyer le jardin". Elle vide le contenu de l'élément du jardin en supprimant toutes les plantes présentes, et réinitialise le compteur de plantes à zéro pour permettre de recommencer à ajouter des plantes à partir de zéro.
  garden.innerHTML = "";// On vide le contenu de l'élément du jardin en supprimant toutes les plantes présentes, ce qui nettoie le jardin et le prépare pour de nouvelles plantes.
  plantCount = 0;// On réinitialise le compteur de plantes à zéro pour permettre de recommencer à ajouter des plantes à partir de zéro, ce qui garantit que les nouvelles plantes auront des numéros uniques à partir de 1.
}

addPlantBtn.addEventListener("click", createPlant);// On ajoute un écouteur d'événement de clic au bouton "Ajouter une plante" pour appeler la fonction createPlant lorsque le bouton est cliqué, ce qui permet à l'utilisateur d'ajouter de nouvelles plantes au jardin en cliquant sur ce bouton.
waterAllBtn.addEventListener("click", waterAllPlants);// On ajoute un écouteur d'événement de clic au bouton "Arroser toutes les plantes" pour appeler la fonction waterAllPlants lorsque le bouton est cliqué, ce qui permet à l'utilisateur d'arroser toutes les plantes du jardin en cliquant sur ce bouton.
clearGardenBtn.addEventListener("click", clearGarden);// On ajoute un écouteur d'événement de clic au bouton "Nettoyer le jardin" pour appeler la fonction clearGarden lorsque le bouton est cliqué, ce qui permet à l'utilisateur de nettoyer le jardin en supprimant toutes les plantes présentes en cliquant sur ce bouton.