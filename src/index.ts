import * as readline from "node:readline/promises"; // Import pour lire la console
import { stdin as input, stdout as output } from "node:process";
import {
  car,
  createGrid,
  moveCar,
  populateGridWithCars,
  gameWin,
  type MoveDirection,
} from "./domain.js";
// ... (garde ta fonction populateGridWithCars ici ou importe-la) ...

const main = async () => {
  const rl = readline.createInterface({ input, output });

  let moveCount: number = 0;
  while (true) {
    console.log(`Coups joués : ${moveCount}`);
    let grid = createGrid();
    grid = populateGridWithCars(grid, car);

    console.log("\n--- RUSH HOUR ---");
    grid.forEach((row) => console.log(row.join("\t")));

    // 2. On demande au joueur quoi faire
    const answer = await rl.question(
      '\nEntrez une commande (ex: "red right") ou "exit": '
    );

    if (answer === "exit") {
      break; // On sort de la boucle pour quitter
    }

    // 3. On analyse la réponse (Parsing)
    const [carId, direction] = answer.split(" "); // Coupe "red right" en ["red", "right"]

    // 4. On trouve la voiture
    const selectedCar = car.find((c) => c.id === carId);

    if (!selectedCar) {
      console.log("Voiture introuvable");
      continue;
    }

    const success = moveCar(grid, selectedCar, direction as MoveDirection);

    if (success) {
      console.log("Mouvement effectué");

      moveCount++;

      let checkWinGrid = createGrid();
      checkWinGrid = populateGridWithCars(checkWinGrid, car);

      if (gameWin(checkWinGrid)) {
        console.log("\n--- VICTOIRE ---");
        console.log(`Vous avez gagné en : ${moveCount} coup(s)`);
        checkWinGrid.forEach((row) => console.log(row.join("\t")));

        break;
      }
    }
  }

  rl.close();
};

void main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
